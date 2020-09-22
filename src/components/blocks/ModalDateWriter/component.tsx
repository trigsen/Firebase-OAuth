import React, {
  useState, useContext, useCallback,
} from 'react';
import { Space } from 'antd';
import { Context } from '@/context';
import { FormattedMessage, useIntl } from 'react-intl';
import { StyledButton } from '@/common/components/styles';
import { SelectValue } from 'antd/lib/select';
import HourPicker from '@/components/blocks/HourPicker';
import { ModalWrapper, StyledModal, StyledDatePicker } from './styles';

const ModalDateWriter = React.memo(() => {
  const intl = useIntl();
  const [visible, setVisible] = useState(false);
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  const { addHour } = useContext(Context);

  const showModal = useCallback(() => setVisible(true), []);
  const handleOk = useCallback(() => {
    if (hour !== null && !!date) {
      const ISOStringDate = new Date(date).toISOString().substring(0, 10);
      addHour(ISOStringDate, hour);
    }
    setVisible(false);
  }, [hour, date, addHour]);

  const handleSelectorChange = useCallback((value: SelectValue) => setHour(value as string), []);
  const handleDatePickerChange = useCallback((value: moment.Moment | null) => (value ? setDate(value.toISOString()) : null), []);
  const handleCancel = useCallback(() => setVisible(false), []);

  const popupContainer = useCallback(() => document.getElementById('popup-container')!, []);

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
          <HourPicker handleSelectorChange={handleSelectorChange} popupContainer={popupContainer} />
        </Space>
      </StyledModal>
    </ModalWrapper>
  );
});

export default ModalDateWriter;
