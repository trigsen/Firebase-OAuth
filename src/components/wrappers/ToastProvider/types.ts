import { ReactNode } from 'react';

export interface Toasts {
  content: string;
  type: 'danger' | 'success';
  title: string;
  id: any;
}

export interface Props {
  children: ReactNode;
  ref?: any;
}
