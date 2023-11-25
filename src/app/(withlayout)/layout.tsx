"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Contents from "@/components/ui/contents";

import { isLoggedIn } from "@/services/auth.service";
import Loading from "../loading";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const userLoggedIn = isLoggedIn();

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading, userLoggedIn]);

  if (!isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <Contents>{children}</Contents>
    </div>
  );
};

export default DashboardLayout;
