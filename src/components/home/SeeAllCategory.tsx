"use client";

import { Avatar, Button, Card, Col, Row, Skeleton } from "antd";
import "react-multi-carousel/lib/styles.css";
import Loading from "@/app/loading";
import { useCategoriesQuery } from "@/redux/api/categorieApi";
import Meta from "antd/es/card/Meta";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const SeeAllCategory = () => {
  const router = useRouter();
  const { data, isLoading } = useCategoriesQuery({});
  const categories = data?.data;

  if (isLoading) {
    return (
      <div
        style={{
          margin: "50px 0",
          padding: "0 20px",
        }}
      >
        {/* Heading Section */}
        <div
          style={{
            padding: "30px 0",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
          }}
        >
          <div>
            <h1
              style={{
                fontSize: "40px",
                color: "#007bff",
                textAlign: "left",
              }}
            >
              See All Categories
            </h1>
            <p
              style={{
                marginTop: "10px",
                fontSize: "18px",
                color: "#808080",
                textAlign: "left",
              }}
            >
              Explore our most popular categories
            </p>
          </div>
          <Link href="/categories">
            <Button
              type="primary"
              style={{
                backgroundColor: "#FF8C00",
                color: "#fff",
                borderRadius: "5px",
                width: "120px",
                height: "40px",
                fontWeight: "bold",
              }}
            >
              See All
            </Button>
          </Link>
        </div>

        {/* Skeleton Loading Grid */}
        <div>
          <Row gutter={[20, 20]} justify="center">
            {[...Array(6)].map((_, i) => (
              <Col xs={24} sm={12} md={8} lg={4} key={i}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    hoverable
                    style={{
                      width: "100%",
                      maxWidth: "200px",
                    
                      borderRadius: "8px",
                      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    }}
                  >
                    {/* Skeleton Loading for Card Cover and Meta */}
                    <Skeleton.Avatar
                      active
                      size={155}
                      style={{
                        marginBottom: "10px",
                        backgroundColor: "#f5f5f5",
                      }}
                    />
                    <Skeleton.Input
                      active
                      style={{
                        width: "80%",
                        margin: "0 auto",
                        height: "20px",
                        backgroundColor: "#e0e0e0",
                      }}
                    />
                    <Skeleton.Input
                      active
                      style={{
                        width: "60%",
                        margin: "0 auto",
                        height: "15px",
                        backgroundColor: "#e0e0e0",
                      }}
                    />
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </div>
    );
  }

  return (
    <div
      style={{
        margin: "50px 0",
        padding: "0 20px",
      }}
    >
      {/* Heading Section */}
      <div
        style={{
          padding: "30px 0",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "40px",
              color: "#007bff",
              textAlign: "left",
            }}
          >
            See All Categories
          </h1>
          <p
            style={{
              marginTop: "10px",
              fontSize: "18px",
              color: "#808080",
              textAlign: "left",
            }}
          >
            Explore our most popular categories
          </p>
        </div>
        <Link href="/categories">
          <Button
            type="primary"
            style={{
              backgroundColor: "#FF8C00",
              color: "#fff",
              borderRadius: "5px",
              width: "120px",
              height: "40px",
              fontWeight: "bold",
            }}
          >
            See All
          </Button>
        </Link>
      </div>

      {/* Categories Grid */}
      <div>
        <Row gutter={[20, 20]} justify="center">
          {categories?.slice(0, 6)?.map((category: any, i: number) => {
            return (
              <Col xs={24} sm={12} md={8} lg={4} key={i}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link href={`/categories/${category?.id}`}>
                    <Card
                      cover={
                        <Avatar
                          style={{
                            padding: "10px",
                            backgroundColor: "#f5f5f5",
                          }}
                          size={185}
                          src={category?.imageLink}
                        />
                      }
                      hoverable
                      style={{
                        width: "100%",
                        maxWidth: "200px",
                        margin: "0 auto",
                        borderRadius: "8px",
                        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                      }}
                    >
                      <Meta
                        style={{
                          textAlign: "center",
                          fontSize: "16px",
                          fontWeight: "bold",
                          color: "#333",
                        }}
                        title={category?.title}
                      />
                    </Card>
                  </Link>
                </motion.div>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
};

export default SeeAllCategory;
