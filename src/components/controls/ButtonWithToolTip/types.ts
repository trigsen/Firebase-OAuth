import React from 'react';

export interface Props {
  onClick: () => void;
  children: React.ReactNode;
  disabled?: boolean;
  translation: string;
}
