'use client';

import { Col, Row } from 'antd';
import { motion } from 'framer-motion';

const BlogCardSkeleton = () => {
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
      <div className="container mx-auto px-4 sm:px-6">
        <Row gutter={[16, 16]} justify="center">
          {[...Array(4)].map((_, i) => (
            <Col
              key={i}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              className="flex justify-center"
            >
              <motion.div
                className="w-full max-w-[300px] bg-white rounded-lg shadow-lg overflow-hidden"
                variants={pulseVariants}
                animate="animate"
              >
                <div className="w-full h-[200px] bg-gray-300" />
                <div className="p-4">
                  <div className="flex items-center mb-2">
                    <div className="w-4 h-4 bg-gray-300 rounded-full mr-2" />
                    <div className="w-24 h-3 bg-gray-300 rounded" />
                  </div>
                  <div className="w-3/4 h-4 bg-gray-300 rounded mb-2" />
                  <div className="w-full h-3 bg-gray-300 rounded mb-1" />
                  <div className="w-full h-3 bg-gray-300 rounded mb-1" />
                  <div className="w-2/3 h-3 bg-gray-300 rounded" />
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
