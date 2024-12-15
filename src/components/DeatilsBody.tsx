"use client";
import { Skeleton } from "antd";
import Loading from "@/app/loading";
import { useReviewQuery } from "@/redux/api/reviewApi";
import { HomeOutlined, IdcardOutlined } from "@ant-design/icons";
import { Button, Col, Rate, Row, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Import Framer Motion
import CustomerReview from "./ui/CustomerReview";
import RelatedServices from "./ui/RelatedServices";


const SkeletonLoader = () => {
  return (
    <motion.div 
      className="p-4 md:p-8"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Row gutter={[20, 20]}>
        {/* Skeleton for Service Details */}
        <Col span={24}>
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-8 bg-gray-100 rounded-lg"
            variants={fadeIn}
          >
            <div className="w-full md:w-1/2">
              <Skeleton.Image active className="rounded-lg" />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <Skeleton.Input active className="w-40" />
              <Skeleton.Input active className="w-80" />
              <Skeleton.Input active className="w-60" />
              <Skeleton.Input active className="w-20" />
            </div>
          </motion.div>
        </Col>
      </Row>

      <Row gutter={[20, 20]}>
        {/* Skeleton for Service Description */}
        <Col span={24} md={18} className="space-y-8">
          <motion.div variants={fadeIn}>
            <Skeleton.Input active className="w-40" />
            <Skeleton.Input active className="w-full" />
          </motion.div>

          <motion.div variants={fadeIn}>
            <Skeleton.Input active className="w-40" />
            <Skeleton active paragraph={{ rows: 3 }} />
          </motion.div>

          <motion.div variants={fadeIn}>
            <Skeleton.Input active className="w-40" />
            <Skeleton active paragraph={{ rows: 3 }} />
          </motion.div>
        </Col>

        {/* Skeleton for Price & Booking */}
        <Col span={24} md={6}>
          <motion.div 
            className="bg-white shadow-md rounded-lg p-6 space-y-4"
            variants={fadeIn}
          >
            <Skeleton.Input active className="w-40" />
            <Skeleton.Input active className="w-40" />
            <hr />
            <Skeleton.Input active className="w-20" />
            <Skeleton.Button active className="w-full" />
            <Skeleton.Button active className="w-full" />
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};




const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const DetailsBody = ({ service }: any) => {
  const router = useRouter();
  const { data, isLoading } = useReviewQuery(service?.id);

  const reviews = data?.data;
  const sum = reviews?.reduce((total: number, review: any) => total + parseInt(review?.rating), 0);
  const average = parseFloat((sum / reviews?.length).toFixed(1)) || 0;

  const handleBook = (value: any) => {
    router.push(`/booking-requst/${value?.id}`);
  };

  if (isLoading) {
    return <SkeletonLoader />;
  }


  const price = parseInt(service?.price || 0);
  const tax = parseInt(service?.tax || 0);
  const totalPrice = price + (price * tax) / 100;
  return (
    <motion.div 
      className="p-4 md:p-8"
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
    >
      <Row gutter={[20, 20]}>
        {/* Service Details */}
        <Col span={24}>
          <motion.div 
            className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-8 bg-gray-100 rounded-lg"
            variants={fadeIn}
          >
            <div className="w-full md:w-1/2">
              <Image
                className="rounded-lg"
                src={service?.imageLink}
                width={600}
                height={400}
                alt="Service Image"
              />
            </div>
            <div className="w-full md:w-1/2 space-y-4">
              <motion.span 
                className="bg-yellow-500 text-white text-sm font-semibold py-1 px-3 rounded"
                variants={fadeIn}
              >
                {service?.category?.title}
              </motion.span>
              <motion.h1 
                className="text-3xl font-bold"
                variants={fadeIn}
              >
                {service?.title}
              </motion.h1>
              <motion.p 
                className="text-lg text-gray-700 flex items-center gap-2"
                variants={fadeIn}
              >
                <HomeOutlined 
                  onPointerEnterCapture={() => {}} 
                  onPointerLeaveCapture={() => {}}
                /> Service Point: {service?.location}
              </motion.p>
              <motion.div 
                className="flex items-center gap-2"
                variants={fadeIn}
              >
                <span className="text-lg font-semibold">{average}</span>
                <Rate allowHalf defaultValue={average} className="text-sm" />
                <span className="text-gray-500">({reviews?.length || 0} Reviews)</span>
              </motion.div>
            </div>
          </motion.div>
        </Col>
      </Row>

      <Row gutter={[20, 20]}>
        {/* Service Description */}
        <Col span={24} md={18} className="space-y-8">
          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">Service Description</h2>
            <p className="text-lg leading-relaxed text-gray-700">{service?.description}</p>
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">Related Services</h2>
            <RelatedServices service={service} />
          </motion.div>

          <motion.div variants={fadeIn}>
            <h2 className="text-2xl font-bold text-yellow-500 mb-4">Customer Review</h2>
            <CustomerReview service={service} />
          </motion.div>
        </Col>

        {/* Price & Booking */}
        <Col span={24} md={6}>
          <motion.div 
            className="bg-white shadow-md rounded-lg p-6 space-y-4"
            variants={fadeIn}
          >
            <h2 className="text-3xl font-bold text-black">{service?.price} TK</h2>
            <p className="text-lg text-yellow-500">Inclusive of all taxes ({service?.tax}%)</p>
            <hr />
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>{totalPrice} TK</span>
            </div>
            <Link href={`/booking-requst/${service?.id}`}>
              <Button
                type="primary"
                block
                className="bg-yellow-500 hover:bg-yellow-600 text-white"
                onClick={() => handleBook(service)}
              >
                Book Now
                <IdcardOutlined 
                  className="ml-2"
                  onPointerEnterCapture={() => {}} 
                  onPointerLeaveCapture={() => {}}
                />
              </Button>
            </Link>
            <Button
              block
              onClick={() => message.info("Your inquiry has been sent.")}
            >
              Send Inquiry
            </Button>
          </motion.div>
        </Col>
      </Row>
    </motion.div>
  );
};

export default DetailsBody;
