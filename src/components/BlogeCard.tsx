"use client";
import Loading from "@/app/loading";
import { CalendarOutlined } from "@ant-design/icons";
import { Card, Col, Row, Skeleton, Avatar } from "antd";
import Meta from "antd/es/card/Meta";
import { motion } from "framer-motion"; // Animation library

// Mock FAQ data for demonstration purposes
const mockFaqs = [
  {
    question: "How do I book a service?",
    answer:
      "To book a service, simply visit our service page, select the service you want, and proceed with the booking process.",
    imageLink: "https://img.freepik.com/free-vector/appointment-booking-with-calendar-concept_23-2148556783.jpg?ga=GA1.1.1930567150.1733215744&semt=ais_hybrid",
    createdAt: "2024-12-10T12:34:56Z",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept payments via major credit cards, PayPal, and Apple Pay for your convenience.",
    imageLink: "https://img.freepik.com/premium-photo/login-screen-facebook-icons_2034-214.jpg?ga=GA1.1.1930567150.1733215744&semt=ais_hybrid",
    createdAt: "2024-12-11T14:20:30Z",
  },
  {
    question: "Can I cancel my booking?",
    answer:
      "Yes, you can cancel your booking within 24 hours before the service to get a full refund. After that, there is a cancellation fee.",
    imageLink: "https://via.placeholder.com/340",
    createdAt: "2024-12-12T16:45:00Z",
  },
  {
    question: "How do I contact customer support?",
    answer:
      "You can contact customer support via email at support@ourcompany.com or reach us on WhatsApp at +1234567890.",
    imageLink: "https://images.pexels.com/photos/7820321/pexels-photo-7820321.jpeg?auto=compress&cs=tinysrgb&w=600",
    createdAt: "2024-12-13T18:00:00Z",
  },
];

const BlogeCard = () => {
  // Replace with the real API data if needed
  const faqs = mockFaqs;

  return (
    <div>
      <Row
        style={{
          height: "100%",
        }}
        gutter={[20, 20]}
      >
        {faqs.map((faq, i) => (
          <Col
            style={{
              marginBottom: "20px",
            }}
            key={i}
            span={8}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <Card
                hoverable
                style={{ width: 340 }}
                cover={<Avatar shape="square" size={340} src={faq?.imageLink} />}
              >
                <p
                  style={{
                    color: "gray",
                    marginBottom: "10px",
                  }}
                >
                  <CalendarOutlined
                    style={{
                      color: "green",
                      marginRight: "10px",
                    }}
                  />
                  {new Date(faq?.createdAt).toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "numeric",
                  })}
                </p>
                <Meta
                  title={faq?.question}
                  description={faq?.answer.slice(0, 240)}
                />
                <p
                  style={{
                    padding: "10px 0",
                    fontSize: "17px",
                  }}
                  dangerouslySetInnerHTML={{ __html: faq?.answer }}
                />
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogeCard;