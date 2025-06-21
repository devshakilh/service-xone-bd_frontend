'use client';

import { message } from 'antd';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import BookingDate from './BookingDate/BookingDate';
import StepperForm from './StepperForm/StepperForm';
import BookingInformation from './BookingDate/BookingImformation';
import { useCreatebookingMutation } from '@/redux/api/bookingApi';

const BookingSchedule = ({ service }: { service: any }) => {
  const router = useRouter();

  const [startTime, setStartTime] = useState<string>('');
  const [endTime, setEndTime] = useState<string>('');
  const [newDate, setNewDate] = useState<string>('');

  const steps = [
    {
      title: 'Booking Date & Time',
      content: (
        <BookingDate
          setNewDate={setNewDate}
          setStartTime={setStartTime}
          setEndTime={setEndTime}
        />
      ),
    },
    {
      title: 'Booking Information',
      content: (
        <BookingInformation
          service={service}
          newDate={newDate}
          endTime={endTime}
          startTime={startTime}
        />
      ),
    },
  ];

  const [createBooking] = useCreatebookingMutation();

  const handleSubmit = async (values: any) => {
    const obj = { endTime, startTime, serviceId: service?.id, date: newDate };

    try {
      const res = await createBooking(obj);
      if ('data' in res && res.data?.success) {
        router.push('/booking');
        message.success(res.data.message);
      } else {
        message.error('Time slot already booked');
      }
    } catch (err: any) {
      console.error(err.message);
      message.error('Failed to create booking');
    }
  };

  return (
    <div style={{ marginBottom: '3rem', padding: '0 16px' }}>
      <h1
        style={{ marginBottom: '1.5rem', fontSize: 'clamp(20px, 4vw, 24px)' }}
      >
        Booking Schedule
      </h1>
      <StepperForm
        persistKey="booking-schedule"
        submitHandler={(value) => handleSubmit(value)}
        steps={steps}
      />
    </div>
  );
};

export default BookingSchedule;
