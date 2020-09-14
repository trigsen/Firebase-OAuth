import styled from 'styled-components';
import { Calendar } from 'antd';

export const StyledCalendar = styled(Calendar)`
  background: ${({ theme }) => theme.background.default};

  .ant-picker-panel {
    background: ${({ theme }) => theme.background.default};
  }

  .ant-picker-body .ant-picker-content th {
    color: ${({ theme }) => theme.colors.default};
  }

  .ant-picker-calendar-date-value {
    color: ${({ theme }) => theme.colors.default};
    padding: 0;
  }

  .ant-picker-cell:hover .ant-picker-calendar-date {
    background: ${({ theme }) => theme.colors.grey} !important;
  }

  .ant-picker-cell-inner {
    padding: 0;
  }

  .ant-radio-group .ant-radio-button-wrapper {
    background: transparent;
    color: ${({ theme }) => theme.colors.default};
  }
  .ant-picker-calendar .ant-select {
    color: ${({ theme }) => theme.colors.default};
  }

  .ant-select-selector {
    background-color: ${({ theme }) => theme.background.default} !important;
    border: 1px solid ${({ theme }) => theme.colors.grey} !important;
    color: ${({ theme }) => theme.colors.default};
  }

  .ant-select-arrow {
    color: ${({ theme }) => theme.colors.placeholder};
  }

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
export const Hour = styled.div`
  text-align: center;
  vertical-align: center;
`;

export const HourWrap = styled.div`
  position: static;
  width: auto;
  height: 25px;
  overflow-y: auto;
  background-color: ${({ num, theme }) => {
    if (num >= 8) {
      return theme.colors.red;
    }

    if (num === 0) {
      return theme.colors.grey;
    }

    if (num <= 4) {
      return theme.colors.green;
    }

    return theme.background.default;
  }};
  color: ${({ num, theme }) => ((num !== null && num <= 4) || num >= 8
    ? theme.colors.white
    : theme.colors.default)} !important;
  border-radius: 5px;
  margin-top: 5px;
`;
