"use client";
import {
  FieldTimeOutlined,
  FileDoneOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import { motion } from "framer-motion";

const Overview = () => {
  return (
    <div
      style={{
        margin: "50px 0",
        backgroundColor: "#f5f5f5",
        padding: "80px 0",
        borderRadius: "10px",
      }}
    >
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", marginBottom: "40px" }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontWeight: 700,
            lineHeight: "1.2",
            color: "#007bff",
          }}
        >
          Why Choose Us?
        </h1>
        <p
          style={{
            fontSize: "17px",
            fontWeight: 400,
            color: "gray",
            margin: "0 auto",
            maxWidth: "700px",
          }}
        >
          Choose us for top-notch service and a relaxing atmosphere. Our
          experienced therapists provide personalized treatments, ensuring you
          leave refreshed and revitalized. Your well-being is our priority.
        </p>
      </motion.div>

      {/* Features Section */}
      <Row
        gutter={[16, 16]}
        style={{ justifyContent: "center" }}
      >
        {[
          {
            icon: <FileDoneOutlined style={{ color: "#28a745" }} />,
            title: "Services Done",
            value: "1000+",
          },
          {
            icon: <UsergroupAddOutlined style={{ color: "#007bff" }} />,
            title: "Active Users",
            value: "1M",
          },
          {
            icon: <SolutionOutlined style={{ color: "#ffc107" }} />,
            title: "Professional Experts",
            value: "200+",
          },
          {
            icon: <FieldTimeOutlined style={{ color: "#17a2b8" }} />,
            title: "Online Support",
            value: "24 Hours",
          },
        ].map((item, index) => (
          <Col
            xs={24}
            sm={12}
            md={6}
            key={index}
            style={{ textAlign: "center", justifyContent: "center" }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Avatar
                size={80}
                style={{
                  backgroundColor: "#fff",
                  border: "1px solid #ddd",
                  display: "flex",
                  justifyContent: "center",
                  marginLeft: "17vh",
                  alignItems: "center",
                  textAlign: "center",
                }}
                icon={item.icon}
              />
              <h2 style={{ margin: "15px 0 5px", fontWeight: 600 }}>
                {item.title}
              </h2>
              <h1
                style={{
                  fontSize: "30px",
                  fontWeight: 700,
                  color: "#333",
                }}
              >
                {item.value}
              </h1>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Overview;