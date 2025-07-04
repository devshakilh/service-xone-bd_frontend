import { render, screen, within } from '@testing-library/react';
import BlogeCardHome from '../BlogeCardHome'; // Adjust path as needed
import { useBlogsQuery } from '@/redux/api/blogApi';
import { CalendarOutlined } from '@ant-design/icons';
import BlogCardSkeleton from '../../skeleton/bloge-card-home.skeleton';

// Mock useBlogsQuery
jest.mock('@/redux/api/blogApi', () => ({
  useBlogsQuery: jest.fn(),
}));

// Mock next/image (used by antd Avatar with src)
jest.mock('next/image', () => {
  const NextImage = ({ src, alt }: any) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} data-testid="blog-image" />
  );
  NextImage.displayName = 'NextImage';
  return {
    __esModule: true,
    default: NextImage,
  };
});

// Mock framer-motion
jest.mock('framer-motion', () => {
  const MotionDiv = ({ children, ...props }: any) => (
    <div {...props}>{children}</div>
  );
  MotionDiv.displayName = 'MotionDiv';
  return {
    motion: {
      div: MotionDiv,
    },
  };
});

// Mock antd components
jest.mock('antd', () => {
  const actualAntd = jest.requireActual('antd');
  const Avatar = ({ children, ...props }: any) => (
    <div {...props} data-testid="avatar">
      {children}
    </div>
  );
  Avatar.displayName = 'Avatar';

  const Card = ({ children, cover, ...props }: any) => (
    <div {...props} data-testid="card">
      {cover}
      {children}
    </div>
  );
  Card.displayName = 'Card';

  const Col = ({ children, ...props }: any) => (
    <div {...props} data-testid="col-container">
      {children}
    </div>
  );
  Col.displayName = 'Col';

  const Row = ({ children, ...props }: any) => (
    <div {...props} data-testid="row-container">
      {children}
    </div>
  );
  Row.displayName = 'Row';

  return {
    ...actualAntd,
    Avatar,
    Card,
    Col,
    Row,
  };
});

// Mock antd Meta
jest.mock('antd/es/card/Meta', () => {
  const Meta = ({ title, description }: any) => (
    <div data-testid="card-meta">
      {title}
      {description}
    </div>
  );
  Meta.displayName = 'Meta';
  return Meta;
});

// Mock CalendarOutlined icon
jest.mock('@ant-design/icons', () => {
  const CalendarOutlined = () => (
    <span data-testid="calendar-icon">CalendarIcon</span>
  );
  CalendarOutlined.displayName = 'CalendarOutlined';
  return { CalendarOutlined };
});

// Mock BlogCardSkeleton
jest.mock('../../skeleton/bloge-card-home.skeleton', () => {
  const BlogCardSkeleton = () => (
    <div data-testid="skeleton">Loading Skeleton</div>
  );
  BlogCardSkeleton.displayName = 'BlogCardSkeleton';
  return BlogCardSkeleton;
});

describe('BlogeCardHome Component', () => {
  const mockBlogs = {
    data: [
      {
        id: 1,
        title: 'Blog 1',
        content:
          'This is the content of blog 1, which is quite interesting and engaging.',
        imageLink: 'https://example.com/image1.jpg',
        createdAt: '2023-10-01T12:00:00Z',
      },
      {
        id: 2,
        title: 'Blog 2',
        content: 'This is the content of blog 2, very informative and useful.',
        imageLink: 'https://example.com/image2.jpg',
        createdAt: '2023-10-02T12:00:00Z',
      },
      {
        id: 3,
        title: 'Blog 3',
        content:
          'This is the content of blog 3, full of insights and knowledge.',
        imageLink: 'https://example.com/image3.jpg',
        createdAt: '2023-10-03T12:00:00Z',
      },
      {
        id: 4,
        title: 'Blog 4',
        content: 'This is the content of blog 4, a must-read for enthusiasts.',
        imageLink: 'https://example.com/image4.jpg',
        createdAt: '2023-10-04T12:00:00Z',
      },
    ],
  };

  beforeEach(() => {
    // Reset mocks before each test
    (useBlogsQuery as jest.Mock).mockReset();
  });

  test('renders BlogCardSkeleton when loading', () => {
    (useBlogsQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
    });
    render(<BlogeCardHome />);
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
    expect(screen.getByText('Loading Skeleton')).toBeInTheDocument();
  });

  test('renders four blog cards when data is available', () => {
    (useBlogsQuery as jest.Mock).mockReturnValue({
      data: mockBlogs,
      isLoading: false,
    });
    render(<BlogeCardHome />);
    // Debug: Log rendered DOM
    // screen.debug();
    const cards = screen.getAllByTestId('card');
    expect(cards).toHaveLength(4); // Should render 4 blog cards
  });

  test('renders correct blog data in cards', () => {
    (useBlogsQuery as jest.Mock).mockReturnValue({
      data: mockBlogs,
      isLoading: false,
    });
    render(<BlogeCardHome />);

    mockBlogs.data.forEach((blog) => {
      // Check title
      const title = screen.getByText(blog.title, { exact: true });
      expect(title).toBeInTheDocument();

      // Check description (truncated content)
      const description = screen.getByText(blog.content.slice(0, 70), {
        exact: true,
      });
      expect(description).toBeInTheDocument();

      // Check date
      const formattedDate = new Date(blog.createdAt).toLocaleDateString(
        'en-US',
        {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        }
      );
      const dateElement = screen.getByText(formattedDate);
      expect(dateElement).toBeInTheDocument();

      // Check image
      const image = screen.getByAltText(blog.title);
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('src', blog.imageLink);
    });
  });

  test('renders calendar icon for each blog', () => {
    (useBlogsQuery as jest.Mock).mockReturnValue({
      data: mockBlogs,
      isLoading: false,
    });
    render(<BlogeCardHome />);
    const cards = screen.getAllByTestId('card');
    // Debug: Log card structure
    // cards.forEach((card, index) => {
    //   console.log(`Card ${index + 1}:`, within(card).queryByTestId('calendar-icon')?.outerHTML || 'No icon found');
    // });
    cards.forEach((card) => {
      const icon = within(card).getByTestId('calendar-icon');
      expect(icon).toBeInTheDocument();
      expect(icon).toHaveTextContent('CalendarIcon');
    });
  });

  test('renders responsive layout with Row and Col components', () => {
    (useBlogsQuery as jest.Mock).mockReturnValue({
      data: mockBlogs,
      isLoading: false,
    });
    render(<BlogeCardHome />);
    const row = screen.getByTestId('row-container');
    expect(row).toBeInTheDocument();

    // Query all Col components and filter for top-level ones
    const cols = within(row).getAllByTestId('col-container');
    const topLevelCols = cols.filter(
      (col) =>
        col.parentElement?.getAttribute('data-testid') === 'row-container'
    );
    // Debug: Log Col count
    // console.log('Col count:', topLevelCols.length, 'All cols:', cols.length);
    expect(topLevelCols).toHaveLength(4); // Four blog cards
  });
});
