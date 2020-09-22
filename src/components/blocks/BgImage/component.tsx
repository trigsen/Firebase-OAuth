import React from 'react';
import BackgroundImg from './styles';
import { Props } from './types';

const BgImage: React.FC<Props> = ({ children }) => (
  <BackgroundImg>{children}</BackgroundImg>
);

export default BgImage;
