import LoginPage from "@/components/login/login";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "User | Login",
};

const Login = () => {
  return <LoginPage />;
};

export default Login;
