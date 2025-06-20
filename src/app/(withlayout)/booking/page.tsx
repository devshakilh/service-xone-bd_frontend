"use client"
import BookingList from "@/components/BookingList";
import SMBreadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/container";
import { Metadata } from "next";



export default function Booking() {
  return (
    <Container>
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
          Booking List
        </h1>
        <SMBreadcrumb
          items={[
            { label: "Home", path: "/" },
            { label: "Booking", path: "/booking" },
          ]}
          style={{
            color: "#fff",
            fontSize: "17px",
          }}
        />
      </div>
      <BookingList />
    </Container>
  );
}