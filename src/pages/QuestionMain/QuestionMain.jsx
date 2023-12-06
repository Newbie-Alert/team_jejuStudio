import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import styled, { css } from 'styled-components';
import { FadeAnimation, Toast } from '../../globalStyle/GlobalAnimation';

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

export default function QuestionMain({ setProgress, count, setCount }) {
  const navi = useNavigate();
  const [current, setCurrent] = useState('');
  const [userChoice, setUserChoice] = useState({
    0: '',
    1: '',
    2: ''
  });

  const questions = [
    {
      question: '어떤 사진 촬영을 원하시나요?',
      list: [
        '개인 프로필 사진',
        '개인 사진',
        '가족 사진',
        '아이 사진',
        '커플 사진',
        '우정 사진',
        '반려동물 사진',
        '기타'
      ]
    },
    {
      question: '촬영 희망일을 선택해주세요',
      list: ['협의 가능해요', '가능한 빨리 진행하고 싶어요', '일주일 이내로 진행하고 싶어요', '원하는 날짜가 있어요']
    },
    {
      question: '원하시는 지역을 선택해주세요',
      list: ['애월', '서귀포', '협재', '성산', '기타']
    }
  ];

  const onChagneHandler = (e) => {
    switch (e.target.id) {
      case String(1):
        setUserChoice((prev) => ({ ...prev, 1: e.target.value }));
        break;
      case String(2):
        setUserChoice((prev) => ({ ...prev, 2: e.target.value }));
        break;
      default:
        break;
    }
  };

  const onItemClick = (e) => {
    setCurrent(e.target.innerText);

    switch (count) {
      case 0:
        setUserChoice((prev) => ({ ...prev, 0: e.target.innerText }));
        break;
      case 1:
        setUserChoice((prev) => ({ ...prev, 1: e.target.innerText }));
        break;
      case 2:
        setUserChoice((prev) => ({ ...prev, 2: e.target.innerText }));
        break;
      case 3:
        setUserChoice((prev) => ({ ...prev, 3: e.target.innerText }));
        break;
      default:
        break;
    }
  };

  const onSubmit = () => {
    if (count < 3) {
      setCount(count + 1);
    }
    if (count === 2) {
      localStorage.setItem('question', JSON.stringify(userChoice));
    }
    setProgress((prev) => prev + 33);
  };

  const onLogin = () => {
    Toast.fire({
      icon: 'info',
      title: '로그인 페이지로 이동합니다',
      timer: 1500
    }).then((value) => {
      value.isDismissed && navi('/login');
    });
  };

  const onCancel = () => {
    setCount(count - 1);
    setProgress((prev) => prev - 33);
  };

  return (
    <>
      <QuestionMainContainer>
        {count !== 3 && <QuestionTitle>{questions[0].question}</QuestionTitle>}
        {count === 0 && (
          <QuestionList>
            {questions[0].list.map((el, i) => {
              return (
                <ListBox key={i} onClick={onItemClick} $current={current}>
                  {el}
                </ListBox>
              );
            })}
            <SelectButton onClick={onSubmit}>선택 완료</SelectButton>
          </QuestionList>
        )}
        {userChoice[0] !== '' && (
          <UserAnswer>
            {userChoice[0]}
            {count === 1 && <CancelBtn onClick={onCancel}>취소</CancelBtn>}
          </UserAnswer>
        )}

        {/* 2번 질문 */}
        {count === 1 && (
          <>
            <QuestionTitle>{questions[1].question}</QuestionTitle>
            <QuestionList>
              {questions[1].list.map((el, i) => {
                return (
                  <ListBox key={i} onClick={onItemClick} $current={current}>
                    {el}
                  </ListBox>
                );
              })}
              {current === '원하는 날짜가 있어요' && <DateInput onChange={onChagneHandler} id={1} />}
              <SelectButton onClick={onSubmit}>선택 완료</SelectButton>
            </QuestionList>
          </>
        )}
        {userChoice[1] !== '' && (
          <UserAnswer>
            {userChoice[1]}
            {count === 2 && <CancelBtn onClick={onCancel}>취소</CancelBtn>}
          </UserAnswer>
        )}

        {/* 2번 질문 */}
        {count === 2 && (
          <>
            <QuestionTitle>{questions[2].question}</QuestionTitle>
            <QuestionList>
              {questions[2].list.map((el, i) => {
                return (
                  <ListBox key={i} onClick={onItemClick} $current={current}>
                    {el}
                  </ListBox>
                );
              })}
              {current === '기타' && <EtcInput onChange={onChagneHandler} id={2} />}
              <SelectButton onClick={onSubmit}>선택 완료</SelectButton>
            </QuestionList>
          </>
        )}
        {userChoice[2] !== '' && (
          <UserAnswer>
            {userChoice[2]}
            {count === 3 && <CancelBtn onClick={onCancel}>취소</CancelBtn>}
          </UserAnswer>
        )}
        {count === 3 && (
          <ConfirmToLogin onClick={onLogin}>
            <h3>로그인 후 진행하기</h3>
          </ConfirmToLogin>
        )}
      </QuestionMainContainer>
    </>
  );
}
