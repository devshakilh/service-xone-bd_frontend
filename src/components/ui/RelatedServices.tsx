"use client";

import Loading from "@/app/loading";
import { useServicesCategotyIdQuery } from "@/redux/api/serviceApi";
import { Avatar, Card, Col, Rate, Row } from "antd";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import { useRouter } from "next/navigation";

const RelatedServices = ({ service }: any) => {
  const router = useRouter();
  const { data, isLoading } = useServicesCategotyIdQuery(service?.categoryId);

  const services = data?.data?.data;

  const filter = services?.filter((servic: any) => servic?.id !== service?.id);
  if (isLoading) {
    return <Loading />;
  }
  return (
    <Row
      style={{
        marginTop: "20px",
        padding: "20px 0",
      }}
    >
      {/*  */}
      {filter?.slice(0, 5)?.map((service: any, i: any) => {
        return (
          <Col span={8} order={i} key={i}>
            <Link href={`/services/details/${service?.id}`}>
              <Card
                // onClick={() => router.push(`/services/details/${service?.id}`)}
                hoverable
                style={{ width: 250, marginTop: "17px" }}
                cover={
                  <Avatar shape="square" size={250} src={service?.imageLink} />
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
                          color: "black",
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
  );
};

export default RelatedServices;
