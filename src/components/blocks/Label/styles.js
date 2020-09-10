import styled from 'styled-components';

export const Label = styled.label`
  font-size: 0.8rem;
  cursor: pointer;
  transition: color 0.5s;

  &:hover {
    color: ${props => props.theme.colors.persianIndigo};
  }
`;

export const ErrorWrap = styled.div`
  text-align: center !important;
`;
