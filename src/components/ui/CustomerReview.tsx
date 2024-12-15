"use client";
import {
  Avatar,
  Button,
  Col,
  Progress,
  Rate,
  Row,
  Statistic,
  message,
} from "antd";
import { SubmitHandler } from "react-hook-form";

import Form from "@/components/forms/form";
import { ratingOptions } from "@/constants/golobal";
import { useCreateReviewMutation, useReviewQuery } from "@/redux/api/reviewApi";
import { LikeOutlined } from "@ant-design/icons";
import dayjs from "dayjs";
import FormTextArea from "../forms/FormTextArea.tsx";
import FormSelectField from "../forms/formSelectField";

type FormValues = {
  id: string;
  password: string;
};

const CustomerReview = ({ service }: any) => {
  const [createReview] = useCreateReviewMutation();

  const { data, refetch } = useReviewQuery(service?.id);

  const review = data?.data;
 
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await createReview({
        serviceId: service?.id,
        ...data,
      }).unwrap();

      if (res?.success) {
        message.success("Review posted successfully.");
        refetch();
      } else {
        message.error("User has not booked this service.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Row
        gutter={24}
        style={{
          display: "flex",
          backgroundColor: "#317f8c",
          justifyContent: "centers",
          alignItems: "center",
          padding: "0 50px ",
          flexDirection: "row",
          borderRadius: "10px",

          height: "200px",
        }}
      >
        <Col span={12}>
          <Statistic title="Feedback" value={1128} prefix={<LikeOutlined />} />
        </Col>
        <Col span={12}>
          {/* <Statistic title="Unmerged" value={93} suffix="/ 100" /> */}
          {/* <Progress percent={50} steps={25} /> */}
          <Progress percent={50} status="active" />
          <Progress percent={30} status="active" />
          <Progress percent={20} status="active" />
        </Col>
      </Row>
      <Form submitHandler={onSubmit}>
        <Row
          gutter={24}
          style={{
            backgroundColor: "#f5f5f6",
            padding: " 10px",
            marginTop: "1rem",
            borderRadius: "10px",
          }}
        >
          <Col span={24}>
            <FormSelectField
              name="rating"
              options={ratingOptions}
              placeholder="Seclit rating"
            />
          </Col>
        </Row>
        <Row
          gutter={24}
          style={{
            backgroundColor: "#f5f5f6",
            padding: " 10px",
            marginTop: "1rem",
            borderRadius: "10px",
          }}
        >
          <Col span={24}>
            <FormTextArea
              style={{ height: 150, marginBottom: 24 }}
              name="review"
              placeholder="Seclit rating"
            />
          </Col>
        </Row>
        <Button
          style={{
            marginTop: "1rem",
            width: "20%",
          }}
          type="primary"
          htmlType="submit"
        >
          Post Review
        </Button>
      </Form>

      {review?.map((item: any, i: number) => {
        return (
          <div key={i}>
            <div
              style={{
                marginTop: "1rem",
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  gap: "2rem",
                }}
              >
                <div>
                  <Avatar src={item?.user?.profileImg} size={64} />
                </div>
                <div
                  style={{
                    marginTop: "1rem",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "100%",
                    paddingRight: "2rem",
                  }}
                >
                  <div>
                    <h3>
                      <b>{item?.user?.name}</b>
                    </h3>
                    <p
                      style={{
                        marginTop: "10px",
                      }}
                    >
                      <b>
                        {dayjs(item?.createdAt).format("MMM D, YYYY hh:mm A")}
                      </b>
                    </p>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      gap: "0.5rem",
                      alignItems: "center",
                    }}
                  >
                    <h2>{item?.rating}</h2>
                    <Rate value={item?.rating} />
                  </div>
                </div>
              </div>

              <p
                style={{
                  marginLeft: "5.7rem",
                  marginTop: "1rem",
                }}
              >
                {item?.review}
              </p>
              <hr
                style={{
                  marginTop: "1rem",
                }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CustomerReview;
