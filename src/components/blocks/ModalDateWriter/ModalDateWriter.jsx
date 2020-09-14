import React, { useState, useContext } from 'react';
import { Select, Space } from 'antd';
import { Context } from '@/context';
import { FormattedMessage, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { StyledButton, StyledSelect } from '@/components/styles';
import { ModalWrapper, StyledModal, StyledDatePicker } from './styles';

const { Option } = Select;

function ModalDateWriter({ intl }) {
  const [visible, setVisible] = useState(false);
  const [hour, setHour] = useState(null);
  const [date, setDate] = useState(null);
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

  const handleSelectorChange = value => setHour(value);
  const handleDatePickerChange = value => setDate(value);
  const handleCancel = () => setVisible(false);

  const popupContainer = () => document.getElementById('popup-container');

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
}

ModalDateWriter.propTypes = {
  intl: PropTypes.shape({
    formatMessage: PropTypes.func.isRequired,
  }).isRequired,
};

export default injectIntl(ModalDateWriter);
