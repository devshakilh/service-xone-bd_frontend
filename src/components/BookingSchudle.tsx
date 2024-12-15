"use client";
import { useCreatebookingMutation } from "@/redux/api/bookingApi";
import { message } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";
import BookingDate from "./BookingDate/BookingDate";
import BookingImformation from "./BookingDate/BookingImformation";
import StepperForm from "./StepperForm/StepperForm";

const BookingSchudle = ({ service }: { service: any }) => {
  const router = useRouter();

  const [startTime, setStartTime] = useState<string>("");
  const [endTime, setEndTime] = useState<string>("");
  const [newDate, setNewDates] = useState<string>("");

  const steps = [
    {
      title: "Booking Date & Time",
      content: (
        <BookingDate
          setNewDates={setNewDates}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
        />
      ),
    },
    {
      title: "Booking Information",
      content: (
        <BookingImformation
          service={service}
          newDate={newDate}
          endTime={endTime}
          startTime={startTime}
        />
      ),
    },
  ];

  const [createbooking] = useCreatebookingMutation();

  const handleStudentSubmit = async (values: any) => {
    const obj = { endTime, startTime, serviceId: service?.id, date: newDate };

    try {
      const res = await createbooking(obj);

      // @ts-ignore
      if (res?.data?.success) {
        router.push("/booking");
        // @ts-ignore
        message.success(res?.data?.message);
      } else {
        // @ts-ignore
        message.error("Time slot already booked");
      }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1>BookingSchudle</h1>
      <StepperForm
        persistKey="booking-schudle"
        submitHandler={(value) => {
          handleStudentSubmit(value);
        }}
        steps={steps}
      />
    </div>
  );
};

export default BookingSchudle;
