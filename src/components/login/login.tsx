"use client";

import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { loginSchema } from "@/schemas/login";
import { storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Skeleton, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import { motion } from "framer-motion";
import { useState } from "react";
import SMBreadcrumb from "@/components/ui/Breadcrumb";

type FormValues = {
  email: string;
  password: string;
};

const LoginPage = () => {
  const [userLogin, { isLoading }] = useUserLoginMutation();
  const router = useRouter();
  const [showSkeleton, setShowSkeleton] = useState(true);

  // Simulate initial loading for skeleton (replace with actual logic if needed)
  setTimeout(() => setShowSkeleton(false), 1000);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res: any = await userLogin({ ...data });
      if (res?.data?.accessToken) {
        router.push("/");
        message.success("User Login Success");
        storeUserInfo({ accessToken: res?.data?.accessToken });
      } else {
        message.error("User Login Failed. Try again later.");
      }
    } catch (error: any) {
      message.error(error?.message || "An error occurred. Please try again.");
    }
  };

  // Skeleton Loading
  if (showSkeleton) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-xl w-full">
          <Skeleton active avatar paragraph={{ rows: 1 }} />
          <Skeleton.Input active block className="mt-6" />
          <Skeleton.Input active block className="mt-4" />
          <Skeleton.Button active block className="mt-6" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="bg-white/90 backdrop-blur-lg p-8 rounded-2xl shadow-2xl max-w-xl w-full"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <SMBreadcrumb
            items={[{ label: "Home", path: "/" }]}
            
          />
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mt-2"
          >
            Welcome Back
          </motion.h1>
        </div>

        {/* Login Form */}
        <Form submitHandler={onSubmit} resolver={yupResolver(loginSchema)}>
          <div className="space-y-6">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <FormInput
                name="email"
                type="email"
                size="large"
                placeholder="Email address"
                label="Email"
                required
                
              />
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <FormInput
                name="password"
                type="password"
                size="large"
                placeholder="Password"
                label="Password"
                required
               
              />
            </motion.div>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={isLoading}
                className="w-full bg-blue-600 hover:bg-blue-700 border-none rounded-xl h-12 text-base"
                disabled={isLoading}
              >
                {isLoading ? "Logging in..." : "Sign In"}
              </Button>
            </motion.div>
            <div className="text-center text-gray-600">
              Don’t have an account?{" "}
              <Link href="/register" className="text-blue-600 font-semibold hover:underline">
                Sign up
              </Link>
            </div>
          </div>
        </Form>
      </motion.div>
    </div>
  );
};

export default LoginPage;