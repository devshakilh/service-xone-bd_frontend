import ServicesItem from "@/components/Services";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navHader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service-Xone-BD | Services",
};

const Services = () => {
  return (
    <div>
      <Navbar />

      <Container>
        <div>
          <ServicesItem />
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Services;
