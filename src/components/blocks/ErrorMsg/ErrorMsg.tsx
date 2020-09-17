import React from 'react';
import { ErrorMsg as Err } from './styles';

interface Props {
  children: React.ReactNode;
}

const ErrorMsg: React.FC<Props> = ({ children }) => <Err>{children}</Err>;

export default ErrorMsg;
