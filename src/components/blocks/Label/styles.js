import styled from 'styled-components';
import { Input } from 'antd';

export const Label = styled.label`
  font-size: 0.8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.default};
  transition: color 0.5s;

  &:hover {
    color: ${({ theme }) => theme.colors.persianIndigo};
  }
`;

export const ErrorWrap = styled.div`
  text-align: center !important;
`;

export const StyledInput = styled(Input)`
  height: 25px;
  background-color: ${({ theme }) => theme.background.default};
  border: 1px solid ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.default};

  &::placeholder {
    font-size: 0.7rem;
    vertical-align: center;
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
