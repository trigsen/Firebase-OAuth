import React, { useContext } from 'react';
import { Calendar as Cal } from 'antd';
import PropTypes from 'prop-types';
import { Hour, HourWrap } from './styles';

function Calendar({ context }) {
  const { hoursStorage } = useContext(context);
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

Calendar.defaultProps = {
  context: {
    hourStorage: {},
    addHour: () => {},
  },
};

Calendar.propTypes = {
  context: PropTypes.shape({
    hourStorage: PropTypes.shape({}),
    addHour: PropTypes.func,
  }),
};

export default Calendar;
