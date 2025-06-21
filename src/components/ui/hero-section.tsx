'use client';

import { Button, Carousel } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const heroData = [
  {
    title: 'Online Car Service Appointment Booking',
    description:
      'Streamline your vehicle maintenance with our seamless online booking platform. Schedule appointments, select services, and connect with certified mechanics for an effortless automotive experience.',
    imgSrc:
      'https://res.cloudinary.com/ddcvlgbog/image/upload/v1734246543/car-service-website-online-booking-repair-automobile-snugly_31965-643118_irhqon.jpg',
    link: '/services',
  },
  {
    title: 'Online Spa Appointment Service Booking',
    description:
      'Indulge in relaxation with our intuitive spa booking service. Effortlessly reserve massages, facials, and more, choosing your preferred treatments and times for ultimate tranquility.',
    imgSrc:
      'https://res.cloudinary.com/ddcvlgbog/image/upload/v1734245927/masseur-taking-care-her-client_23-2149273914_pfhlb1.avif',
    link: '/services',
  },
  {
    title: 'Parcel Delivery Service Appointment Booking',
    description:
      'Send documents or packages with confidence using our reliable parcel delivery platform. Book fast, track easily, and enjoy seamless delivery services tailored to your needs.',
    imgSrc:
      'https://res.cloudinary.com/ddcvlgbog/image/upload/v1734246675/courier-waiting-woman-signing-receipt_23-2147801310_boidbs.avif',
    link: '/services',
  },
  {
    title: 'AC Repair Service Appointment Booking',
    description:
      'Keep your home cool and comfortable with our expert AC repair services. Book appointments online and experience hassle-free repairs by trusted professionals at your convenience.',
    imgSrc:
      'https://res.cloudinary.com/ddcvlgbog/image/upload/v1734246717/carpenter-holds-glue-attaches-window_1150-23995_aatvei.avif',
    link: '/services',
  },
  {
    title: 'Premier Air Conditioning Repair Service',
    description:
      'Experience top-tier air conditioning repair services for a pristine living space. Our skilled technicians deliver exceptional results using eco-friendly solutions, booked online with ease.',
    imgSrc:
      'https://res.cloudinary.com/ddcvlgbog/image/upload/v1734246784/mechanic-calibrating-pressure-device_482257-92757_cylpms.avif',
    link: '/services',
  },
];

const HeroSection = () => {
  const contentVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
    }),
  };

  return (
    <div className="relative">
      <Carousel autoplay autoplaySpeed={5000} fade>
        {heroData.map((item, index) => (
          <div key={index} className="relative">
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={1920}
              height={600}
              className="w-full h-[50vh] sm:h-[60vh] md:h-[80vh] object-cover brightness-50"
              priority={index === 0}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white px-4 sm:px-6 max-w-3xl">
                <motion.h1
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 tracking-tight drop-shadow-lg"
                  custom={0}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                >
                  {item.title}
                </motion.h1>
                <motion.p
                  className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 mx-auto max-w-[90%] sm:max-w-[80%] drop-shadow-md"
                  custom={1}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                >
                  {item.description}
                </motion.p>
                <motion.div
                  custom={2}
                  initial="hidden"
                  animate="visible"
                  variants={contentVariants}
                >
                  <Link href={item.link}>
                    <Button className="w-40 sm:w-48 h-10 sm:h-12 bg-blue-600 border-blue-600 text-white text-sm sm:text-base font-semibold rounded-full hover:bg-blue-700 hover:border-blue-700 transition-all duration-300">
                      Book Now
                    </Button>
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HeroSection;
