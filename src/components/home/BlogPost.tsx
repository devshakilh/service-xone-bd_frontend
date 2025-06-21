import { Button } from 'antd';
import Link from 'next/link';
import BlogeCard from '../BlogeCard';
import BlogeCardHome from './BlogeCardHome';

const BlogPost = () => {
  return (
    <div>
      {/* heding */}
      <div
        style={{
          padding: '30px 0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div>
          <h1
            style={{
              fontSize: '50px',
              color: '#007bff',
            }}
          >
            Latest Blog Post
          </h1>
          <p
            style={{
              marginTop: '10px',
              fontSize: '20px',
              color: '#808080',
            }}
          >
            Our Latest News
          </p>
        </div>
        <Link href="/blog">
          {' '}
          <Button
            type="primary"
            style={{
              backgroundColor: '#007BFF',
              color: '#fff',
              borderRadius: '5px',
              width: '100px',
            }}
          >
            See All
          </Button>
        </Link>
      </div>
      {/* service option */}
      <BlogeCardHome />
    </div>
  );
};

export default BlogPost;
