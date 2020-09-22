import React, { useContext, useMemo } from 'react';
import { Context } from '@/context';
import { HOURS_TO_FILL_LOCAL_STORAGE } from '@/constants';
import { Hour, HourWrap, StyledCalendar } from './styles';

const updateHoursLocalStorage = (state: object) => {
  const prevState = JSON.parse(
    localStorage.getItem(HOURS_TO_FILL_LOCAL_STORAGE)!,
  );
  const updatedLocalStorage = {
    ...prevState,
    ...state,
  };
  localStorage.setItem(
    HOURS_TO_FILL_LOCAL_STORAGE,
    JSON.stringify(updatedLocalStorage),
  );

  return updatedLocalStorage;
};

const Calendar = React.memo(() => {
  const { hoursStorage } = useContext(Context);
  const hoursLocalStorage = useMemo(() => updateHoursLocalStorage(hoursStorage), [hoursStorage]);
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

    return (hour as number) >= 0 ? (
      <HourWrap num={hour as number}>
        <Hour>{hour as number}</Hour>
      </HourWrap>
    ) : (
      <HourWrap />
    );
  };

  return <StyledCalendar fullscreen={false} dateCellRender={dateCellRender} />;
});

export default Calendar;