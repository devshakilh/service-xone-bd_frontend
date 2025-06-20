"use client";

import { Skeleton, Rate } from "antd";
import { CSSProperties } from "react";

const BookingRequestLoading = () => {
  const containerStyle: CSSProperties = {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    height: "350px",
  };

  const imageStyle: CSSProperties = {
    width: "40%",
    height: "100%",
    borderRadius: "10px",
  };

  const contentStyle: CSSProperties = {
    width: "60%",
    height: "15rem",
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    justifyContent: "center",
    padding: "1rem",
  };

  return (
    <div style={containerStyle}>
      {/* Image Placeholder */}
      <div style={imageStyle}>
        <Skeleton.Image active style={{ width: "100%", height: "100%" }} />
      </div>
      {/* Content Placeholder */}
      <div style={contentStyle}>
        {/* Category */}
        <Skeleton.Button active style={{ width: "100px", height: "20px" }} />
        {/* Title */}
        <Skeleton.Input active style={{ width: "80%", height: "40px" }} />
        {/* Location */}
        <Skeleton.Button active style={{ width: "120px", height: "20px" }} />
        {/* Rating and Price */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div>
            <Skeleton.Input active style={{ width: "50px", height: "20px" }} />
            <Rate disabled value={0} style={{ fontSize: "14px" }} />
            <Skeleton.Input active style={{ width: "80px", height: "16px" }} />
          </div>
          <div>
            <Skeleton.Input active style={{ width: "100px", height: "24px" }} />
            <Skeleton.Input active style={{ width: "120px", height: "16px" }} />
          </div>
        </div>
        {/* Description */}
        <Skeleton paragraph={{ rows: 3, width: ["90%", "80%", "60%"] }} />
      </div>
    </div>
  );
};

export default BookingRequestLoading;