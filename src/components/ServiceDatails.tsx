"use client";

import Loading from "@/app/loading";
import { useServicesQuery } from "@/redux/api/serviceApi";
import DeatilsBody from "./DeatilsBody";
import SMBreadcrumb from "./ui/Breadcrumb";

const ServiceDatailsCard = ({ id }: { id: string }) => {
  const { data, isLoading } = useServicesQuery(id);
  const service = data?.data;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
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
          {service?.title}&nbsp;Details
        </h1>
        <br />
        <div>
          <SMBreadcrumb
            items={[
              { label: "Home", path: "/" },
              { label: "Services", path: "/services" },
              { label: "Services Details", path: `/services/details/${id}` },
            ]}
            style={{
              color: "#fff",
              fontSize: "17px",
            }}
          />
        </div>
      </div>
      <DeatilsBody service={service} />
    </div>
  );
};

export default ServiceDatailsCard;
