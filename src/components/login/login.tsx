"use client";
import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { loginSchema } from "@/schemas/login";
import { storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Col, Row, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion"; // For animation
import Image from "next/image"; // For responsive images
import SMBreadcrumb from "@/components/ui/Breadcrumb";


type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin] = useUserLoginMutation();
  const router = useRouter();

  const onSubmit: SubmitHandler<FormValues> = async (data: any) => {
    try {
      const res: any = await userLogin({ ...data });

      if (res?.data?.accessToken) {
        router.push("/");
        message.success("User Login Success");
        storeUserInfo({ accessToken: res?.data?.accessToken });
      } else {
        message.error("User Login Failed. Try again later.");
      }
    } catch (error) {
      console.error(error);
      message.error("An error occurred. Please try again.");
    }
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
      <Col xs={24} sm={16} md={12} lg={10} xl={8} style={{ position: "relative" }}>
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
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
               <SMBreadcrumb
                items={[
                  { label: "", path: "/" },
                 
                ]}
                style={{
                  color: "#fff",
                  fontSize: "17px",
                }}
              />
              <h1 style={{ fontSize: "2.5rem" }}>Sign In</h1>
            </div>

            <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
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
                    placeholder="Password"
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
                  Don’t have an account? &nbsp;
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
            </Form>
          </div>
        </motion.div>
      </Col>

      {/* Image Section */}
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

export default LoginPage;
