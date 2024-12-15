import { timeSlots } from "@/constants/golobal";
import { Calendar, Col, Radio, Row, theme } from "antd";
import type { Dayjs } from "dayjs";
import { useState } from "react";

interface BookingDateProps {
  setStartTime: (value: string) => void;
  setEndTime: (value: string) => void;
  setNewDates: (value: string) => void;
}

const BookingDate = ({
  setStartTime,
  setEndTime,
  setNewDates,
}: BookingDateProps) => {
  const [size, setSize] = useState<any>("large"); // default is 'middle'
  // default is 'middle'

  const onPanelChange = (value: Dayjs) => {
    const date = String(value.format("YYYY-MM-DD"));

    setNewDates(date);
  };
  const { token } = theme.useToken();
  const wrapperStyle: React.CSSProperties = {
    width: 300,
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
  };

  return (
    <div
    
      style={{
        height: "22rem",
      }}
    >
      <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
        <Col span={8} style={{ margin: "20px 0" }}>
          {/* <FormDatePicker
            setNewDates={setNewDates}
            name="date"
            label="Date of birth"
          /> */}
          <div style={wrapperStyle}>
            <Calendar fullscreen={false} onChange={onPanelChange} />
          </div>
        </Col>
        <Col span={16} style={{ marginTop: "20px" }}>
          <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
            <Row
              style={{
                gap: "1rem",
              }}
              gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}
            >
              {timeSlots?.map((timeSlot, i) => {
                return (
                  <Col span={6} key={i}>
                    <Radio.Button
                      onClick={() => {
                        setStartTime(timeSlot?.startTime);
                        setEndTime(timeSlot?.endTime);
                      }}
                      value={timeSlot?.slot}
                      style={{
                        width: "100%",
                        height: "70px",
                        textAlign: "center",
                        borderRadius: "10px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {timeSlot?.slot}
                    </Radio.Button>
                  </Col>
                );
              })}
            </Row>
          </Radio.Group>
        </Col>
      </Row>
    </div>
  );
};

export default BookingDate;
