'use client';
import Loading from '@/app/loading';
import { services_upcoming } from '@/constants/golobal';
import { useServicessQuery } from '@/redux/api/serviceApi';
import { Avatar, Button, Card, Col, Rate, Row } from 'antd';
import Link from 'next/link';
import { motion } from 'framer-motion';
import ServiceSkeletonLoader from '../skeleton/service.skeleton';

const SeeServicesUpcoming = () => {
  const { data, isLoading, refetch } = useServicessQuery({});

  if (isLoading) {
    return <ServiceSkeletonLoader />;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Header Section */}
      <div
        style={{
          padding: '30px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <motion.h1
            style={{ fontSize: '50px', color: '#007bff' }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Upcoming Services
          </motion.h1>
          <motion.p
            style={{ marginTop: '10px', fontSize: '20px', color: '#808080' }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Our Popular Services
          </motion.p>
        </div>
        <Link href="/services">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              type="primary"
              style={{
                backgroundColor: '#007BFF',
                color: '#fff',
                borderRadius: '5px',
                width: '120px',
              }}
            >
              See All
            </Button>
          </motion.div>
        </Link>
      </div>

      {/* Services Section */}
      <Row
        gutter={[16, 16]}
        style={{ margin: '0 auto', justifyContent: 'center' }}
      >
        {services_upcoming?.slice(0, 8)?.map((service, i) => (
          <Col
            key={i}
            xs={24}
            sm={12}
            md={8}
            lg={6}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Card
                hoverable
                style={{ width: 260, margin: '20px 0' }}
                cover={
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Avatar shape="square" size={260} src={service?.image} />
                  </motion.div>
                }
              >
                <div>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                    }}
                  >
                    <p
                      style={{
                        fontSize: '14px',
                        fontWeight: 'bold',
                        color: '#333',
                      }}
                    >
                      {service?.price_range} ৳
                    </p>
                    <Rate
                      style={{ fontSize: '12px' }}
                      allowHalf
                      defaultValue={service?.rating}
                    />
                  </div>
                  <p
                    style={{
                      marginTop: '8px',
                      fontSize: '16px',
                      fontWeight: 'bold',
                      color: '#333',
                    }}
                  >
                    {service?.name}
                  </p>
                </div>
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </motion.div>
  );
};

export default SeeServicesUpcoming;
