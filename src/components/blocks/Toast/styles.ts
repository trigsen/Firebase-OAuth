import styled, { keyframes } from 'styled-components';
import { WrapperProps } from '@/components/blocks/Toast/types';
import { Typography, Row } from 'antd';

const toastAnimation = keyframes`    
  0% {
      left: -700px;
    }
  
  100% {
    left: 0;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 250px;
  height: 50px;
  position: relative;
  font-size: 0.8rem;
  animation: ${toastAnimation} .5s;
  color: #ffffff !important;
  background-color: ${({ type }: WrapperProps) => (type === 'success' ? 'rgba(40, 186, 0, 0.8)' : 'rgba(188, 22, 0, 0.8)')};
  border-radius: 5px;
  padding: 0 15px;
  margin-top: 10px;
  box-shadow: 0px 0px 5px 3px rgba(0, 0, 0, 0.4);
  z-index: 20;
  transition: all 0.5s;
`;

export const StyledTypography = styled(Typography)`
  color: ${({ theme }) => theme.colors.white};
`;

export const StyledRow = styled(Row)`
  width: 100%;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;