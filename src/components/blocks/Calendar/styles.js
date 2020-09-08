import styled from 'styled-components';

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

    return theme.colors.white;
  }};
  color: ${({ num, theme }) => (num <= 4 || num >= 8 ? theme.colors.white : theme.colors.black)} !important;
  border-radius: 5px;
  margin-top: 5px;
`;
