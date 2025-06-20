"use client";

import { useServicesQuery } from "@/redux/api/serviceApi";
import { Rate } from "antd";
import Image from "next/image";
import BookingSchudle from "./BookingSchudle";
import BookingRequestLoading from "./skeleton/booking-request-loading.skeleton";

const Booking = ({ id }: { id: string }) => {
  const { data, isLoading } = useServicesQuery(id);
  const service = data?.data;


  if (isLoading || !service) {
    return <BookingRequestLoading />;
  }

  return (
    <div >
      {/* Booking Information */}

      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
          height: "350px",
        }}
      >
        <div
          style={{
            width: "40%",
          }}
        >
          <Image
            style={{ height: "100%", width: "100%", borderRadius: "10px" }}
            src={service?.imageLink}
            width={400}
            height={200}
            alt="Picture of the author"
          />
        </div>
        <div
          style={{
            width: "60%",
            height: "15rem",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",

              justifyContent: "center",
              padding: "1rem",
            }}
          >
            <div>
              <p
                style={{
                  backgroundColor: "yellowGreen",
                  color: "white",
                  padding: "5px",
                  width: "fit-content",
                  borderRadius: "5px",
                }}
              >
                {service?.category?.title}
              </p>
            </div>

            <div>
              <h1
                style={{
                  fontSize: "3rem",
                }}
              >
                {service?.title}
              </h1>
              <p
                style={{
                  backgroundColor: "skyBlue",
                  color: "white",
                  padding: "5px",
                  width: "fit-content",
                  borderRadius: "5px",
                }}
              >
                {service?.location}
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                  }}
                >
                  <p
                    style={{
                      fontSize: "16px",
                    }}
                  >
                    2.5
                  </p>
                  <Rate
                    style={{
                      fontSize: "14px",
                    }}
                    allowHalf
                    defaultValue={2.5}
                  />
                </div>
                <p
                  style={{
                    fontSize: "16px",
                    color: "gray",
                    marginTop: "5px",
                  }}
                >{`(${1} Reviews)`}</p>
              </div>
              <div>
                <h2>Price {service?.price} TK</h2>
                <p
                  style={{
                    fontSize: "16px",
                    color: "yellowGreen",
                    marginTop: "5px",
                  }}
                >
                  inclusive of all taxes {service?.tax}%
                </p>
              </div>
            </div>
            <p>{service?.description.slice(0, 300) + "..."}</p>
          </div>
        </div>
      </div>

      {/* Booking Schdule */}
      <BookingSchudle service={service} />
    </div>
  );
};

export default Booking;


