"use client";

import { DotChartOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import Image from "next/image";
import { motion } from "framer-motion";

const AppointmentBooking = () => {
  return (
    <div
      style={{
        margin: "50px 0",
        padding: "0 20px",
      }}
    >
      <Row gutter={[20, 20]} align="middle">
        {/* Image Section */}
        <Col xs={24} md={12}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://res.cloudinary.com/dhvuyehnq/image/upload/v1697709098/ww6pbytxwqrx0tld9ba2.png"
              width={500}
              height={500}
              alt="appointment"
              style={{ maxWidth: "100%", height: "auto" }}
            />
          </motion.div>
        </Col>

        {/* Text Content */}
        <Col xs={24} md={12}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h1
                style={{
                  fontSize: "40px",
                  fontWeight: 700,
                  lineHeight: "1.2",
                  color: "#007bff",
                  marginBottom: "20px",
                }}
              >
                The Best Online <br /> Appointment Booking!
              </h1>
              <p
                style={{
                  fontSize: "18px",
                  fontWeight: 400,
                  color: "gray",
                  marginBottom: "20px",
                }}
              >
                When choosing the best platform for your needs, consider factors
                like your business size, budget, specific requirements, ease of
                use, and any unique features that stand out to you.
              </p>
            </div>

            {/* Features Section */}
            <Row gutter={[16, 16]}>
              {[
                {
                  title: "Seamless User Experience",
                  description: "Booking SaaS System offers a seamless user experience",
                },
                {
                  title: "Customisable & Scalable",
                  description: "We provide a highly customisable and scalable system",
                },
                {
                  title: "Robust Feature Set",
                  description:
                    "A set of features designed to streamline appointment management",
                },
                {
                  title: "Security & Support",
                  description:
                    "Security and customer support are at the forefront of our priorities",
                },
              ].map((feature, index) => (
                <Col key={index} xs={24} sm={12}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Avatar
                      size={60}
                      icon={<DotChartOutlined />}
                      style={{ backgroundColor: "#007bff", marginBottom: "10px" }}
                    />
                    <h2
                      style={{
                        fontSize: "18px",
                        fontWeight: 600,
                        color: "#333",
                        marginBottom: "10px",
                      }}
                    >
                      {feature.title}
                    </h2>
                    <p style={{ fontSize: "16px", color: "gray" }}>{feature.description}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default AppointmentBooking;