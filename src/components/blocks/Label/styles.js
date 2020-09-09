import styled from 'styled-components';

export const Label = styled.label`
  font-size: 0.8rem;
  cursor: pointer;
  transition: color 0.5s;

  &:hover {
    color: ${props => props.theme.colors.persianIndigo};
  }
`;

export const ItemWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 75px 1fr;
  width: 100%;
  text-align: right;
  gap: 10px;

  &:not(:first-child) {
    margin-top: 30px;
  }
`;

export const ErrorWrap = styled.div`
  grid-column-start: 2;
  text-align: left !important;
`;
