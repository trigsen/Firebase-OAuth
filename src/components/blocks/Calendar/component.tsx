import React, { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HOURS_TO_FILL_LOCAL_STORAGE } from '@/constants';
import { getHoursStorage } from '@/reselect/calendar';
import { HoursStorage } from '@/components/blocks/Calendar/types';
import { Col, Row } from 'antd';
import ButtonWithToolTip from '@/components/controls/ButtonWithToolTip';
import { calendarRedoAction, calendarUndoAction } from '@/actions';
import { useTranslate } from '@/utils/hooks/useTranslate';
import { Hour, HourWrap, StyledCalendar } from './styles';

const updateHoursLocalStorage = (state: HoursStorage) => {
  const updatedLocalStorage = {
    ...state,
  };
  localStorage.setItem(
    HOURS_TO_FILL_LOCAL_STORAGE,
    JSON.stringify(updatedLocalStorage),
  );

  return updatedLocalStorage;
};

const Calendar = () => {
  const hoursStorage = useSelector(getHoursStorage);
  const dispatch = useDispatch();
  const translate = useTranslate();
  const hoursLocalStorage = useMemo(
    () => updateHoursLocalStorage(hoursStorage),
    [hoursStorage],
  );

  const keysStorage = Object.entries(hoursLocalStorage);

  const dateCellRender = (value: any) => {
    const hourToFill = Object.fromEntries(
      keysStorage.filter(keySet => {
        const [ISOStringDate] = keySet;
        const dateCell = value.toDate().toISOString().substring(0, 10);
        return dateCell === ISOStringDate;
      }),
    );
    const [hour] = Object.values(hourToFill);
    const primitiveHour = (hour as unknown) as number;

    return primitiveHour >= 0 ? (
      <HourWrap num={primitiveHour}>
        <Hour>{primitiveHour}</Hour>
      </HourWrap>
    ) : (
      <HourWrap />
    );
  };

  const UndoHandler = () => {
    dispatch(calendarUndoAction());
  };

  const RedoHandler = () => {
    dispatch(calendarRedoAction());
  };

  return (
    <Row justify="center" gutter={[16, 24]}>
      <Col span={24}>
        <StyledCalendar fullscreen={false} dateCellRender={dateCellRender} />
      </Col>
      <Col span={24}>
        <Row gutter={[16, 8]}>
          <Col span={12}>
            <ButtonWithToolTip
              onClick={UndoHandler}
              translation={translate('action.undo', 'Undo previous action')}
            >
              {translate('undo', 'Undo')}
            </ButtonWithToolTip>
          </Col>
          <Col span={12}>
            <ButtonWithToolTip
              onClick={RedoHandler}
              translation={translate('action.redo', 'Redo previous action')}
            >
              {translate('redo', 'Redo')}
            </ButtonWithToolTip>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Calendar;
