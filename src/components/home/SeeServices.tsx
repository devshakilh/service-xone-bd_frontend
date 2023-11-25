"use client";
import Loading from "@/app/loading";
import { useServicessQuery } from "@/redux/api/serviceApi";
import { Avatar, Button, Card, Col, Rate, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";

const SeeServices = () => {
  const { data, isLoading, refetch } = useServicessQuery({});

  const services = data?.services;

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      {" "}
      {/* heding */}
      <div
        style={{
          padding: "30px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "50px",
              color:"#068da4"
            }}
          >
            Services
          </h1>
          <p
            style={{
              marginTop: "10px",
              fontSize: "20px",
              color: "#808080",
            }}
          >
            Our Populer Services
          </p>
        </div>
        <Link href="/services">
          {" "}
          <Button
            type="primary"
            style={{
              backgroundColor: "#FF8C00",
              color: "#fff",
              borderRadius: "5px",
              width: "100px",
            }}
          >
            See All
          </Button>
        </Link>
      </div>
      {/* service option */}
      <div>
        <Row
          style={{
            padding: "20px 0",
          }}
          gutter={[10, 10]}
        >
          {/*  */}
          {services?.slice(0, 10)?.map((service: any, i: any) => {
            return (
              <Col span={4.5} order={i} key={i}>
                <Link href={`/services/details/${service?.id}`}>
                  <Card
                    // onClick={() => router.push(`/services/details/${service?.id}`)}
                    hoverable
                    style={{ width: 240 }}
                    cover={
                      <Avatar
                        shape="square"
                        size={240}
                        src={service?.imageLink}
                      />
                    }
                  >
                    <div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center",
                        }}
                      >
                        <p
                          style={{
                            fontSize: "24px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          {service?.price} ৳
                        </p>

                        <div>
                          <Rate
                            style={{
                              fontSize: "10px",
                            }}
                            allowHalf
                            defaultValue={2.5}
                          />
                        </div>
                      </div>
                      <p>{service?.location}</p>

                      <Meta
                        style={{
                          marginTop: "10px",
                        }}
                        title={
                          <p
                            style={{
                              fontSize: "20px",
                              fontWeight: "bold",
                              color: "#068da4",
                            }}
                          >
                            {service?.title}
                          </p>
                        }
                        description={service?.description.slice(0, 50) + "..."}
                      />
                    </div>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default SeeServices;
