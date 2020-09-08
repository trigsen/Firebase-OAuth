import React, { useState, useContext } from 'react';
import {
  Modal, DatePicker, Select, Space,
} from 'antd';
import PrimaryButton from '@/components/controls/PrimaryButton/PrimaryButton';
import PropTypes from 'prop-types';
import { ModalWrapper } from './styles';

const { Option } = Select;

function ModalDateWriter({ context }) {
  const [visible, setVisible] = useState(false);
  const [hour, setHour] = useState(null);
  const [date, setDate] = useState(null);
  const { addHour } = useContext(context);
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
      <PrimaryButton onClick={showModal}>Add new information</PrimaryButton>
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

ModalDateWriter.defaultProps = {
  context: {
    hourStorage: {},
    addHour: () => {},
  },
};

ModalDateWriter.propTypes = {
  context: PropTypes.shape({
    hourStorage: PropTypes.shape({}),
    addHour: PropTypes.func,
  }),
};

export default ModalDateWriter;
