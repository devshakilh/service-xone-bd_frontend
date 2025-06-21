'use client';

import { useBlogsQuery } from '@/redux/api/blogApi';
import { CalendarOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Row } from 'antd';
import Meta from 'antd/es/card/Meta';
import { motion } from 'framer-motion';
import BlogCardSkeleton from '../skeleton/bloge-card-home.skeleton';

const BlogeCardHome = () => {
  const { data, isLoading } = useBlogsQuery({});
  const blogs = data?.data;

  if (isLoading) {
    return <BlogCardSkeleton />;
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div className="py-8 sm:py-12  ">
      <div className="container mx-auto px-4 sm:px-6">
        <Row gutter={[16, 16]} justify="center">
          {blogs?.slice(0, 4).map((blog: any, i: number) => (
            <Col
              key={i}
              xs={24}
              sm={12}
              md={8}
              lg={6}
              className="flex justify-center"
            >
              <motion.div
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                className="w-full max-w-[300px]"
              >
                <Card
                  hoverable
                  className="bg-white rounded-lg  overflow-hidden"
                  cover={
                    <Avatar
                      shape="square"
                      size={300}
                      src={blog?.imageLink}
                      alt={blog?.title}
                      className="w-full h-[200px] object-cover"
                    />
                  }
                >
                  <div className="flex items-center text-gray-500 text-sm mb-2">
                    <CalendarOutlined className="text-green-500 mr-2" />
                    {new Date(blog?.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                    })}
                  </div>
                  <Meta
                    title={
                      <h3 className="text-lg font-semibold text-gray-800 truncate">
                        {blog?.title}
                      </h3>
                    }
                    description={
                      <p className="text-gray-600 text-sm line-clamp-3">
                        {blog?.content.slice(0, 70)}
                      </p>
                    }
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default BlogeCardHome;
