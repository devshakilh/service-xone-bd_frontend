import { DatePicker, DatePickerProps } from "antd";
import dayjs, { Dayjs } from "dayjs";
import { Controller, useFormContext } from "react-hook-form";

type UMDatePikerProps = {
  onChange?: (valOne: Dayjs | null, valTwo: string) => void;
  name: string;
  label?: string;
  value?: Dayjs;
  setNewDates: (value: Dayjs | null) => void;
};

const FormDatePicker = ({
  name,
  label,
  onChange,
  setNewDates,
}: UMDatePikerProps) => {
  const { control, setValue } = useFormContext();

  const handleOnChange: DatePickerProps["onChange"] = (date, dateString) => {
    if (typeof dateString === "string") {
      onChange?.(date, dateString);
    }
    setValue(name, date);
    setNewDates(date);
  };

  return (
    <div>
      {label && <label>{label}</label>}
      <br />
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <DatePicker
            defaultValue={field.value ? dayjs(field.value) : dayjs()}
            size="large"
            onChange={handleOnChange}
            className="lg:w-100%"
          />
        )}
      />
    </div>
  );
};

export default FormDatePicker;