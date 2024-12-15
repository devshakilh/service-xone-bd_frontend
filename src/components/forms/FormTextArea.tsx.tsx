import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  style?: any;
};

const FormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
  style,
}: TextAreaProps) => {
  const { control } = useFormContext();
  return (
    <div className={`lg:flex flex-col  lg:w-full`}>
      {label ? label : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            style={style}
            placeholder={placeholder}
            {...field}
            defaultValue={value}
          />
        )}
      />
    </div>
  );
};

export default FormTextArea;
