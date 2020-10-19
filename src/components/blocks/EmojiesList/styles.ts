import styled from 'styled-components';

export const StyledUl = styled.ul`
  text-decoration: none;
  list-style-type: none;
  max-width: 300px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0;
  font-size: 40px;
   
  & > li {
    padding: 0 20px
  }
`;