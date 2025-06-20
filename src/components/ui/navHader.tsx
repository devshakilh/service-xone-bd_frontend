"use client";

import Loading from "@/app/loading";
import { naveItems } from "@/constants/navbar-item";
import { authKey } from "@/constants/storageKey";
import { useProfileQuery } from "@/redux/api/user";
import { getUserInfo, removeUserInfo } from "@/services/auth.service";
import {
  DashboardOutlined,
  LoginOutlined,
  LogoutOutlined,
  RadarChartOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Button, Dropdown, MenuProps, Space, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Container from "./container";

const Navbar = () => {
  const { role } = getUserInfo() as any;
  const router = useRouter();
  const { data, isLoading, refetch } = useProfileQuery({});
  const userProfile = data?.data;

  const logOut = () => {
    removeUserInfo(authKey);
    message.success("Logout Successfully");
    refetch();
    router.push("/");
  };

  if (isLoading) return <Loading />;

  const items: MenuProps["items"] = [
    {
      key: "0",
      label: role ? (
        <>
          <Link style={{ padding: "0 50px" }} href="/profile">
            <Button type="text">
              <UserOutlined onMouseEnter={() => {}} onMouseLeave={() => {}} /> Profile
            </Button>
          </Link>
        </>
      ) : null,
    },
    {
      key: "1",
      label: role ? (
        <>
          <Link style={{ padding: "0 50px" }} href="/booking">
            <Button type="text">
              <DashboardOutlined onMouseEnter={() => {}} onMouseLeave={() => {}} /> Booking List
            </Button>
          </Link>
        </>
      ) : null,
    },
    {
      key: "2",
      label: role ? (
        <Link style={{ padding: "0 50px" }} onClick={logOut} href="">
          <Button type="text">
            <LogoutOutlined onMouseEnter={() => {}} onMouseLeave={() => {}} /> Logout
          </Button>
        </Link>
      ) : (
        <Link style={{ padding: "0 50px" }} href="/login">
          <Button type="text">
            <LoginOutlined onMouseEnter={() => {}} onMouseLeave={() => {}} /> Login
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <header
      className="custom-header"
      style={{
        background: "#007bff",
      }}
    >
      <Container>
        <div className="header">
          <div>
            <Link
              className="title-font"
              href="/"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              SERVICE <br /> ZONE BD
            </Link>
          </div>
          <nav className="nav-links">
            {naveItems.map((item, index) => (
              <Link
                style={{
                  textTransform: "uppercase",
                  fontSize: "17px",
                  color: "white",
                }}
                key={index}
                href={item?.path}
                className="mr-5"
              >
                {item?.label}
              </Link>
            ))}
          </nav>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              {userProfile?.name}
            </p>
            <Dropdown placement="bottom" arrow={true} menu={{ items }}>
              <a>
                <Space wrap size={16}>
                  <Avatar
                    size="large"
                    icon={<UserOutlined onMouseEnter={() => {}} onMouseLeave={() => {}} />}
                    src={userProfile?.profileImg}
                  />
                </Space>
              </a>
            </Dropdown>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navbar;