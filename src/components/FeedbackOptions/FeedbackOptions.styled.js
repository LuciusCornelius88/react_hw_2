import styled from 'styled-components';

export const FeedbackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  margin-bottom: 30px;
`;

export const FeedbackButton = styled.button`
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
