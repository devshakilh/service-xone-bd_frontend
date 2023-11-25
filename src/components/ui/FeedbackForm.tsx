"use client";
import { useCreateFeedbackMutation } from "@/redux/api/feedbackApi";
import { Button, Col, Row, message } from "antd";
import Image from "next/image.js";
import { SubmitHandler } from "react-hook-form";
import FormTextArea from "../forms/FormTextArea.tsx";
import Form from "../forms/form";
import FormInput from "../forms/formInput";
type FormValues = {
  id: string;
  password: string;
};
const FeedbackForm = () => {
  const [createFeedback] = useCreateFeedbackMutation();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res = await createFeedback(data).unwrap();

      if (res?.success) {
        message.success("Thank you for your feedback.");
      } else {
        message.error("Something went wrong.");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      {" "}
      <div
        style={{
          display: "flex",
          width: "100%",
          //   backgroundColor: "#f5f5f6",

          alignItems: "center",
          justifyContent: "center",
          padding: "0 50px ",
          borderRadius: "10px",
        }}
      ></div>
      <Row>
        <Col span={12}>
          <Image
            style={{
              width: "95%",
              height: "82%",
              borderRadius: "30px",
            }}
            alt="feedback image"
            src="https://res.cloudinary.com/dhvuyehnq/image/upload/v1697723185/kowvt3prcl15acim8hn0.gif"
            width={400}
            height={300}
          />
        </Col>

        <Col span={12}>
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
              <Col span={12}>
                <FormInput
                  name="name"
                  type="tsxt"
                  size="large"
                  placeholder="Enter your name"
                  label="User name"
                />
              </Col>
              <Col span={12}>
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  placeholder="Enter your email"
                  label="User Email"
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
                  label="Comments"
                  style={{ height: 50, marginBottom: 24 }}
                  name="comment"
                  placeholder="comments"
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
                  label="Suggestions"
                  style={{ height: 150, marginBottom: 24 }}
                  name="message"
                  placeholder="suggestions"
                />
              </Col>
            </Row>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                style={{
                  margin: "1.7rem 0",
                  width: "40%",
                  height: "50px",
                }}
                type="primary"
                htmlType="submit"
              >
                Send Feedback
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default FeedbackForm;
