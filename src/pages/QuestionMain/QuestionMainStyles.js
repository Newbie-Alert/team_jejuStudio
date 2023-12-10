import styled, { css } from "styled-components";
import { FadeAnimation } from "../../globalStyle/GlobalAnimation";

const QuestionMainContainer = styled.div`
  width: 100%;
  height: 100vh;
  overflow: scroll;
  background-color: #f2f2f2;
  border: 1px solid black;
  padding: 1rem 30rem;
  font-weight: 600;
  @media screen and (max-width: 1400px) {
    padding: 1rem 20rem;
  }
  @media screen and (max-width: 960px) {
    padding: 1rem 10rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 1.25rem;
  }
`;

const QuestionTitle = styled.div`
  width: fit-content;
  border-radius: 12px;
  border-top-left-radius: 3px;
  background-color: white;
  padding: 1.25rem;
  margin-block: 1rem;
`;

const QuestionList = styled.div`
  width: 60%;
  border-radius: 12px;
  border-top-left-radius: 3px;
  background-color: white;
  padding: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  animation: ${FadeAnimation} 1s forwards;
`;

const ListBox = styled.div`
  width: 100%;
  border: 1px solid #eee;
  border-radius: 9px;
  padding: 1rem;
  font-weight: 600;
  cursor: pointer;
  ${(props) => {
    if (props.$current === props.children) {
      return css`
        border-color: #005f00;
        background-color: #1dbf7e50;
        color: #1d1d1d;
      `;
    }
  }}

  &:hover {
    border-color: green;
  }
`;

const SelectButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 9px;
  border: none;
  cursor: pointer;
  font-weight: 600;
  &:hover {
    background-color: #1e8348ad;
    color: white;
  }
`;

const UserAnswer = styled.div`
  width: fit-content;
  margin-left: auto;
  padding: 1rem;
  background-color: #242424;
  color: white;
  border-radius: 15px;
  border-top-right-radius: 3px;
  margin-block: 2.5rem;
  position: relative;
  animation: ${FadeAnimation} 0.5s ease;
`;

const CancelBtn = styled.h4`
  width: fit-content;
  font-weight: 500;
  position: absolute;
  bottom: -25px;
  right: 0;
  color: black;
  cursor: pointer;
`;

const DateInput = styled.input.attrs((props) => ({
  type: 'date'
}))`
  width: 100%;
  padding: 1rem;
  border-radius: 9px;
  border: 1px solid #949494;
`;

const EtcInput = styled.input.attrs((props) => ({
  type: 'text',
  placeholder: '원하시는 장소를 입력해주세요'
}))`
  width: 100%;
  padding: 1rem;
  border-radius: 9px;
  border: 1px solid #949494;
`;

const ConfirmToLogin = styled.div`
  width: 100%;
  padding: 1.25rem;
  border-radius: 9px;
  text-align: center;
  border: 1px solid #1d1d1d;
  border-radius: 9px;
  margin-block: 9rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: #1d1d1d;
    color: white;
  }
`;

export {
  QuestionMainContainer,
  QuestionTitle,
  QuestionList,
  ListBox,
  SelectButton,
  UserAnswer,
  CancelBtn,
  DateInput,
  EtcInput,
  ConfirmToLogin
}