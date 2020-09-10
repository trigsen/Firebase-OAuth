import React, { useContext } from 'react';
import { Calendar as Cal } from 'antd';
import { Context } from '@/context';
import { HOURS_TO_FILL_LOCAL_STORAGE } from '@/constants';
import { Hour, HourWrap } from './styles';

function Calendar() {
  const { hoursStorage } = useContext(Context);
  let hoursLocalStorage = JSON.parse(
    localStorage.getItem(HOURS_TO_FILL_LOCAL_STORAGE),
  );
  hoursLocalStorage = {
    ...hoursLocalStorage,
    ...hoursStorage,
  };
  localStorage.setItem(
    HOURS_TO_FILL_LOCAL_STORAGE,
    JSON.stringify(hoursLocalStorage),
  );
  const keysStorage = Object.entries(hoursLocalStorage);

  const dateCellRender = value => {
    const hourToFill = Object.fromEntries(
      keysStorage.filter(keySet => {
        const [ISOStringDate] = keySet;
        const dateCell = value.toDate().toISOString().substring(0, 10);
        return dateCell === ISOStringDate;
      }),
    );
    const [hour] = Object.values(hourToFill);

    return hour >= 0 ? (
      <HourWrap num={hour}>
        <Hour>{hour}</Hour>
      </HourWrap>
    ) : (
      <HourWrap />
    );
  };

  return <Cal fullscreen={false} dateCellRender={dateCellRender} />;
}

export default Calendar;
