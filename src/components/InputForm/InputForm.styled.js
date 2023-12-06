import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 30px;
`;

export const Title = styled.h1`
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  border: 2px solid black;
  padding: 15px;
`;

export const InputField = styled.input`
  width: 300px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const FormButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  width: 100px;
  height: 35px;
  border-radius: 5px;
  border: 1px solid rgb(232, 230, 223);
  &:focus {
    color: #ffff;
    background-color: blue;
    border-color: #ffff;
  }
`;
