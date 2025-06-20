"use client";

import { Button, message, Skeleton } from "antd";
import { useRouter } from "next/navigation";
import { SubmitHandler } from "react-hook-form";
import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";

import { useCreatUserMutation, useUserLoginMutation } from "@/redux/api/authApi";

import { storeUserInfo } from "@/services/auth.service";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import SMBreadcrumb from "@/components/ui/Breadcrumb";
import { registerSchema } from "@/schemas/regiser";
import FormTextArea from "../forms/FormTextArea.tsx";

interface FormValues {
  name: string;
  email: string;
  contactNumber: string;
  address: string;
  password: string;
}

interface ApiResponse {
  success: boolean;
  data?: { email: string };
  accessToken?: string;
  message?: string;
}

const RegisterPage = () => {
  const [creatUser, { isLoading: isCreating }] = useCreatUserMutation();
  const [userLogin, { isLoading: isLoggingIn }] = useUserLoginMutation();
  const router = useRouter();
  const [showSkeleton, setShowSkeleton] = useState(true);

  // Simulate initial loading for skeleton (replace with actual logic if needed)
  setTimeout(() => setShowSkeleton(false), 1000);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const res: ApiResponse = await creatUser({ profileImg: "", ...data }).unwrap();
      if (res?.success) {
        message.success("User Registered Successfully");
        try {
          const loginRes: ApiResponse = await userLogin({
            email: data.email,
            password: data.password,
          }).unwrap();
          if (loginRes?.success && loginRes?.accessToken) {
            storeUserInfo({ accessToken: loginRes.accessToken });
            router.push("/");
            message.success("User Logged In Successfully");
          } else {
            message.error("Auto-login failed. Please log in manually.");
            router.push("/login");
          }
        } catch (error) {
          message.error("Auto-login failed. Please log in manually.");
          router.push("/login");
        }
      } else {
        message.error(res?.message || "User Registration Failed");
      }
    } catch (error: any) {
      message.error(error?.message || "Registration failed. Please try again.");
    }
  };

  // Skeleton Loading
  if (showSkeleton) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
        <div className="bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-2xl max-w-xl w-full">
          <Skeleton active avatar paragraph={{ rows: 1 }} />
          <Skeleton.Input active block className="mt-4" />
          <Skeleton.Input active block className="mt-4" />
          <Skeleton.Input active block className="mt-4" />
          <Skeleton.Input active block className="mt-4" />
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
            Create Account
          </motion.h1>
        </div>

        {/* Register Form */}
        <Form submitHandler={onSubmit} resolver={yupResolver(registerSchema)} aria-label="Registration form">
          <div className="space-y-6">
       <div className="flex gap-4">     <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <FormInput
                name="name"
                type="text"
                size="large"
                placeholder="Full Name"
                label="Full Name"
                required
               
              />
            </motion.div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
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
            </div>
        <div className="flex gap-4">    <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <FormInput
                name="contactNumber"
                type="text" // Changed to text to handle various phone formats
                size="large"
                placeholder="Contact Number"
                label="Contact Number"
                required
              
              />
            </motion.div> 
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
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
            </div>
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <FormTextArea
                name="address"
                placeholder="Enter your address"
                label="Address"
                rows={4}
              
              />
            </motion.div>
           
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                loading={isCreating || isLoggingIn}
                className="w-full  bg-blue-600 hover:bg-blue-700 border-none rounded-xl h-12 text-base"
                disabled={isCreating || isLoggingIn}
              >
                {isCreating || isLoggingIn ? "Registering..." : "Sign Up"}
              </Button>
            </motion.div>
            <div className="text-center text-gray-600">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 font-semibold hover:underline">
                Sign in
              </Link>
            </div>
          </div>
        </Form>
      </motion.div>
    </div>
  );
};

export default RegisterPage;