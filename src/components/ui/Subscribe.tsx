'use client';

import { Button, Input, Space, Skeleton } from 'antd';
import Image from 'next/image';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Subscribe: React.FC = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mx-auto mb-12 max-w-7xl px-4 py-6 bg-gray-100 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6"
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="w-full md:w-2/5"
      >
        {!imageLoaded && (
          <Skeleton.Image
            active
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-2xl"
          />
        )}
        <Image
          src="https://res.cloudinary.com/dhvuyehnq/image/upload/v1697475843/gwqs0bxffqsu5eeqkedl.webp"
          alt="Subscribe to BookingDo newsletter"
          width={400}
          height={500}
          className="w-full h-auto rounded-2xl object-cover"
          onLoad={() => setImageLoaded(true)}
          style={{ display: imageLoaded ? 'block' : 'none' }}
        />
      </motion.div>
      <div className="w-full md:w-3/5 space-y-4">
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900"
        >
          Stay Connected with BookingDo
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-base sm:text-lg text-gray-700"
        >
          Subscribe to our email updates and stay in the loop with the latest
          news, insights, and exciting developments. Join our community to
          receive curated content, exclusive offers, and valuable resources
          delivered right to your inbox.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="w-full sm:w-3/4 md:w-1/2"
        >
          <Space.Compact className="w-full">
            <Input
              placeholder="Enter your email"
              className="h-11 text-base"
              aria-label="Email for subscription"
            />
            <Button
              type="primary"
              className="h-11 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded-r-lg"
            >
              Subscribe
            </Button>
          </Space.Compact>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Subscribe;
