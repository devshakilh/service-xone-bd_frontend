"use client";
import { Layout } from "antd";
import Footer from "./footer";
import Navbar from "./navHader";

const { Content } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content>
      <Navbar />

      <div
        style={{
          padding: "10px",
        }}
      >
        {children}
      </div>

      <Footer />
    </Content>
  );
};

export default Contents;
