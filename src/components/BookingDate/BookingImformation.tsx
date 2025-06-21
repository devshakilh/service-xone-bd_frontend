'use client';

import { useProfileQuery } from '@/redux/api/user';
import { CalendarOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Skeleton, Button, Card, Col, Input, Row } from 'antd';
import Meta from 'antd/es/card/Meta';

const BookingInformation = ({
  service,
  newDate,
  endTime,
  startTime,
}: {
  service: any;
  newDate: string;
  endTime: string;
  startTime: string;
}) => {
  const { data, isLoading, isError } = useProfileQuery({});

  if (isLoading) {
    return (
      <div
        style={{
          padding: '1rem',
          border: '1px solid #e6e6e6',
          marginTop: '1rem',
          borderRadius: '0.5rem',
          backgroundColor: '#f5f5f5',
        }}
      >
        <Row gutter={[16, 16]}>
          <Col xs={24} lg={16}>
            <Skeleton active paragraph={{ rows: 4 }} />
          </Col>
          <Col xs={24} lg={8}>
            <Skeleton active paragraph={{ rows: 6 }} />
          </Col>
        </Row>
      </div>
    );
  }

  if (isError || !data?.data) {
    return (
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <h2 style={{ color: 'red', fontSize: 'clamp(16px, 3vw, 18px)' }}>
          Error: Unable to load booking information
        </h2>
      </div>
    );
  }

  const { title, price, tax } = service;
  const { name, email, contactNumber, address } = data.data;

  return (
    <div
      style={{
        padding: '1rem',
        border: '1px solid #e6e6e6',
        marginTop: '1rem',
        borderRadius: '0.5rem',
        backgroundColor: '#f5f5f5',
      }}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={16}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
          >
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Card title="Booking Date">
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'center',
                    }}
                  >
                    <CalendarOutlined
                      style={{
                        fontSize: 'clamp(20px, 3vw, 24px)',
                        color: '#1890ff',
                      }}
                    />
                    <Meta title={newDate} />
                  </div>
                </Card>
              </Col>
              <Col xs={24} sm={12}>
                <Card title="Booking Time">
                  <div
                    style={{
                      display: 'flex',
                      gap: '1rem',
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <ClockCircleOutlined
                      style={{
                        fontSize: 'clamp(20px, 3vw, 24px)',
                        color: '#1890ff',
                      }}
                    />
                    <Meta title={startTime} />
                    <span>To</span>
                    <Meta title={endTime} />
                  </div>
                </Card>
              </Col>
            </Row>
            <Card title="Booking Information">
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={12}>
                  <p>
                    <b>Name: {name}</b>
                  </p>
                  <p>
                    <b>Mobile: {contactNumber}</b>
                  </p>
                  <p>
                    <b>Service Location: {service?.location}</b>
                  </p>
                </Col>
                <Col xs={24} sm={12}>
                  <p>
                    <b>Address: {address}</b>
                  </p>
                  <p>
                    <b>Email: {email}</b>
                  </p>
                </Col>
              </Row>
            </Card>
          </div>
        </Col>
        <Col xs={24} lg={8}>
          <Card title="Price Summary">
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}
            >
              <p>
                <b
                  style={{
                    color: 'green',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                  }}
                >
                  {title}
                </b>
              </p>
              <hr />
              <p>
                <b style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
                  Price: {price} tk
                </b>
              </p>
              <p style={{ fontSize: 'clamp(12px, 2vw, 14px)' }}>
                Tax (%): {tax}
              </p>
            </div>
          </Card>
          <Card title="Offer & Discount" style={{ marginTop: '1rem' }}>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Input
                placeholder="Enter Coupon Code"
                style={{ flex: '1', minWidth: '150px' }}
              />
              <Button>Apply</Button>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default BookingInformation;
