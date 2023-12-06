import styled from 'styled-components';

export const ContactLi = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const ContactContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
`;

export const ContactData = styled.p`
  font-size: 21px;
`;

export const DeleteButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  width: 60px;
  height: 18px;
  border-radius: 5px;
  border: 1px solid rgb(232, 230, 223);
  &:focus {
    color: #ffff;
    background-color: blue;
    border-color: #ffff;
  }
`;
