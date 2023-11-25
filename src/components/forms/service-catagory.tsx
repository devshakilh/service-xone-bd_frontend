import { useCategoriesQuery } from "@/redux/api/categorieApi";
import { Select } from "antd";

type ServiceCategoreProps = {
  name?: string;
  label?: string;
  setCategoryId: (label: any) => void;
  categoryId?: string;
  style?: React.CSSProperties;
};

const ServiceCategoreField = ({
  name,
  label,
  style,
  setCategoryId,
  categoryId,
}: ServiceCategoreProps) => {
  const { data, isLoading } = useCategoriesQuery({});

  const categories = data?.data;
  //@ts-ignore
  const categoriesOptions = categories?.map((categorie) => {
    return {
      label: categorie?.title,
      value: categorie?.id,
    };
  });

  return (
    <Select
      loading={isLoading}
      size="large"
      placeholder="Select Catagory"
      style={{
        ...style,
        width: "300px",
        height: "50px",
      }}
      options={categoriesOptions}
      value={categoryId}
      onChange={(value, label) => setCategoryId(label)}
    />
  );
};

export default ServiceCategoreField;
