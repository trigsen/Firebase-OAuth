import React, { useState, useContext } from 'react';
import { Select, Space } from 'antd';
import { Context } from '@/context';
import { FormattedMessage, useIntl } from 'react-intl';
import { StyledButton, StyledSelect } from '@/components/styles';
import { SelectValue } from 'antd/lib/select';
import { ModalWrapper, StyledModal, StyledDatePicker } from './styles';

const { Option } = Select;

const ModalDateWriter = () => {
  const intl = useIntl();
  const [visible, setVisible] = useState(false);
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  const { addHour } = useContext(Context);
  const hours = [...Array(24).keys()];

  const showModal = () => setVisible(true);
  const handleOk = () => {
    if (hour !== null && !!date) {
      const ISOStringDate = new Date(date).toISOString().substring(0, 10);
      addHour(ISOStringDate, hour);
    }
    setVisible(false);
  };

  const handleSelectorChange = (value: SelectValue) => setHour(value as string);
  const handleDatePickerChange = (value: moment.Moment | null) => value ? setDate(value.toISOString()) : null;
  const handleCancel = () => setVisible(false);

  const popupContainer = () => document.getElementById('popup-container')!;

  return (
    <ModalWrapper>
      <StyledButton type="dashed" block onClick={showModal}>
        <FormattedMessage id="addNewInf" />
      </StyledButton>
      <StyledModal
        title=""
        cancelText={intl.formatMessage({ id: 'modal.cancel' })}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        getContainer={popupContainer}
      >
        <Space align="center">
          <StyledDatePicker
            placeholder={intl.formatMessage({ id: 'datepicker.placholder' })}
            onChange={handleDatePickerChange}
            getPopupContainer={popupContainer} />
          <StyledSelect
            onChange={handleSelectorChange}
            getPopupContainer={popupContainer}
          >
            {hours.map(value => (
              <Option key={new Date().getTime() + value} value={value}>
                {value}
              </Option>
            ))}
          </StyledSelect>
        </Space>
      </StyledModal>
    </ModalWrapper>
  );
};

export default ModalDateWriter;
