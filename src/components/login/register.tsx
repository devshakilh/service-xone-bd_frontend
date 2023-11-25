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
          // router.push("/login");
          message.success("User Reister Success");
          setTimeout(async () => {
            try {
              const ress: any = await userLogin({
                email: res?.data?.email,
                password: passwords,
              }).unwrap();

              if (ress?.success) {
                storeUserInfo({ accessToken: ress?.accessToken });
                router.push("/");
                message.success("And User Login Success");
              } else {
                message.success("Login Nwe Email & Password ");
                router.push("/login");
              }
            } catch (error) {
              console.error(error);
            }
          }, 2000);
        } else {
          message.error("User Reister Fail");
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
      <Col span={5}>
        <div
          style={{
            padding: "80px 20px 40px 20px",
            borderRadius: "10px",
            backgroundColor: "white",
            boxShadow: "0 0 10px rgba(0,0,0,0.1)",
            position: "relative",
          }}
        >
          <div
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
            <h1 style={{ fontSize: "2.5rem" }}>Sign up</h1>
          </div>
          {/* form */}
          <Form submitHandler={onSubmit} resolver={yupResolver(registerSchema)}>
            <>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <FormInput
                  name="name"
                  type="text"
                  size="large"
                  placeholder="Enter your Full Name"
                  label="User Name"
                />
              </div>
              <div>
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  placeholder="Enter your email"
                  label="User Email"
                />
              </div>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <FormInput
                  name="contactNumber"
                  type="number"
                  size="large"
                  placeholder="Enter your contact number"
                  label="User Contact Number"
                />
              </div>
              <div>
                <FormTextArea
                  name="address"
                  placeholder="Provide  address"
                  label="User Address"
                />
              </div>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  placeholder="password"
                  label="User Password"
                />
              </div>
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
              <p
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
              </p>
            </>
          </Form>
          {/* form */}
        </div>
      </Col>
    </Row>
  );
};

export default RegisterPage;

{
  /* <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
            <>
              <div>
                <FormInput
                  name="email"
                  type="email"
                  size="large"
                  placeholder="Enter your email"
                  label="User Email"
                />
              </div>
              <div
                style={{
                  margin: "15px 0",
                }}
              >
                <FormInput
                  name="password"
                  type="password"
                  size="large"
                  placeholder="password"
                  label="User Password"
                />
              </div>
              <Button
                style={{
                  width: "100%",
                  margin: "15px 0",
                }}
                type="primary"
                htmlType="submit"
              >
                Login
              </Button>

              <p
                style={{
                  textAlign: "center",
                  marginTop: "10px",
                }}
              >
                Don`t have an account? &nbsp;
                <Link
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontSize: "15px",
                  }}
                  href="/register"
                >
                  Sign up
                </Link>
              </p>
            </>
          </Form> */
}
