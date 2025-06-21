"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Container from "@/components/ui/container";
import Navbar from "@/components/ui/navHader";
import Footer from "@/components/ui/footer";
import SMBreadcrumb from "@/components/ui/Breadcrumb";

const faqData = [
  {
    question: "How do I book a service?",
    answer:
      "Visit our service page, select your desired service, and click 'Book Now' to follow the booking instructions.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept major credit/debit cards, Apple Pay, and PayPal. Choose your preferred method at checkout.",
  },
  {
    question: "Can I modify or cancel my booking?",
    answer:
      "You can modify or cancel up to 24 hours before the service. Late cancellations may incur a fee.",
  },
  {
    question: "What happens if the service provider is late?",
    answer:
      "If delayed beyond 15 minutes, we offer a discount or free rescheduling. Contact us for assistance.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "Reach us via email at support@servicexonebd.com or call +8801234567890 during business hours.",
  },
];

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col ">
       <div>
          <h1
            style={{
              fontSize: "50px",
              color:"#007bff",
              marginBottom:'12px',
            }}
          >
             Frequently Asked Questions
          </h1>
          <p
            style={{
              marginTop: "10px",
              fontSize: "20px",
              color: "#808080",
            }}
          >
           Top asked questions
          </p>
        </div>

      <Container >
        
      
        {/* FAQ Accordion */}
        <div className="max-w-4xl mt-16 mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <button
                className="w-full p-5 flex items-center justify-between text-left focus:outline-none"
                onClick={() => handleToggle(index)}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <h2 className="text-lg md:text-xl font-semibold text-gray-700">
                  {faq.question}
                </h2>
                {activeIndex === index ? (
                  <ChevronUp size={20} className="text-gray-700" />
                ) : (
                  <ChevronDown size={20} className="text-gray-700" />
                )}
              </button>
              <motion.div
                id={`faq-answer-${index}`}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: activeIndex === index ? "auto" : 0,
                  opacity: activeIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden bg-gray-100"
              >
                <p className="p-5 text-gray-600">{faq.answer}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Container>
     
    </div>
  );
};

export default Faqs;