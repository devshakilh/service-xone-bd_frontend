'use client';

import { Skeleton } from 'antd';

const LoginSkeleton = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center">
      <div className="bg-white/80 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-2xl w-full max-w-md md:max-w-xl">
        <Skeleton active avatar paragraph={{ rows: 1 }} />
        <Skeleton.Input
          active
          block
          className="mt-6"
          style={{ height: '40px' }}
        />
        <Skeleton.Input
          active
          block
          className="mt-4"
          style={{ height: '40px' }}
        />
        <Skeleton.Button
          active
          block
          className="mt-6"
          style={{ height: '48px', borderRadius: '12px' }}
        />
      </div>
    </div>
  );
};

export default LoginSkeleton;
