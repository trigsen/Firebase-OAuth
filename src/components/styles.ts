import styled from 'styled-components';
import { Button, Select } from 'antd';

export const StyledButton = styled(Button)`
  background: ${({ theme }) => theme.button.background};
  color: ${({ theme }) => theme.colors.default};
  border-color: ${({ theme }) => theme.button.border};

  &:hover,
  &:active,
  &:checked,
  &:visited,
  &:focus {
    background: ${({ theme }) => theme.button.background};
  }

  &:focus {
    color: ${({ theme }) => theme.colors.default};
    border-color: ${({ theme }) => theme.button.border};
  }

  &:hover {
    border-color: ${({ theme }) => theme.button.hover};
    color: ${({ theme }) => theme.button.hover};
  }
`;

export const ThemeSwitcherWrap = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledSelect = styled(Select)`
  color: ${({ theme }) => theme.colors.default};

  .ant-select-selector {
    background-color: ${({ theme }) => theme.background.default} !important;
    border: 1px solid ${({ theme }) => theme.colors.grey} !important;
  }

  .ant-select-arrow {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;
