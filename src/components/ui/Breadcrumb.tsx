import { Breadcrumb } from "antd";
import Link from "next/link";
import { HomeOutlined } from "@ant-design/icons";

const SMBreadcrumb = ({
  items,
  style,
}: {
  items: {
    label: string;
    path?: string;
  }[];
  style?: React.CSSProperties;
}) => {
  const breadCrumbItem = [
    {
      title: (
        <Link style={{ ...style }} href="/">
          <HomeOutlined
            onMouseEnter={() => {}}
            onMouseLeave={() => {}}
          />
        </Link>
      ),
    },
    ...items.map((item) => {
      return {
        title: item.path ? (
          <Link style={{ ...style }} href={item.path}>
            {item.label}
          </Link>
        ) : (
          <span style={{ ...style }}>{item.label}</span>
        ),
      };
    }),
  ];
  return <Breadcrumb items={breadCrumbItem} />;
};

export default SMBreadcrumb;