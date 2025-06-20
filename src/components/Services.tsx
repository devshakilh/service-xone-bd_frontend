"use client";

import Loading from "@/app/loading";
import { useServicessQuery } from "@/redux/api/serviceApi";
import { useDebounced } from "@/redux/hooks";
import {
  FallOutlined,
  IdcardOutlined,
  ReloadOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import {
  Avatar,
  Button,
  Card,
  Col,
  Empty,
  Input,
  Pagination,
  PaginationProps,
  Rate,
  Row,
  Skeleton,
} from "antd";
import Meta from "antd/es/card/Meta";
import { useRouter } from "next/navigation";
import { useState } from "react";
import ServiceCategoreField from "./forms/service-catagory";
import SMBreadcrumb from "./ui/Breadcrumb";
import Subscribe from "./ui/Subscribe";

const ServicesItem = () => {
  const router = useRouter();
  const query: Record<string, any> = {};

  const [sige, setSige] = useState<number>(12);
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
  query["categoryId"] = categoryId?.value;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (debouncedTerm) {
    query["search"] = debouncedTerm;
  }

  const { data, isLoading, refetch } = useServicessQuery({ ...query });
  const services = data?.services;
  const meta = data?.meta;

  const handleBook = (value: any) => {
    router.push(`/booking-requst/${value?.id}`);
  };

  const onPaginationChange = (page: number, pageSize: number) => {
    setPage(page);
    setSige(pageSize);
  };

  const onChange: PaginationProps["onChange"] = (page) => {
    setPage(page);
    setCurrent(page);
  };

  const onTableChange = (order: string) => {
    setSortBy("price");
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilter = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
    setCategoryId("");
  };

  if (isLoading) {
    return (
      <Row gutter={[20, 0]}>
        {Array.from({ length: 8 }).map((_, index) => (
          <Col span={6} key={index}>
            <Card style={{ width: 300, marginTop: "8px" }}>
              <Skeleton.Image style={{ width: 300, height: 200 }} active />
              <Skeleton active paragraph={{ rows: 3 }} />
            </Card>
          </Col>
        ))}
      </Row>
    );
  }

  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "300px",
          backgroundColor: "#317f8c",
          margin: "20px 0",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            color: "#fff",
            fontSize: "50px",
            fontWeight: "bold",
            animation: "fadeIn 1s",
          }}
        >
          {categoryId?.label || "All Services"}
        </h1>
        <div>
          <SMBreadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
            ]}
            style={{
              color: "#fff",
              fontSize: "17px",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "start",
            gap: "10px",
            alignItems: "center",
            width: "70%",
            height: "110px",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            borderRadius: "10px",
            position: "absolute",
            top: "70%",
            padding: "10px 20px",
          }}
        >
          <Input
            type="text"
            size="large"
            placeholder="Search ..."
            value={searchTerm}
            style={{ width: "300px" }}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
          <ServiceCategoreField
            setCategoryId={setCategoryId}
            categoryId={categoryId}
          />
          <Button onClick={() => onTableChange("ascend")}>
            <RiseOutlined />
          </Button>
          <Button onClick={() => onTableChange("desc")}>
            <FallOutlined />
          </Button>
          {(!!sortBy || !!sortOrder || searchTerm || categoryId) && (
            <Button onClick={resetFilter}>
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </div>

      <Row gutter={[20, 20]} style={{ marginTop: "70px", padding: "20px 0" }}>
        {services?.length > 0 ? (
          services.map((service: any, i: any) => (
            <Col span={6} key={i}>
              <Card
                hoverable
                style={{ width: 300, marginTop: "17px", transition: "transform 0.3s" }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.05)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                cover={<Avatar shape="square" size={300} src={service?.imageLink} />}
              >
                <div onClick={() => router.push(`/services/details/${service?.id}`)}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <p style={{ fontSize: "25px", fontWeight: "bold" }}>{service?.price} ৳</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <p style={{ fontSize: "16px" }}>2.5</p>
                      <Rate style={{ fontSize: "14px" }} allowHalf defaultValue={2.5} />
                    </div>
                  </div>
                  <p>{service?.location}</p>
                  <Meta
                    title={<p style={{ fontSize: "20px", fontWeight: "bold", color: "#007bff" }}>{service?.title}</p>}
                    description={service?.description.slice(0, 70) + "..."}
                  />
                </div>
                <Button
                  style={{ marginTop: "10px", width: "100%", height: "40px", backgroundColor: "#007bff", color: "#fff" }}
                  onClick={() => handleBook(service)}
                >
                  Book Now
                  <IdcardOutlined style={{ marginLeft: "5px" }} />
                </Button>
              </Card>
            </Col>
          ))
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

      <Row gutter={[20, 20]}>
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
      </Row>

      <Subscribe />
    </div>
  );
};

export default ServicesItem;