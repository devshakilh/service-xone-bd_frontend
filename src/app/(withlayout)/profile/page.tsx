import ProfileBook from "@/components/ProfileBook";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

const ProfilePage = () => {
  return <ProfileBook />;
};

export default ProfilePage;
