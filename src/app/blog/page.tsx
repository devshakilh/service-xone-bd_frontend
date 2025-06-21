'use client';

import BlogeCard from '@/components/BlogeCard';
import SMBreadcrumb from '@/components/ui/Breadcrumb';
import Container from '@/components/ui/container';
import Footer from '@/components/ui/footer';
import Navbar from '@/components/ui/navHader';
import { Metadata } from 'next';

const Blogs = () => {
  return (
    <div>
      <Navbar />

      <Container>
        {/* bredcone and baner */}
        <div
          style={{
            width: '100%',
            height: '200px',
            backgroundColor: '#3B82F6',
            margin: '20px 0',
            borderRadius: '15px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
          }}
        >
          <h1
            style={{
              color: '#fff',
              fontSize: '50px',
              fontWeight: 'bold',
            }}
          >
            Latest Blog Post
          </h1>
          <br />
          <div>
            <SMBreadcrumb
              items={[
                { label: 'Home', path: '/' },
                { label: 'Blog', path: '/blog' },
              ]}
              style={{
                color: '#fff',
                fontSize: '17px',
              }}
            />
          </div>
        </div>
        <BlogeCard />
      </Container>
      <Footer />
    </div>
  );
};

export default Blogs;
