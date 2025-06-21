'use client';

import { timeSlots } from '@/constants/golobal';
import { Calendar, Col, Radio, Row, theme } from 'antd';
import type { Dayjs } from 'dayjs';
import { useState } from 'react';

interface BookingDateProps {
  setStartTime: (value: string) => void;
  setEndTime: (value: string) => void;
  setNewDate: (value: string) => void;
}

const BookingDate = ({
  setStartTime,
  setEndTime,
  setNewDate,
}: BookingDateProps) => {
  const [size, setSize] = useState<any>('large');
  const { token } = theme.useToken();

  const onPanelChange = (value: Dayjs) => {
    const date = value.format('YYYY-MM-DD');
    setNewDate(date);
  };

  const wrapperStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '300px',
    border: `1px solid ${token.colorBorderSecondary}`,
    borderRadius: token.borderRadiusLG,
    overflow: 'hidden',
  };

  return (
    <div style={{ padding: '16px 0' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col
          xs={24}
          sm={12}
          lg={8}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <div style={wrapperStyle}>
            <Calendar fullscreen={false} onChange={onPanelChange} />
          </div>
        </Col>
        <Col xs={24} sm={12} lg={16}>
          <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
            <Row gutter={[8, 8]}>
              {timeSlots?.map((timeSlot, i) => (
                <Col xs={12} sm={8} lg={6} key={i}>
                  <Radio.Button
                    onClick={() => {
                      setStartTime(timeSlot?.startTime);
                      setEndTime(timeSlot?.endTime);
                    }}
                    value={timeSlot?.slot}
                    style={{
                      width: '100%',
                      height: '60px',
                      textAlign: 'center',
                      borderRadius: '8px',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      fontSize: 'clamp(12px, 2vw, 14px)',
                    }}
                  >
                    {timeSlot?.slot}
                  </Radio.Button>
                </Col>
              ))}
            </Row>
          </Radio.Group>
        </Col>
      </Row>
    </div>
  );
};

export default BookingDate;
