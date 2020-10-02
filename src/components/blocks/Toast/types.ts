import React from 'react';

export interface Props {
  remove: () => void;
  type: 'danger' | 'success';
  children: React.ReactNode;
}

export interface WrapperProps {
  type: 'danger' | 'success';
}
