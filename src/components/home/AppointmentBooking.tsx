import { DotChartOutlined } from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";
import Image from "next/image";

const AppointmentBooking = () => {
  return (
    <div
      style={{
        margin: "50px 0",
      }}
    >
      <Row>
        <Col span={14}>
          <Image
            src="https://res.cloudinary.com/dhvuyehnq/image/upload/v1697709098/ww6pbytxwqrx0tld9ba2.png"
            width={500}
            height={500}
            alt="appointment"
          />
        </Col>
        <Col span={10}>
          <div>
            <div>
              <h1
                style={{
                  fontSize: "50px",
                  fontWeight: 700,
                  lineHeight: "1.2",
                  color: "#1a1a1a",
                  marginBottom: "10px",
                }}
              >
                The Best Online <br /> Appointment Booking!
              </h1>
              <p
                style={{
                  fontSize: "17px",
                  fontWeight: 400,
                  color: "gray",
                  marginBottom: "10px",
                }}
              >
                When choosing the best platform for your needs, consider factors
                like your business size, budget, specific requirements ease of
                use, and any unique features that stand out to you
              </p>
            </div>
            <Row
              style={{
                marginTop: "30px",
              }}
              gutter={[16, 16]}
            >
              <Col
                span={12}
                style={{
                  marginBottom: "20px",
                }}
              >
                <Avatar size={60} icon={<DotChartOutlined />} />
                <h2>Seamless User Experience</h2>
                <p>Booking SaaS System offers a seamless user experience</p>
              </Col>
              <Col
                style={{
                  marginBottom: "20px",
                }}
                span={12}
              >
                <Avatar size={60} icon={<DotChartOutlined />} />
                <h2>Customisable & Scalable</h2>
                <p>
                  We pride a highly customisable and scalable online appointment
                </p>
              </Col>
              <Col span={12}>
                <Avatar size={60} icon={<DotChartOutlined />} />
                <h2>Robust Feature Set</h2>
                <p>
                  set of features designed to streamline appointment management
                </p>
              </Col>
              <Col span={12}>
                <Avatar size={60} icon={<DotChartOutlined />} />
                <h2>Security & Support</h2>
                <p>
                  security and customer support are at the forefront of our
                  priorities
                </p>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default AppointmentBooking;
