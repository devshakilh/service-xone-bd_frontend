import FaqsSection from "@/components/FaqsSection";
import AppointmentBooking from "@/components/home/AppointmentBooking";
import BlogPost from "@/components/home/BlogPost";
import FeedBack from "@/components/home/FeedBack";
import Overview from "@/components/home/Overview";
import SeeAllCategory from "@/components/home/SeeAllCategory";
import SeeServices from "@/components/home/SeeServices";
import SeeServicesUpcoming from "@/components/home/SeeServicesUpcoming";

import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import HeroSection from "@/components/ui/hero-section";
import Navbar from "@/components/ui/navHader";
import { Metadata } from "next";
import Faqs from "./faq/page";

export const metadata: Metadata = {
  title: "Service-Xone-BD",
};

const HomePage = () => {
  return (
    <>
    
      <Navbar />
      <HeroSection />
      <Container>
        <SeeAllCategory />
        <SeeServices />
        <AppointmentBooking />
        <SeeServicesUpcoming />
        <BlogPost />
        <Overview /><Faqs/>
        <FeedBack />
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
