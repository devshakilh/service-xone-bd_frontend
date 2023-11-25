"use client";
import { Avatar, Button, Card, Col, Row } from "antd";
import "react-multi-carousel/lib/styles.css";

import Loading from "@/app/loading";
import { useCategoriesQuery } from "@/redux/api/categorieApi";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import { useRouter } from "next/navigation";

const contentStyle: React.CSSProperties = {
  height: "160px",

  lineHeight: "160px",
  textAlign: "center",
};

const SeeAllCategory = () => {
  const router = useRouter();
  const { data, isLoading } = useCategoriesQuery({});
  const categories = data?.data;
  

  if (isLoading) <Loading />;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div
      style={{
        margin: "50px 0",
      }}
    >
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
            See All Category
          </h1>
          <p
            style={{
              marginTop: "10px",
              fontSize: "20px",
              color: "#808080",
            }}
          >
            Our most popular category
          </p>
        </div>
        <Link href="/categories">
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
      {/* Category option */}
      <div>
        <Row gutter={[20, 20]}>
          {categories?.slice(0, 6)?.map((category: any, i: any) => {
            return (
              <Col span={4} order={i} key={i}>
                <Link href={`/categories/${category?.id}`}>
                  <Card
                    cover={
                      <Avatar
                        style={{
                          padding: "10px",
                        }}
                        size={200}
                        src={category?.imageLink}
                      />
                    }
                    hoverable
                    style={{ width: 200 }}
                    loading={isLoading}
                  >
                    <Meta
                      style={{
                        textAlign: "center",
                        fontSize: 20,
                        fontWeight: "bold",
                        color: "black",
                      }}
                      title={category?.title}
                    />
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

export default SeeAllCategory;
