import React from 'react';
import BackgroundImg from './styles';

interface Props {
  children: React.ReactNode;
}

const BgImage: React.FC<Props> = ({ children }) => <BackgroundImg>{children}</BackgroundImg>;

export default BgImage;
