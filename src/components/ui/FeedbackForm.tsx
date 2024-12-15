"use client";
import { useCreateFeedbackMutation } from "@/redux/api/feedbackApi";
import { Button, Col, Row, message } from "antd";
import Image from "next/image.js";
import { motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col items-center py-8"
    >
      <Row className="w-full max-w-6xl">
        <Col xs={24} md={12} className="flex justify-center items-center">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              className="rounded-lg shadow-lg"
              alt="feedback image"
              src="https://res.cloudinary.com/dhvuyehnq/image/upload/v1697723185/kowvt3prcl15acim8hn0.gif"
              width={400}
              height={300}
            />
          </motion.div>
        </Col>

        <Col xs={24} md={12}>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Form submitHandler={onSubmit}>
              <Row gutter={[16, 16]} className="bg-gray-100 p-4 rounded-lg">
                <Col span={12}>
                  <FormInput
                    name="name"
                    type="text"
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
              <Row gutter={[16, 16]} className="bg-gray-100 p-4 mt-4 rounded-lg">
                <Col span={24}>
                  <FormTextArea
                    label="Comments"
                    style={{ height: 50, marginBottom: 24 }}
                    name="comment"
                    placeholder="Your comments"
                  />
                </Col>
              </Row>
              <Row gutter={[16, 16]} className="bg-gray-100 p-4 mt-4 rounded-lg">
                <Col span={24}>
                  <FormTextArea
                    label="Suggestions"
                    style={{ height: 150, marginBottom: 24 }}
                    name="message"
                    placeholder="Your suggestions"
                  />
                </Col>
              </Row>
              <div className="flex justify-center mt-6">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Button
                    className="bg-blue-500 text-white w-40 h-12 rounded-lg"
                    type="primary"
                    htmlType="submit"
                  >
                    Send Feedback
                  </Button>
                </motion.div>
              </div>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default FeedbackForm;
