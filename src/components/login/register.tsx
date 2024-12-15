"use client";
import { Button, Col, Row, message } from "antd";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import {
  useCreatUserMutation,
  useUserLoginMutation,
} from "@/redux/api/authApi";

import { registerSchema } from "@/schemas/regiser";
import { storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link.js";
import { useState } from "react";
import FormTextArea from "../forms/FormTextArea.tsx";
import { motion } from 'framer-motion';  // <-- import framer-motion
import Image from "next/image.js";
import SMBreadcrumb from "@/components/ui/Breadcrumb";
type FormValues = {
  id: string;
  password: string;
};

const RegisterPage = () => {
  const [passwords, setPassword] = useState("123456Aa");
  const [creatUser] = useCreatUserMutation();
  const [userLogin] = useUserLoginMutation();

  const router = useRouter();

  console.log(passwords);
  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    console.log(passwords);
    setTimeout(async () => {
      try {
        setPassword(data?.password);
        const res: any = await creatUser({ profileImg: "", ...data }).unwrap();
        if (res?.success) {
          message.success("User Register Success");
          setTimeout(async () => {
            try {
              const ress: any = await userLogin({
                email: res?.data?.email,
                password: passwords,
              }).unwrap();

              if (ress?.success) {
                storeUserInfo({ accessToken: ress?.accessToken });
                router.push("/");
                message.success("User Login Success");
              } else {
                message.success("Login New Email & Password ");
                router.push("/login");
              }
            } catch (error) {
              console.error(error);
            }
          }, 2000);
        } else {
          message.error("User Register Failed");
        }
      } catch (error) {
        console.error(error);
      }
    }, 1000);
  };

  return (
    <Row
      align={"middle"}
      justify={"center"}
      style={{
        minHeight: "100vh",
        backgroundColor: "#f8fafc",
      }}
    >
      <Col
        xs={24} sm={12} md={12} lg={10} 
        style={{
          padding: "0 30px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            padding: "80px 20px 40px 20px",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{
              height: "120px",
              borderRadius: "20px",
              width: "90%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              top: "-70px",
              backgroundColor: "black",
              color: "white",
              padding: "0 10px",
            }}
          >
            <SMBreadcrumb
                items={[
                  { label: "", path: "/" },
                 
                ]}
                style={{
                  color: "#fff",
                  fontSize: "17px",
                }}
              />
            <h1 style={{ fontSize: "2.5rem" }}>Sign Up</h1>
          </motion.div>

          <Form submitHandler={onSubmit} resolver={yupResolver(registerSchema)}>
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{ margin: "15px 0" }}
              >
                <FormInput
                  name="name"
                  type="text"
                  size="large"
                  placeholder="Enter your Full Name"
                  label="User Name"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  placeholder="Enter your email"
                  label="User Email"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                style={{ margin: "15px 0" }}
              >
                <FormInput
                  name="contactNumber"
                  type="number"
                  size="large"
                  placeholder="Enter your contact number"
                  label="User Contact Number"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <FormTextArea
                  name="address"
                  placeholder="Provide address"
                  label="User Address"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                style={{ margin: "15px 0" }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  placeholder="Password"
                  label="User Password"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <Button
                  style={{
                    width: "100%",
                    margin: "15px 0",
                  
                  }}
                  type="primary"
                  htmlType="submit"
                >
                  Register
                </Button>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.1 }}
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                already have an account ? &nbsp;
                <Link
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                  href="/login"
                >
                  login here
                </Link>
              </motion.p>
            </>
          </Form>
        </motion.div>
      </Col>

      {/* Side Image Section */}
      <Col
        xs={0}
        sm={0}
        md={12}
        lg={14}
        xl={12}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f0f2f5",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src="https://res.cloudinary.com/ddcvlgbog/image/upload/v1734263815/computer-login-concept-illustration_114360-7962_wznc7w.avif" // Replace with your image URL
            alt="Login Illustration"
            width={500}
            height={500}
            style={{ objectFit: "cover", borderRadius: "8px" }}
          />
        </motion.div>
      </Col>
    </Row>
  );
};

export default RegisterPage;
