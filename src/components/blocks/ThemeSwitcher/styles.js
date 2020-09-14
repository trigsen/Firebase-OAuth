import styled from 'styled-components';
import { Switch } from 'antd';

export const StyledSwitch = styled(Switch)`
  &.ant-switch-checked {
    background-color: black;
  }

  &.ant-switch-checked .ant-switch-handle::before {
    background-color: ${({ theme }) => theme.colors.grey};
  }
`;
