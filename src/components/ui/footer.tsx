'use client';

import {
  FacebookOutlined,
  InstagramOutlined,
  LinkedinOutlined,
  TwitterOutlined,
} from '@ant-design/icons';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: '#',
      icon: <FacebookOutlined className="text-xl" />,
      label: 'Facebook',
      hoverColor: 'hover:text-blue-400',
    },
    {
      href: '#',
      icon: <InstagramOutlined className="text-xl" />,
      label: 'Instagram',
      hoverColor: 'hover:text-pink-400',
    },
    {
      href: '#',
      icon: <TwitterOutlined className="text-xl" />,
      label: 'Twitter',
      hoverColor: 'hover:text-blue-300',
    },
    {
      href: '#',
      icon: <LinkedinOutlined className="text-xl" />,
      label: 'LinkedIn',
      hoverColor: 'hover:text-blue-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <motion.footer
      className="bg-gradient-to-r from-blue-900 to-blue-700 text-white py-8 sm:py-12"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-0">
        <motion.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
        >
          <Link
            href="/"
            className="text-2xl sm:text-3xl font-bold text-white hover:text-yellow-300 transition-colors duration-300"
          >
            SERVICE <br /> ZONE BD
          </Link>
        </motion.div>

        <motion.p
          custom={1}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="text-white text-sm sm:text-base drop-shadow-md"
        >
          © {currentYear} Service-Zone-BD —{' '}
          <Link
            href="devshakilh"
            className="text-white hover:text-yellow-300 transition-colors duration-300"
          >
            @Shakil
          </Link>
        </motion.p>

        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={itemVariants}
          className="flex space-x-4"
        >
          {socialLinks.map((link, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Link
                href={link.href}
                className={`text-white ${link.hoverColor} transition-colors duration-300`}
                aria-label={link.label}
              >
                {link.icon}
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
