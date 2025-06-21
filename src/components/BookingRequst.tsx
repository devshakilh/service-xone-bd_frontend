'use client';

import { useServicesQuery } from '@/redux/api/serviceApi';
import { Rate } from 'antd';
import Image from 'next/image';

import BookingRequestLoading from './skeleton/booking-request-loading.skeleton';
import BookingSchedule from './BookingSchudle';
import useIsLargeScreen from '@/hooks/useIsLargeScreen';

const Booking = ({ id }: { id: string }) => {
  const { data, isLoading } = useServicesQuery(id);
  const service = data?.data;
  const isLargeScreen = useIsLargeScreen();
  if (isLoading || !service) {
    return <BookingRequestLoading />;
  }

  return (
    <div style={{ padding: '0 16px' }}>
      {/* Booking Information */}
      <div
        style={{
          display: 'flex',
          flexDirection: isLargeScreen ? 'row' : 'column',
          gap: '1rem',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '1rem',
        }}
      >
        <div
          style={{
            width: '100%',
            // maxWidth: '400px',
          }}
        >
          <Image
            style={{ width: '100%', height: 'auto', borderRadius: '10px' }}
            src={service?.imageLink}
            width={300}
            height={200}
            alt={service?.title || 'Service image'}
            priority
          />
        </div>
        <div
          style={{
            width: '100%',
            maxWidth: '600px',
            padding: '1rem',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              justifyContent: 'center',
            }}
          >
            <div>
              <p
                style={{
                  backgroundColor: 'yellowgreen',
                  color: 'white',
                  padding: '5px',
                  width: 'fit-content',
                  borderRadius: '5px',
                  fontSize: 'clamp(12px, 2vw, 14px)',
                }}
              >
                {service?.category?.title}
              </p>
            </div>
            <div>
              <h1
                style={{
                  fontSize: 'clamp(24px, 5vw, 32px)',
                }}
              >
                {service?.title}
              </h1>
              <p
                style={{
                  backgroundColor: 'skyblue',
                  color: 'white',
                  padding: '5px',
                  width: 'fit-content',
                  borderRadius: '5px',
                  fontSize: 'clamp(12px, 2vw, 14px)',
                }}
              >
                {service?.location}
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
              }}
            >
              <div>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <p style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>2.5</p>
                  <Rate
                    style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}
                    allowHalf
                    defaultValue={2.5}
                  />
                </div>
                <p
                  style={{
                    fontSize: 'clamp(12px, 2vw, 14px)',
                    color: 'gray',
                    marginTop: '5px',
                  }}
                >{`(${1} Reviews)`}</p>
              </div>
              <div>
                <h2 style={{ fontSize: 'clamp(18px, 3vw, 20px)' }}>
                  Price {service?.price} TK
                </h2>
                <p
                  style={{
                    fontSize: 'clamp(12px, 2vw, 14px)',
                    color: 'yellowgreen',
                    marginTop: '5px',
                  }}
                >
                  inclusive of all taxes {service?.tax}%
                </p>
              </div>
            </div>
            <p style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
              {service?.description.slice(0, 300) + '...'}
            </p>
          </div>
        </div>
      </div>

      {/* Booking Schedule */}
      <BookingSchedule service={service} />
    </div>
  );
};

export default Booking;
