import React, { useState, useContext } from 'react';
import {
  Modal, DatePicker, Select, Space, Button,
} from 'antd';
import { Context } from '@/context';
import { ModalWrapper } from './styles';

const { Option } = Select;

function ModalDateWriter() {
  const [visible, setVisible] = useState(false);
  const [hour, setHour] = useState(null);
  const [date, setDate] = useState(null);
  const { addHour } = useContext(Context);
  const hours = [...Array(24).keys()];

  const showModal = () => setVisible(true);
  const handleOk = () => {
    if (hour >= 0 && !!date) {
      addHour(date, hour);
    }
    setVisible(false);
  };

  const handleSelectorChange = value => setHour(value);
  const handleDatePickerChange = value => setDate(value);
  const handleCancel = () => setVisible(false);

  return (
    <ModalWrapper>
      <Button type="primary" block onClick={showModal}>
        Add new information
      </Button>
      <Modal title="" visible={visible} onOk={handleOk} onCancel={handleCancel}>
        <Space align="center">
          <DatePicker onChange={handleDatePickerChange} />
          <Select onChange={handleSelectorChange}>
            {hours.map(value => (
              <Option key={new Date().getTime() + value} value={value}>
                {value}
              </Option>
            ))}
          </Select>
        </Space>
      </Modal>
    </ModalWrapper>
  );
}

export default ModalDateWriter;
