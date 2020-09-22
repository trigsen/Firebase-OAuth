import React from 'react';
import { ErrorMsg as Err } from './styles';
import { Props } from './types';

const ErrorMsg: React.FC<Props> = ({ children }) => <Err>{children}</Err>;

export default ErrorMsg;
