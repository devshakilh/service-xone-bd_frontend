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
          <HomeOutlined />
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
          <samp style={{ ...style }}>{item.label}</samp>
        ),
      };
    }),
  ];
  return <Breadcrumb items={breadCrumbItem} />;
};

export default SMBreadcrumb;
