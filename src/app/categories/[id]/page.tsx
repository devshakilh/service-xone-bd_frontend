"use client";

import Loading from "@/app/loading";
import SMBreadcrumb from "@/components/ui/Breadcrumb";
import Subscribe from "@/components/ui/Subscribe";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navHader";
import { useServicessQuery } from "@/redux/api/serviceApi";
import { useDebounced } from "@/redux/hooks";
import { IdcardOutlined } from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Empty,
  Pagination,
  PaginationProps,
  Rate,
  Row,
} from "antd";
import Meta from "antd/es/card/Meta";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ServicesItemCategorySarch = ({ params }: any) => {
  const id = params.id;

  const query: Record<string, any> = {};

  const router = useRouter();

  const [sige, setSige] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categoryId, setCategoryId] = useState<any>({});
  const [current, setCurrent] = useState<number>();

  query["page"] = page;
  query["limit"] = sige;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["search"] = searchTerm;
  query["categoryId"] = id;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["search"] = debouncedTerm;
  }

  const { data, isLoading, refetch } = useServicessQuery({ ...query });

  const services = data?.services;

  const serviceTitele = services?.find((service: any) => service);

  const meta = data?.meta;

  const onChange: PaginationProps["onChange"] = (page) => {
    setPage(page);
    setCurrent(page);
  };
  const handelBook = (value: any) => {
    router.push(`/booking-requst/${value?.id}`);
  };

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSige(pageSize);
  };
  const onTableChange = (pagination: any, filters: any, sorter: any) => {
    const { field, order } = sorter;
    setSortBy(field);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };
  const resetFilter = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
    setCategoryId("");
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Navbar />
      <Container>
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#317f8c",
            margin: "20px 0",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <h1
            style={{
              color: "#fff",
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            {serviceTitele?.category?.title
              ? serviceTitele?.category?.title
              : "Emty"}{" "}
            Services
          </h1>
          <SMBreadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Categories", path: "/categories" },
              { label: categoryId?.label || "Categorie Services" },
            ]}
            style={{
              color: "#fff",
              fontSize: "17px",
            }}
          />
        </div>

        <Row
          style={{
            marginTop: "70px",
            padding: "20px 0",
          }}
          gutter={[20, 20]}
        >
          {services?.length > 0 ? (
            services?.map((service: any, i: any) => {
              return (
                <Col span={6} order={i} key={i}>
                  <Card
                    hoverable
                    style={{ width: 300, marginTop: "17px" }}
                    cover={
                      <Avatar
                        shape="square"
                        size={300}
                        src={service?.imageLink}
                      />
                    }
                  >
                    <div
                      onClick={() =>
                        router.push(`/services/details/${service?.id}`)
                      }
                    >
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
                            fontSize: "28px",
                            fontWeight: "bold",
                            color: "black",
                          }}
                        >
                          {service?.price} ৳
                        </p>

                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "5px",
                          }}
                        >
                          <p
                            style={{
                              fontSize: "16px",
                            }}
                          >
                            2.5
                          </p>
                          <Rate
                            style={{
                              fontSize: "14px",
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
                        description={service?.description.slice(0, 70) + "..."}
                      />
                    </div>
                    <Button
                      style={{
                        marginTop: "10px",
                        width: "100%",
                        height: "40px",
                        backgroundColor: "yellowGreen",
                        color: "#fff",
                      }}
                      onClick={() => handelBook(service)}
                    >
                      Book Now
                      <IdcardOutlined style={{ marginLeft: "5px" }} />
                    </Button>
                  </Card>
                </Col>
              );
            })
          ) : (
            <Empty
              style={{
                margin: "auto",
                marginTop: "100px",
                marginBottom: "100px",
              }}
            />
          )}
        </Row>

        <Row>
          {services?.length > 0 ? (
            <Col
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                margin: "20px 0",
              }}
              span={24}
            >
              <Pagination
                showSizeChanger
                current={current}
                onChange={onChange}
                total={500}
              />
            </Col>
          ) : null}
        </Row>

        <Subscribe />
      </Container>
      <Footer />
    </>
  );
};

export default ServicesItemCategorySarch;