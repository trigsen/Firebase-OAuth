import React, { useContext } from 'react';
import { Calendar as Cal } from 'antd';
import { Context } from '@/context';
import { Hour, HourWrap } from './styles';

function Calendar() {
  const { hoursStorage } = useContext(Context);
  const keysStorage = Object.entries(hoursStorage);

  const dateCellRender = value => {
    if (keysStorage.length === 0) {
      return <HourWrap />;
    }

    const hourToFill = Object.fromEntries(
      keysStorage.filter(keySet => {
        const [date] = keySet;
        const dateCell = value.toDate().toISOString().substring(0, 10);
        const markedDate = new Date(date).toISOString().substring(0, 10);
        return dateCell === markedDate;
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
