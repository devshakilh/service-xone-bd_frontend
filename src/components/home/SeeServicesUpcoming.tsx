"use client";
import Loading from "@/app/loading";
import { services_upcoming } from "@/constants/golobal";
import { useServicessQuery } from "@/redux/api/serviceApi";
import { Avatar, Button, Card, Col, Rate, Row } from "antd";
import Link from "next/link";

const SeeServicesUpcoming = () => {
  const { data, isLoading, refetch } = useServicessQuery({});

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
            Upcoming Services
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
        <Row style={{}} gutter={[16, 16]}>
          {/*  */}
          {services_upcoming?.slice(0, 8)?.map((service: any, i: any) => {
            return (
              <Col span={4.5} order={i} key={i}>
                {/* <Link href={`/services/details/${service?.id}`}> */}
                <Card
                  // onClick={() => router.push(`/services/details/${service?.id}`)}
                  hoverable
                  style={{ width: 230, marginTop: "17px" }}
                  cover={
                    <Avatar shape="square" size={230} src={service?.image} />
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
                          fontSize: "14px",
                          fontWeight: "bold",
                          color: "black",
                        }}
                      >
                        {service?.price_range} ৳
                      </p>

                      <div>
                        <Rate
                          style={{
                            fontSize: "10px",
                          }}
                          allowHalf
                          defaultValue={service?.rating}
                        />
                      </div>
                    </div>
                    <p
                      style={{
                        marginTop: "5px",
                        fontSize: "16px",
                        fontWeight: "bold",
                        color: "black",
                      }}
                    >
                      {service?.name}
                    </p>
                  </div>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default SeeServicesUpcoming;
