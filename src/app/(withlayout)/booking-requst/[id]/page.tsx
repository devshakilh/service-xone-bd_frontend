'use client';

import Booking from '@/components/BookingRequst';
import SMBreadcrumb from '@/components/ui/Breadcrumb';
import Container from '@/components/ui/container';

const BookingRequst = ({ params }: any) => {
  const id = params?.id;

  return (
    <div>
      <Container>
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: '#3B82F6',
            margin: '20px 0',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <h1
            style={{
              color: '#fff',
              fontSize: '48px',
              fontWeight: 'bold',
            }}
          >
            Booking Request
          </h1>
          <SMBreadcrumb
            items={[
              { label: 'Home', path: '/' },
              { label: 'Services', path: '/services' },
              { label: 'Details', path: `/services/details/${id}` },
              { label: 'Booking Requst', path: `/booking-requst/${id}` },
            ]}
            style={{
              color: '#fff',
              fontSize: '17px',
            }}
          />
        </div>
        <Booking id={id} />
      </Container>
    </div>
  );
};

export default BookingRequst;
