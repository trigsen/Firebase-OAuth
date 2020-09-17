import React from 'react';

const initialState = {
  hoursStorage: {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  addHour: (date: string, hour: string) => {},
};

export const Context = React.createContext(initialState);
