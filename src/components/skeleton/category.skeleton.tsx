'use client';

import { Card, Col, Row, Skeleton } from 'antd';
import { motion } from 'framer-motion';

const CategorySkeleton = () => {
  return (
    <Row gutter={[16, 16]} className="mx-auto max-w-7xl px-4 py-8">
      {[...Array(6)].map((_, i) => (
        <Col xs={24} sm={12} md={8} lg={6} xl={4} key={i}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="w-full overflow-hidden rounded-xl border-none bg-white shadow-lg">
              <Skeleton.Avatar
                active
                size="large"
                className="w-full aspect-square"
              />
              <Skeleton.Input active className="mx-auto mt-4 h-5 w-4/5" />
            </Card>
          </motion.div>
        </Col>
      ))}
    </Row>
  );
};

export default CategorySkeleton;
