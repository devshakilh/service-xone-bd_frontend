'use client';

import { CalendarOutlined } from '@ant-design/icons';
import { Card, Col, Row, Avatar } from 'antd';
import Meta from 'antd/es/card/Meta';
import { motion } from 'framer-motion';

// Mock FAQ data for demonstration purposes
const mockFaqs = [
  {
    question: 'How do I book a service?',
    answer:
      'To book a service, simply visit our service page, select the service you want, and proceed with the booking process. You can choose a date and time that suits you, provide your contact details, and confirm the booking. Our system will send you a confirmation email with all the details. If you encounter any issues, our customer support team is available 24/7 to assist you via email or phone.',
    imageLink:
      'https://img.freepik.com/free-vector/appointment-booking-with-calendar-concept_23-2148556783.jpg?ga=GA1.1.1930567150.1733215744&semt=ais_hybrid',
    createdAt: '2024-12-10T12:34:56Z',
  },
  {
    question: 'What payment methods are accepted?',
    answer:
      'We accept payments via major credit cards, PayPal, and Apple Pay for your convenience. All transactions are processed securely through our encrypted payment gateway. You can select your preferred payment method during checkout. If you have any questions about payments, feel free to contact our support team for assistance.',
    imageLink:
      'https://img.freepik.com/premium-photo/login-screen-facebook-icons_2034-214.jpg?ga=GA1.1.1930567150.1733215744&semt=ais_hybrid',
    createdAt: '2024-12-11T14:20:30Z',
  },
  {
    question: 'Can I cancel my booking?',
    answer:
      'Yes, you can cancel your booking within 24 hours before the service to get a full refund. After that, there is a cancellation fee. To cancel, log into your account, navigate to your bookings, and select the cancel option. You will receive a confirmation email once the cancellation is processed. For further assistance, contact our support team.',
    imageLink:
      'https://img.freepik.com/free-vector/appointment-booking-with-calendar-concept_23-2148556783.jpg?ga=GA1.1.1930567150.1733215744&semt=ais_hybrid',
    createdAt: '2024-12-12T16:45:00Z',
  },
  {
    question: 'How do I contact customer support?',
    answer:
      'You can contact customer support via email at support@ourcompany.com or reach us on WhatsApp at +1234567890. Our team is available 24/7 to assist with any inquiries or issues. You can also use the live chat feature on our website for immediate support. For complex issues, we recommend sending an email with detailed information.',
    imageLink:
      'https://images.pexels.com/photos/7820321/pexels-photo-7820321.jpeg?auto=compress&cs=tinysrgb&w=600',
    createdAt: '2024-12-13T18:00:00Z',
  },
];

const BlogCard = () => {
  // Replace with real API data if needed
  const faqs = mockFaqs;

  // Function to truncate text and add ellipsis if over 400 characters
  const truncateText = (text: string, maxLength: number) => {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div style={{ padding: '0 16px' }}>
      <Row gutter={[16, 16]} justify="center">
        {faqs.map((faq, i) => (
          <Col
            xs={24}
            sm={12}
            md={8}
            lg={6}
            key={i}
            style={{ marginBottom: '16px' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.5 }}
            >
              <Card
                hoverable
                style={{
                  width: '100%',
                  maxWidth: '340px',
                  margin: '0 auto',
                }}
                cover={
                  <Avatar
                    shape="square"
                    size={{ xs: 200, sm: 280, md: 320, lg: 340 }}
                    src={faq?.imageLink}
                    alt={faq?.question}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover',
                    }}
                  />
                }
              >
                <p
                  style={{
                    color: 'gray',
                    marginBottom: '10px',
                    fontSize: 'clamp(12px, 2vw, 14px)',
                  }}
                >
                  <CalendarOutlined
                    style={{
                      color: 'green',
                      marginRight: '8px',
                      fontSize: 'clamp(14px, 2vw, 16px)',
                    }}
                  />
                  {new Date(faq?.createdAt).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                  })}
                </p>
                <Meta
                  title={
                    <span style={{ fontSize: 'clamp(16px, 2.5vw, 18px)' }}>
                      {faq?.question}
                    </span>
                  }
                  description={
                    <span style={{ fontSize: 'clamp(14px, 2vw, 16px)' }}>
                      {truncateText(faq?.answer, 140)}
                    </span>
                  }
                />
                <p
                  style={{
                    padding: '10px 0',
                    fontSize: 'clamp(14px, 2vw, 16px)',
                  }}
                  dangerouslySetInnerHTML={{
                    __html: truncateText(faq?.answer, 300),
                  }}
                />
              </Card>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogCard;
