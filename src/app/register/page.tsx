import RegisterPage from "@/components/login/register";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User | Register",
};

const Login = () => {
  return <RegisterPage />;
};

export default Login;
