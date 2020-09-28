import React from 'react';
import { ErrorMsg as Err } from './styles';
import { Props } from './types';

const ErrorMsg: React.FC<Props> = React.memo(({ children }) => (
  <Err>{children}</Err>
));

export default ErrorMsg;
