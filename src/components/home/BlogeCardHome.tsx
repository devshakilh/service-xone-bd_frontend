"use client";
import Loading from "@/app/loading";
import { useBlogsQuery } from "@/redux/api/blogApi";
import { CalendarOutlined } from "@ant-design/icons";
import { Avatar, Card, Col, Row } from "antd";
import Meta from "antd/es/card/Meta";

const BlogeCardHome = () => {
  const { data, isLoading } = useBlogsQuery({});
  const blogs = data?.data;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <Row
        style={{
          height: "100%",
        }}
        gutter={[20, 20]}
      >
        {blogs?.slice(0, 4).map((blog: any, i: number) => (
          <Col
            style={{
              marginBottom: "20px",
            }}
            key={i}
            span={6}
          >
            <Card
              hoverable
              style={{ width: 290 }}
              cover={
                <Avatar shape={"square"} size={290} src={blog?.imageLink} />
              }
            >
              <p
                style={{
                  color: "gray",
                  marginBottom: "10px",
                }}
              >
                <CalendarOutlined
                  style={{
                    color: "green",
                    marginRight: "10px",
                  }}
                />
                {new Date(blog?.createdAt).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                })}
              </p>
              <Meta
                title={blog?.title}
                description={blog?.content.slice(0, 70)}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogeCardHome;