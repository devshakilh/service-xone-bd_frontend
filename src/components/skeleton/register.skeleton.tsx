'use client';

import { Skeleton } from 'antd';

const RegisterSkeleton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
      <div className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-md sm:max-w-lg md:max-w-xl">
        <Skeleton active avatar paragraph={{ rows: 1 }} />
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Skeleton.Input
            active
            block
            style={{ height: '40px' }}
            className="flex-1"
          />
          <Skeleton.Input
            active
            block
            style={{ height: '40px' }}
            className="flex-1"
          />
        </div>
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <Skeleton.Input
            active
            block
            style={{ height: '40px' }}
            className="flex-1"
          />
          <Skeleton.Input
            active
            block
            style={{ height: '40px' }}
            className="flex-1"
          />
        </div>
        <Skeleton.Input
          active
          block
          style={{ height: '104px' }}
          className="mt-4"
        />
        <Skeleton.Button
          active
          block
          style={{ height: '48px', borderRadius: '12px' }}
          className="mt-6"
        />
      </div>
    </div>
  );
};

export default RegisterSkeleton;
