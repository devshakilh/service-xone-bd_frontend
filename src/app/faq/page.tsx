// import FaqsSection from "@/components/FaqsSection";
// import SMBreadcrumb from "@/components/ui/Breadcrumb";
// import Container from "@/components/ui/container";
// import Footer from "@/components/ui/footer";
// import Navbar from "@/components/ui/navHader";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Service-Xone-BD | Faqs",
// };

// const Faqs = () => {
//   return (
//     <div>
//       <Navbar />

//       <Container>
//         {/* bredcone and baner */}
//         <div
//           style={{
//             width: "100%",
//             height: "200px",
//             backgroundColor: "#317f8c",
//             margin: "20px 0",
//             borderRadius: "15px",
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             position: "relative",
//           }}
//         >
//           <h1
//             style={{
//               color: "#fff",
//               fontSize: "50px",
//               fontWeight: "bold",
//             }}
//           >
//             Frequently Asked Questions
//           </h1>
//           <br />
//           <div>
//             <SMBreadcrumb
//               items={[
//                 { label: "Home", path: "/" },
//                 { label: "Faqs", path: "/faq" },
//               ]}
//               style={{
//                 color: "#fff",
//                 fontSize: "17px",
//               }}
//             />
//           </div>
//         </div>

//         <FaqsSection />
//       </Container>

//       <Footer />
//     </div>
//   );
// };

// export default Faqs;

"use client"
import FaqsSection from "@/components/FaqsSection";
import SMBreadcrumb from "@/components/ui/Breadcrumb";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navHader";
import { Metadata } from "next";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react"; // Importing icons



const faqData = [
  {
    question: "How do I book a service?",
    answer:
      "To book a service, simply visit our service page, select the service you need, and click on the 'Book Now' button. Follow the instructions to confirm your booking.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept payments through major credit cards, debit cards, Apple Pay, and PayPal. Choose the payment method that works best for you during checkout.",
  },
  {
    question: "Can I modify or cancel my booking?",
    answer:
      "Yes, you can modify or cancel your booking up to 24 hours before the scheduled service. After that, cancellations may incur a fee.",
  },
  {
    question: "What happens if the service provider is late?",
    answer:
      "If the service provider is delayed beyond 15 minutes, we offer a discount or reschedule the service free of charge. Please contact us if this happens.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can reach our customer support team via email at support@servicexonebd.com or call us at +8801234567890 during business hours.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index); // Toggle visibility of the answer
  };

  return (
    <div>
      <Navbar />

      <Container>
        {/* Banner and Breadcrumb */}
        <div
          style={{
            width: "100%",
            height: "200px",
            backgroundColor: "#317f8c",
            margin: "20px 0",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <h1
            style={{
              color: "#fff",
              fontSize: "50px",
              fontWeight: "bold",
            }}
          >
            Frequently Asked Questions
          </h1>
          <br />
          <div>
            <SMBreadcrumb
              items={[
                { label: "Home", path: "/" },
                { label: "Faqs", path: "/faq" },
              ]}
              style={{
                color: "#fff",
                fontSize: "17px",
              }}
            />
          </div>
        </div>

        {/* FAQ Accordion Section */}
        <motion.div
          className="space-y-4"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.3, staggerChildren: 0.2 },
            },
          }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="faq-item bg-white rounded-lg shadow-md overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
              }}
            >
              <motion.div
                className="p-4 cursor-pointer flex items-center justify-between"
                onClick={() => handleToggle(index)}
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="text-xl font-semibold text-[#317f8c]">
                  {faq.question}
                </h2>
                {/* Icon for Expand/Collapse */}
                <span>
                  {activeIndex === index ? (
                    <ChevronUp size={24} color="#317f8c" />
                  ) : (
                    <ChevronDown size={24} color="#317f8c" />
                  )}
                </span>
              </motion.div>
              <motion.div
                className="p-4 bg-gray-100"
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                  transition: { duration: 0.3 },
                }}
                style={{ overflow: "hidden" }}
              >
                <p className="text-gray-700">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>

      <Footer />
    </div>
  );
};

export default Faqs;
