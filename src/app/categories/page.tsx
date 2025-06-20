"use client"
import CategoriesOption from "@/components/Categories";
import SMBreadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navHader";
import { Metadata } from "next";



const Categories = () => {
  return (
    <div>
      <Navbar />

      <Container>
        <div
          style={{
            marginTop: "20px",
          }}
        >
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
              All Categoris
            </h1>
            <br />
            <div>
              <SMBreadcrumb
                items={[
                  { label: "Home", path: "/" },
                  { label: "Categories", path: "/categories" },
                ]}
                style={{
                  color: "#fff",
                  fontSize: "17px",
                }}
              />
            </div>
          </div>

          <CategoriesOption />
        </div>
      </Container>

      <Footer />
    </div>
  );
};

export default Categories;
