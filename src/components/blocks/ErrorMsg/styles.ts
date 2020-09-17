import styled from 'styled-components';

export const ErrorMsg = styled.div`
  color: ${({ theme }) => theme.colors.errorMsg};
  display: inline-block;
  font-size: 0.7rem;
  line-height: 15px;
`;
