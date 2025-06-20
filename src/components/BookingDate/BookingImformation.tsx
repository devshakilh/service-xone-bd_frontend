"use client";
import Loading from "@/app/loading";
import { useProfileQuery } from "@/redux/api/user";
import { CalendarOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { Skeleton, Button, Card, Col, Input, Row } from "antd";
import Meta from "antd/es/card/Meta";

const BookingImformation = ({
  service,
  newDate,
  endTime,
  startTime,
}: {
  service: any;
  newDate: string;
  endTime: string;
  startTime: string;
}) => {
  const { data, isLoading, isError } = useProfileQuery({});

  if (isLoading) {
    return (
      <div
        style={{
          height: "22rem",
          padding: "1rem",
          border: "1px solid #e6e6e6",
          marginTop: "1rem",
          borderRadius: "0.5rem",
          backgroundColor: "#e6e6e6",
        }}
      >
        <Row>
          <Col span={16}>
            <Skeleton active paragraph={{ rows: 4 }} />
          </Col>
          <Col span={8}>
            <Skeleton active paragraph={{ rows: 6 }} />
          </Col>
        </Row>
      </div>
    );
  }

  if (isError || !data?.data) {
    return (
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <h2 style={{ color: "red" }}>Error: Unable to load booking information</h2>
      </div>
    );
  }

  const { title, price, tax } = service;
  const { name, email, contactNumber, address } = data.data;

  return (
    <div
      style={{
        height: "22rem",
        padding: "1rem",
        border: "1px solid #e6e6e6",
        marginTop: "1rem",
        borderRadius: "0.5rem",
        backgroundColor: "#e6e6e6",
      }}
    >
      <Row>
        <Col span={16}>
          <div>
            <div
              className="lg:w-[100%] lg:flex"
              style={{
                justifyContent: "evenly",
                gap: "1rem",
              }}
            >
              <Card className="lg:w-[45%]" title="Booking Date">
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <CalendarOutlined
                    style={{
                      fontSize: "2rem",
                      color: "#1890ff",
                    }}
                  />
                  <Meta title={newDate} />
                </div>
              </Card>
              <Card className="lg:w-[45%]" title="Booking Time">
                <div
                  style={{
                    display: "flex",
                    gap: "1rem",
                    alignItems: "center",
                  }}
                >
                  <ClockCircleOutlined
                    style={{
                      fontSize: "2rem",
                      color: "#1890ff",
                    }}
                  />
                  <Meta title={startTime} />
                  To
                  <Meta title={endTime} />
                </div>
              </Card>
            </div>
          </div>
          <div style={{ marginTop: "0.5rem" }}>
            <Card className="lg:w-[92%]" title={"Booking Information"}>
              <Row>
                <Col span={12}>
                  <p>
                    <b>Name : {name} </b>
                  </p>
                  <p>
                    <b>Mobile : {contactNumber} </b>
                  </p>
                  <p>
                    <b>Address : {contactNumber} </b>
                  </p>
                </Col>
                <Col span={12}>
                  <p>
                    <b>Address : {address} </b>
                  </p>
                  <p>
                    <b>Email : {email} </b>
                  </p>
                  <p>
                    <b>Service Location : {service?.location} </b>
                  </p>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
        <Col span={8}>
          <Card className="lg-w-[100%]" title="Price Summary">
            <div className="gap-[16px] items-center">
              <p>
                <b
                  className="text-[16px]"
                  style={{
                    color: "green",
                  }}
                >
                  {title}
                </b>
              </p>
              <hr />
              <p>
                <b className="text-[16px]">Price :  {price}  tk</b>
              </p>
              <p className="text-[16px]">Tax (%) :  {tax} </p>
            </div>
          </Card>
          <Card className="lg:w-[100%] mt-2" title="Offer & Discount">
            <Input
              placeholder="Enter Coupon Code"
              className="lg:w-[70%]"
            />{" "}
            <Button>Apply</Button>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BookingImformation;