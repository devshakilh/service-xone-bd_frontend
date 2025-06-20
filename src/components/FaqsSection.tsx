"use client";

import { CaretRightOutlined } from "@ant-design/icons";
import { Collapse, CollapseProps, theme } from "antd";
import React from "react";

import { useFaqsQuery } from "@/redux/api/faqsApi";
import { CSSProperties } from "@ant-design/cssinjs/lib/hooks/useStyleRegister";

const FaqsSection = () => {
  const { token } = theme.useToken();

  const panelStyle: React.CSSProperties = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };

  const { data, error, isLoading } = useFaqsQuery({});
  const faqs = data?.data;
  const getItems: (panelStyle: CSSProperties) => CollapseProps["items"] = (
    panelStyle
  ) =>
    faqs?.map((faq: any, i: number) => ({
      key: `${i}`,
      label: `${faq?.question}`,
      children: <p>{faq?.answer}</p>,
      style: panelStyle,
    }));

  return (
    <div>
      <Collapse
        bordered={false}
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) => (
          <CaretRightOutlined rotate={isActive ? 90 : 0} />
        )}
        style={{ background: token.colorBgContainer }}
        items={getItems(panelStyle)}
      />
    </div>
  );
};

export default FaqsSection;