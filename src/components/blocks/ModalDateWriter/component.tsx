import React, { useState, useCallback } from 'react';
import { Space } from 'antd';
import { FormattedMessage } from 'react-intl';
import { useTranslate } from '@/utils/hooks/useTranslate';
import { StyledButton } from '@/common/components/styles';
import { SelectValue } from 'antd/lib/select';
import HourPicker from '@/components/blocks/HourPicker';
import { useDispatch } from 'react-redux';
import { updateHours } from '@/actions/calendar';
import { ModalWrapper, StyledModal, StyledDatePicker } from './styles';

const ModalDateWriter = React.memo(() => {
  const [visible, setVisible] = useState(false);
  const [hour, setHour] = useState('');
  const [date, setDate] = useState('');
  const dispatch = useDispatch();
  const translate = useTranslate();

  const showModal = useCallback(() => setVisible(true), []);
  const handleOk = useCallback(() => {
    if (hour !== null && !!date) {
      const ISOStringDate = new Date(date).toISOString().substring(0, 10);
      dispatch(updateHours({ [ISOStringDate]: hour }));
    }
    setVisible(false);
  }, [hour, date, dispatch]);

  const handleSelectorChange = useCallback(
    (value: SelectValue) => setHour(value as string),
    [],
  );
  const handleDatePickerChange = useCallback(
    (value: moment.Moment | null) => (value ? setDate(value.toISOString()) : null),
    [],
  );
  const handleCancel = useCallback(() => setVisible(false), []);

  const popupContainer = useCallback(
    () => document.getElementById('popup-container')!,
    [],
  );

  return (
    <ModalWrapper>
      <StyledButton type="dashed" block onClick={showModal}>
        <FormattedMessage id="addNewInf" />
      </StyledButton>
      <StyledModal
        title=""
        cancelText={translate('modal.cancel', 'Cancel')}
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        getContainer={popupContainer}
      >
        <Space align="center">
          <StyledDatePicker
            placeholder={translate('datepicker.placholder', 'Select date')}
            onChange={handleDatePickerChange}
            getPopupContainer={popupContainer} />
          <HourPicker
            handleSelectorChange={handleSelectorChange}
            popupContainer={popupContainer} />
        </Space>
      </StyledModal>
    </ModalWrapper>
  );
});

export default ModalDateWriter;
