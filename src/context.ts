import React from 'react';

const initialToastState = {
  // eslint-disable-next-line
  add: (type: 'danger' | 'success', description: string, title: string) => {},
  // eslint-disable-next-line
  remove: (id: number) => {},
};

export const ToastContext = React.createContext(initialToastState);
