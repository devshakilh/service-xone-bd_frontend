'use client';

import { motion, AnimatePresence } from 'framer-motion';

import { authKey } from '@/constants/storageKey';
import { useProfileQuery } from '@/redux/api/user';
import { getUserInfo, removeUserInfo } from '@/services/auth.service';
import {
  DashboardOutlined,
  LoginOutlined,
  LogoutOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Avatar, Button, Dropdown, MenuProps, message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Container from './container';
import { naveItems } from '@/constants/navbar-item';

const Navbar = () => {
  const { role } = getUserInfo() as any;
  const router = useRouter();
  const { data, isLoading } = useProfileQuery({});
  const userProfile = data?.data;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const logOut = () => {
    removeUserInfo(authKey);
    message.success('Logout Successfully');
    router.push('/');
    setIsMenuOpen(false);
  };

  const menuItems: MenuProps['items'] = [
    role && {
      key: '0',
      label: (
        <Link href="/profile">
          <Button type="text" icon={<UserOutlined />}>
            Profile
          </Button>
        </Link>
      ),
    },
    role && {
      key: '1',
      label: (
        <Link href="/booking">
          <Button type="text" icon={<DashboardOutlined />}>
            Booking List
          </Button>
        </Link>
      ),
    },
    {
      key: '2',
      label: role ? (
        <Button type="text" icon={<LogoutOutlined />} onClick={logOut}>
          Logout
        </Button>
      ) : (
        <Link href="/login">
          <Button type="text" icon={<LoginOutlined />}>
            Login
          </Button>
        </Link>
      ),
    },
  ].filter(Boolean);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, height: 0 },
    open: { opacity: 1, height: '100vh', transition: { duration: 0.3 } },
  };

  const hamburgerVariants = {
    closed: { rotate: 0, y: 0 },
    open: { rotate: 45, y: 6 },
  };

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center text-white py-4"
      >
        Loading...
      </motion.div>
    );
  }

  return (
    <motion.header
      className="sticky top-0 z-50 bg-gradient-to-r from-blue-500 to-blue-700 shadow-md"
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-white text-xl font-bold leading-tight">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              SERVICE <br /> ZONE BD
            </motion.div>
          </Link>

          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              className="w-6 h-0.5 bg-white absolute"
              variants={hamburgerVariants}
              animate={isMenuOpen ? 'open' : 'closed'}
            />
            <motion.span
              className="w-6 h-0.5 bg-white absolute"
              animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
            />
            <motion.span
              className="w-6 h-0.5 bg-white absolute"
              variants={{
                closed: { rotate: 0, y: 0 },
                open: { rotate: -45, y: -6 },
              }}
              animate={isMenuOpen ? 'open' : 'closed'}
            />
          </button>

          <nav
            className={`md:flex ${isMenuOpen ? 'block' : 'hidden'} absolute md:static top-full left-0 right-0 bg-blue-700 md:bg-transparent w-full md:w-auto`}
          >
            <AnimatePresence>
              {isMenuOpen && (
                <motion.div
                  variants={mobileMenuVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="flex flex-col md:hidden p-4"
                >
                  {naveItems.map((item, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="py-3 text-center border-b border-white/10 last:border-0"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Link
                        href={item.path}
                        className="text-white uppercase text-lg"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <div className="hidden md:flex items-center gap-6">
              {naveItems.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Link
                    href={item.path}
                    className="text-white uppercase text-base hover:text-blue-100"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </nav>

          <div className="flex items-center gap-2">
            {userProfile?.name && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="hidden md:block text-white text-base font-medium"
              >
                {userProfile.name}
              </motion.span>
            )}
            <Dropdown placement="bottomRight" arrow menu={{ items: menuItems }}>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Avatar
                  size="large"
                  icon={userProfile?.profileImg ? null : <UserOutlined />}
                  src={userProfile?.profileImg}
                  className="cursor-pointer"
                />
              </motion.div>
            </Dropdown>
          </div>
        </div>
      </Container>
    </motion.header>
  );
};

export default Navbar;
