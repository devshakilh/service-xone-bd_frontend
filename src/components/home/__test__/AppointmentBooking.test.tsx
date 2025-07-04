import { render, screen, within } from '@testing-library/react';
import AppointmentBooking from '../AppointmentBooking'; // Adjust path as needed
import { DotChartOutlined } from '@ant-design/icons';

// Mock Next.js Image component
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ src, alt, width, height, style }: any) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img src={src} alt={alt} width={width} height={height} style={style} />
  ),
}));

// Mock framer-motion
jest.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: any) => <div {...props}>{children}</div>,
  },
}));

// Mock Ant Design Avatar to ensure data-testid and styles are passed through
jest.mock('antd', () => {
  const actualAntd = jest.requireActual('antd');
  return {
    ...actualAntd,
    Avatar: ({ children, style, ...props }: any) => (
      <div {...props} style={style} data-testid={props['data-testid']}>
        {children}
      </div>
    ),
  };
});

// Mock Ant Design Icon
jest.mock('@ant-design/icons', () => ({
  DotChartOutlined: () => (
    <span className="anticon" data-testid="mocked-icon">
      MockedIcon
    </span>
  ),
}));

describe('AppointmentBooking Component', () => {
  beforeEach(() => {
    render(<AppointmentBooking />);
  });

  test('renders the main heading correctly', () => {
    const heading = screen.getByRole('heading', {
      name: /The Best Online Appointment Booking!/i,
      level: 1,
    });
    expect(heading).toBeInTheDocument();
    expect(heading.tagName).toBe('H1');
    expect(heading).toHaveAttribute(
      'style',
      expect.stringContaining('font-size: 40px')
    );
    expect(heading).toHaveAttribute(
      'style',
      expect.stringMatching(/color: (#007bff|rgb\(0,\s*123,\s*255\))/)
    );
  });

  test('renders the description paragraph', () => {
    const description = screen.getByText(
      'When choosing the best platform for your needs, consider factors like your business size, budget, specific requirements, ease of use, and any unique features that stand out to you.',
      { exact: true }
    );
    expect(description).toBeInTheDocument();
    expect(description).toHaveAttribute(
      'style',
      expect.stringContaining('font-size: 18px')
    );
    expect(description).toHaveAttribute(
      'style',
      expect.stringMatching(/color: (gray|rgb\(128,\s*128,\s*128\))/)
    );
  });

  test('renders the correct image with alt text', () => {
    const image = screen.getByAltText('appointment');
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dhvuyehnq/image/upload/v1697709098/ww6pbytxwqrx0tld9ba2.png'
    );
    expect(image).toHaveAttribute('width', '500');
    expect(image).toHaveAttribute('height', '500');
    expect(image).toHaveAttribute(
      'style',
      expect.stringContaining('max-width: 100%')
    );
    expect(image).toHaveAttribute(
      'style',
      expect.stringContaining('height: auto')
    );
  });

  test('renders all feature sections', () => {
    const features = [
      'Seamless User Experience',
      'Customisable & Scalable',
      'Robust Feature Set',
      'Security & Support',
    ];

    features.forEach((feature) => {
      const featureHeading = screen.getByRole('heading', {
        name: new RegExp(feature, 'i'),
        level: 2,
      });
      expect(featureHeading).toBeInTheDocument();
      expect(featureHeading.tagName).toBe('H2');
      expect(featureHeading).toHaveAttribute(
        'style',
        expect.stringContaining('font-size: 18px')
      );
      expect(featureHeading).toHaveAttribute(
        'style',
        expect.stringMatching(/color: (#333|rgb\(51,\s*51,\s*51\))/)
      );
    });
  });

  test('renders feature descriptions', () => {
    const descriptions = [
      'Booking SaaS System offers a seamless user experience',
      'We provide a highly customisable and scalable system',
      'A set of features designed to streamline appointment management',
      'Security and customer support are at the forefront of our priorities',
    ];

    descriptions.forEach((description) => {
      const descElement = screen.getByText(description, { exact: true });
      expect(descElement).toBeInTheDocument();
      expect(descElement).toHaveAttribute(
        'style',
        expect.stringContaining('font-size: 16px')
      );
      expect(descElement).toHaveAttribute(
        'style',
        expect.stringMatching(/color: (gray|rgb\(128,\s*128,\s*128\))/)
      );
    });
  });
});
