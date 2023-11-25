import {
  FieldTimeOutlined,
  FileDoneOutlined,
  SolutionOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { Avatar, Col, Row } from "antd";

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
      <div
        style={{
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            fontWeight: 700,
            lineHeight: "1.2",
            color:"#068da4",
            marginBottom: "10px",
          }}
        >
          Why Choose Us?
        </h1>
        <p
          style={{
            fontSize: "17px",
            fontWeight: 400,
            color: "gray",
            marginBottom: "10px",
            margin: "0 150px",
          }}
        >
          Choose us for top-notch service and a relaxing atmosphere. Our
          experienced therapists provide personalized treatments, ensuring you
          leave refreshed and revitalized. Your well-being is our priority.
        </p>
      </div>

      <Row
        style={{
          marginTop: "30px",
        }}
        gutter={[16, 16]}
      >
        <Col
          span={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar
            size={60}
            icon={
              <FileDoneOutlined
                style={{
                  color: "green",
                }}
              />
            }
          />
          <h2>Services Done</h2>
          <h1>1000+</h1>
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
          span={6}
        >
          <Avatar
            size={60}
            icon={
              <UsergroupAddOutlined
                style={{
                  color: "green",
                }}
              />
            }
          />
          <h2>Active User</h2>
          <h1>1M</h1>
        </Col>
        <Col
          span={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar
            size={60}
            icon={
              <SolutionOutlined
                style={{
                  color: "green",
                }}
              />
            }
          />
          <h2>Professional Expert</h2>
          <h1>200+</h1>
        </Col>
        <Col
          span={6}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <Avatar
            size={60}
            icon={
              <FieldTimeOutlined
                style={{
                  color: "green",
                }}
              />
            }
          />
          <h2>Online Support</h2>
          <h1>24 hours</h1>
        </Col>
      </Row>
    </div>
  );
};

export default Overview;
