import styled from 'styled-components';

export const FormWrapper = styled.div`
  width: 100%;
  padding-top: 50px;
`;

export const Form = styled.form`
  width: 50%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const ItemWrapper = styled.div`
  display: grid;
  grid-template-columns: 75px 1fr;
  grid-template-areas:
    "label input"
    ". errorMsg"
  width: 100%;

  &:not(:first-child) {
    margin-top: 30px;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: transparent;
  border: 2px solid #eee;
  box-shadow: 0 0 15px 4px rgba(0, 0, 0, 0.06);
  border-radius: 10px;
  padding-left: 10px;
`;

export const Label = styled.label`
  font-size: 1rem;
  cursor: pointer;
  transition: color 0.5s;

  &:hover {
    color: #0f0f6d;
  }
`;

export const ErrorMsg = styled.div`
  grid-column-start: 2;
  color: #cc0033;
  display: inline-block;
  font-size: 12px;
  line-height: 15px;
  margin: 5px 0 0;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const Button = styled.button`
  background: #0f0f6d;
  color: #ffffff;
  cursor: pointer;
  font-size: 1rem;
  padding: 10px 20px;
  border: 0;
  transition: all 0.5s;
  border-radius: 10px;
  width: auto;
  position: relative;
  margin-top: 25px;

  &:hover {
    background: #2b2bff;
    transition: all 0.5s;
    border-radius: 10px;
    box-shadow: 0px 6px 15px #0000ff61;
  }
`;
