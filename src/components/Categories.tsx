"use client";

import { useCategoriesQuery } from "@/redux/api/categorieApi";
import { Avatar, Card, Col, Empty, Row } from "antd";
import Meta from "antd/es/card/Meta";

import Loading from "@/app/loading";
import { useRouter } from "next/navigation";
import Subscribe from "./ui/Subscribe";

const CategoriesOption = () => {
  const { data, isLoading } = useCategoriesQuery({});

  const router = useRouter();

  const categories = data?.data;

  const handelCatagory = (id: string) => {
    router.push(`/categories/${id}`);
  };
  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Row
        style={{
          padding: "20px 0",
        }}
        gutter={[20, 20]}
      >
        {categories?.length > 0 ? (
          categories?.map((category: any, i: any) => {
            return (
              <Col span={4} order={i} key={i}>
                <Card
                  onClick={() => handelCatagory(category?.id)}
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

      <Subscribe />
    </>
  );
};

export default CategoriesOption;
