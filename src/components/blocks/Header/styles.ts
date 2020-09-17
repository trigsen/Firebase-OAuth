import styled from 'styled-components';
import { Typography } from 'antd';

const { Title } = Typography;

export const Wrapper = styled.header`
  width: 100%;
  padding-bottom: 15px;

  .ant-select-dropdown {
    background-color: ${({ theme }) => theme.background.default};
  }

  .ant-select-item-option {
    color: ${({ theme }) => theme.colors.default};
  }

  .ant-select-item-option-active,
  .ant-select-item-option-selected {
    background: ${({ theme }) => theme.colors.grey};
  }
`;

export const LangWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

export const StyledTitle = styled(Title)`
  color: ${({ theme }) => theme.colors.default} !important;
  text-align: center;
`;
