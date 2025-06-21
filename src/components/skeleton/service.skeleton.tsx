'use client';

import { Col, Row } from 'antd';
import { motion } from 'framer-motion';

const ServiceSkeletonLoader = () => {
  const pulseVariants = {
    animate: {
      opacity: [0.5, 1, 0.5],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="py-8 sm:py-12 ">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Skeleton */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
          <div>
            <div className="w-64 h-10 bg-gray-300 rounded mb-2" />
            <div className="w-40 h-4 bg-gray-300 rounded" />
          </div>
          <div className="w-32 h-10 bg-gray-300 rounded-full mt-4 sm:mt-0" />
        </div>

        {/* Cards Skeleton */}
        <Row gutter={[16, 16]} justify="center">
          {[...Array(8)].map((_, i) => (
            <Col
              key={i}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              className="flex justify-center"
            >
              <motion.div
                className="w-full max-w-[280px] bg-white rounded-lg shadow-lg overflow-hidden"
                variants={pulseVariants}
                animate="animate"
              >
                <div className="w-full h-[180px] bg-gray-300" />
                <div className="p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="w-16 h-3 bg-gray-300 rounded" />
                    <div className="w-20 h-3 bg-gray-300 rounded" />
                  </div>
                  <div className="w-3/4 h-4 bg-gray-300 rounded" />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default ServiceSkeletonLoader;
