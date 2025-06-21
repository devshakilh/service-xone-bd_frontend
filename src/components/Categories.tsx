'use client';

import { useCategoriesQuery } from '@/redux/api/categorieApi';
import { Avatar, Card, Col, Empty, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import Subscribe from './ui/Subscribe';

interface Category {
  id: string;
  title: string;
  imageLink: string;
}

const CategoriesOption = () => {
  const { data, isLoading } = useCategoriesQuery({});
  const router = useRouter();
  const categories: Category[] = data?.data || [];

  const handleCategory = (id: string) => {
    router.push(`/categories/${id}`);
  };

  if (isLoading) {
    return <div>sf</div>;
  }

  return (
    <>
      <Row gutter={[16, 16]} className="mx-auto max-w-7xl px-4 py-8">
        {categories.length > 0 ? (
          categories.map((category, i) => (
            <Col xs={24} sm={12} md={8} lg={6} xl={4} key={category.id}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <Card
                  onClick={() => handleCategory(category.id)}
                  cover={
                    <Avatar
                      src={category.imageLink || '/fallback-image.jpg'}
                      alt={category.title}
                      className="w-full aspect-square object-cover p-4 bg-gradient-to-br from-gray-100 to-gray-200"
                    />
                  }
                  hoverable
                  className="w-full overflow-hidden rounded-xl border-none bg-white

 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <Meta
                    title={category.title}
                    className="text-center text-base font-semibold text-gray-900 py-2"
                  />
                </Card>
              </motion.div>
            </Col>
          ))
        ) : (
          <Col span={24} className="flex justify-center py-16">
            <Empty description="No categories available" />
          </Col>
        )}
      </Row>
      <Subscribe />
    </>
  );
};

export default CategoriesOption;
