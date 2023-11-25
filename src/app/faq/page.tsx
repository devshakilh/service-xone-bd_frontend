import FaqsSection from "@/components/FaqsSection";
import SMBreadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navHader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service-Xone-BD | Faqs",
};

const Faqs = () => {
  return (
    <div>
      <Navbar />

      <Container>
        {/* bredcone and baner */}
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#317f8c",
            margin: "20px 0",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <h1
            style={{
              color: "#fff",
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            Frequently Asked Questions
          </h1>
          <br />
          <div>
            <SMBreadcrumb
              items={[
                { label: "Home", path: "/" },
                { label: "Faqs", path: "/faq" },
              ]}
              style={{
                color: "#fff",
                fontSize: "17px",
              }}
            />
          </div>
        </div>

        <FaqsSection />
      </Container>

      <Footer />
    </div>
  );
};

export default Faqs;
