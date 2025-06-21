'use client';

import Loading from '@/app/loading';
import { useServicessQuery } from '@/redux/api/serviceApi';
import { Avatar, Button, Card, Col, Rate, Row, Skeleton } from 'antd';
import Meta from 'antd/es/card/Meta';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface IService {
  id: string;
  imageLink: string;
  price: number;
  rating: number;
  location: string;
  title: string;
  description: string;
}

const SeeServices = () => {
  const { data, isLoading } = useServicessQuery({});

  const services = data?.services;

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-6">
        {[...Array(8)].map((_, i) => (
          <Card
            key={i}
            style={{ width: '100%', borderRadius: '8px' }}
            cover={
              <Skeleton.Avatar
                active
                shape="square"
                size={298}
                style={{ borderRadius: '8px' }}
              />
            }
          >
            <Skeleton
              active
              paragraph={{ rows: 2, width: ['100%', '80%'] }}
              title={{ width: '60%' }}
            />
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div>
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          padding: '30px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '50px',
              color: '#007bff',
            }}
          >
            Services
          </h1>
          <p
            style={{
              marginTop: '10px',
              fontSize: '20px',
              color: '#808080',
            }}
          >
            Our Popular Services
          </p>
        </div>
        <Link href="/services">
          <Button
            type="primary"
            style={{
              backgroundColor: '#007BFF',
              color: '#fff',
              borderRadius: '5px',
              width: '100px',
            }}
          >
            See All
          </Button>
        </Link>
      </motion.div>

      {/* Service Options */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <Row
          style={{
            padding: '20px 0',
          }}
          gutter={[16, 16]}
        >
          {services?.slice(0, 10)?.map((service: IService, i: number) => (
            <Col xs={24} sm={12} md={8} lg={6} key={i}>
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Link href={`/services/details/${service?.id}`}>
                  <Card
                    hoverable
                    style={{ width: '100%' }}
                    cover={
                      <Avatar
                        shape="square"
                        size={298}
                        src={service?.imageLink}
                      />
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
                            fontSize: '18px',
                            fontWeight: 'bold',
                            color: 'black',
                          }}
                        >
                          {service?.price} ৳
                        </p>

                        <Rate
                          style={{
                            fontSize: '14px',
                          }}
                          allowHalf
                          defaultValue={service?.rating || 2.5}
                        />
                      </div>
                      <p>{service?.location}</p>

                      <Meta
                        style={{ marginTop: '10px' }}
                        title={
                          <p
                            style={{
                              fontSize: '16px',
                              fontWeight: 'bold',
                              color: '#007bff',
                            }}
                          >
                            {service?.title}
                          </p>
                        }
                        description={service?.description?.slice(0, 50) + '...'}
                      />
                    </div>
                  </Card>
                </Link>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </div>
  );
};

export default SeeServices;
