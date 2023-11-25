"use client";
import { useRouter } from "next/router";

const DashboardPage = () => {
  const router = useRouter();
  return router.push("/booking");
};

export default DashboardPage;
