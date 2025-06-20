"use client";
import '../../css/ca.css';
import { Button, Carousel } from "antd";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion"; // For animation


const heroData = [
  {
    title: "Online Car Service Appointment Booking",
    description:
      "Our online car service appointment booking platform streamlines vehicle maintenance. Schedule appointments, choose services, and find certified mechanics, ensuring a convenient and efficient automotive experience.",
    imgSrc: "https://res.cloudinary.com/ddcvlgbog/image/upload/v1734246543/car-service-website-online-booking-repair-automobile-snugly_31965-643118_irhqon.jpg",
    link: "/services",
  },
  {
    title: "Online Spa Appointment Service Booking",
    description:
      "Experience relaxation and rejuvenation at your fingertips! Our online spa appointment service allows you to book massages, facials, and more with ease. Discover tranquility with a few clicks, choosing your preferred treatments and appointment times.",
    imgSrc: "https://res.cloudinary.com/ddcvlgbog/image/upload/v1734245927/masseur-taking-care-her-client_23-2149273914_pfhlb1.avif",
    link: "/services",
  },
  {
    title: "Parcel Delivery Service Appointment Booking",
    description:
      "Book your parcel delivery service with ease! Whether it’s documents or packages, our platform ensures fast, reliable delivery. Track your parcels and enjoy seamless delivery services at your convenience.",
    imgSrc: "https://res.cloudinary.com/ddcvlgbog/image/upload/v1734246675/courier-waiting-woman-signing-receipt_23-2147801310_boidbs.avif",
    link: "/services",
  },
  {
    title: "AC Repair Service Appointment Service Booking",
    description:
      "Our AC repair service ensures your home stays cool and comfortable. Book your AC repair appointment easily online and enjoy a hassle-free experience with expert professionals at your doorstep.",
    imgSrc: "https://res.cloudinary.com/ddcvlgbog/image/upload/v1734246717/carpenter-holds-glue-attaches-window_1150-23995_aatvei.avif",
    link: "/services",
  },
  {
    title: "The Best Online Air Conditioning Repair Service",
    description:
      "Discover the best online Air Conditioning Repair service for a spotless and stress-free living space. Our experienced professionals provide top-notch cleaning, using eco-friendly products.",
    imgSrc: "https://res.cloudinary.com/ddcvlgbog/image/upload/v1734246784/mechanic-calibrating-pressure-device_482257-92757_cylpms.avif",
    link: "/services",
  },
];

const HeroSection = () => {
  return (
  <div>
    <div className='smhidden'>
    <Carousel autoplay>
      {heroData.map((item, index) => (
        <div key={index}>
          <div style={{ position: "relative" }}>
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={1920}
              height={500}
              style={{
                objectFit: "cover",
                height: "740px", // Fixed height for all images
                filter: "brightness(0.4)", // Darkens the image
                width: "100%", // Ensure full width
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                color: "white",
                fontFamily: "sans-serif",
              }}
                className='hero-title'
            >
              <motion.h1
                style={{
                  fontSize: "35px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)", // Text shadow for better contrast
                }}
              
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {item.title}
              </motion.h1>
              <motion.p
                style={{
                  marginTop: "20px",
                  fontSize: "17px",
                  width: "70%",
                  margin: "0 auto",
                  textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)", // Added text shadow for readability
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='hero-description'
              >
                {item.description}
              </motion.p>
              <div
                style={{
                  marginTop: "30px",
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Link href={item.link}>
                  <Button
                    style={{
                      width: "180px",
                      height: "50px",
                      backgroundColor: "#007bff",
                      borderColor: "#007bff",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "16px",
                      marginTop:"12px",
                      borderRadius: "25px",
                      transition: "all 0.3s ease",
                    }}
                    className='hero-button'
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#0056b3";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#007bff";
                    }}
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
    </div>



<div className='lg:hidden'>
<Carousel autoplay>
      {heroData.map((item, index) => (
        <div key={index}>
          <div style={{ position: "relative" }}>
            <Image
              src={item.imgSrc}
              alt={item.title}
              width={1920}
              height={500}
              style={{
                objectFit: "cover",
                height: "740px", // Fixed height for all images
                filter: "brightness(0.4)", // Darkens the image
                width: "100%", // Ensure full width
              }}
            />
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translateX(-50%)",
                textAlign: "center",
                color: "white",
                fontFamily: "sans-serif",
              }}
                className='hero-title'
            >
              <motion.h1
                style={{
                  fontSize: "35px",
                  fontWeight: "bold",
                  textShadow: "2px 2px 10px rgba(0, 0, 0, 0.7)", // Text shadow for better contrast
                }}
              
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {item.title}
              </motion.h1>
              <motion.p
                style={{
                  marginTop: "20px",
                  fontSize: "17px",
                  width: "70%",
                  margin: "0 auto",
                  textShadow: "1px 1px 5px rgba(0, 0, 0, 0.6)", // Added text shadow for readability
                }}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className='hero-description'
              >
                {item.description}
              </motion.p>
              <div
                style={{
                  marginTop: "30px",
                  position: "absolute",
                  top: "80%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Link href={item.link}>
                  <Button
                    style={{
                      width: "180px",
                      height: "50px",
                      backgroundColor: "#007bff",
                      borderColor: "#007bff",
                      color: "white",
                      fontWeight: "bold",
                      fontSize: "16px",
                      borderRadius: "25px",
                      transition: "all 0.3s ease",
                    }}
                    className='hero-button'
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#0056b3";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#007bff";
                    }}
                  >
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
</div>

  </div>
  );
};

export default HeroSection;
