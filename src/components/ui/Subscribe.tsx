import { Button, Input, Space } from "antd";
import Image from "next/image";
import React from "react";

const Subscribe: React.FC = () => (
  <div
    style={{
      padding: "10px",
      overflow: "hidden",
      width: "100%",
      backgroundColor: "#f3f4f6",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      margin: "10px 0",
      borderRadius: "10px",
    }}
  >
    <div
      style={{
        width: "40%",
      }}
    >
      <Image
        style={{
          borderRadius: "10px",
        }}
        src="https://res.cloudinary.com/dhvuyehnq/image/upload/v1697475843/gwqs0bxffqsu5eeqkedl.webp"
        alt="subscribe"
        width={400}
        height={500}
      />
    </div>
    <div
      style={{
        width: "60%",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          color: "black",
        }}
      >
        Stay Connected with BookingDo Subscribe <br /> to Our Email Updates
      </h1>
      <p
        style={{
          fontSize: "20px",

          color: "black",
          margin: "10px 0",
        }}
      >
        Subscribe to our email updates and stay in the loop with the latest
        news, insights, and exciting developments. Join our community to receive
        curated content, exclusive offers, and valuable resources delivered
        right to your inbox
      </p>

      <Space.Compact style={{ width: "50%" }}>
        <Input defaultValue="Combine input and button" />
        <Button type="primary">Subscribe</Button>
      </Space.Compact>
    </div>
  </div>
);

export default Subscribe;
