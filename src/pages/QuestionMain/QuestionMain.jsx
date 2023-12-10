import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import * as St from './QuestionMainStyles';
import { Toast } from '../../globalStyle/GlobalAnimation';

export default function QuestionMain({ setProgress, count, setCount }) {
  // STATES
  const [current, setCurrent] = useState('');
  const [userChoice, setUserChoice] = useState({
    0: '',
    1: '',
    2: ''
  });

  // HOOKS
  const navi = useNavigate();

  // VARIABLES
  const questions = [
    {
      question: '어떤 사진 촬영을 원하시나요?',
      list: ['개인 프로필 사진', '개인 사진', '가족 사진', '아이 사진', '커플 사진', '우정 사진', '반려동물 사진']
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

  // FUNCTIONS
  // 사전조사의 값의 변화를 감지하고 state를 변경 된 값으로 업데이트
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

  // 현재 선택 된 값으로 state를 업데이트 - styled-components로 전달하여 style의 조건에 사용됨.
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

  // 질문 통과 || 뒤로가기 시 - count를 증가 또는 감소
  const onSubmit = () => {
    if (count < 3) {
      // 질문의 개수보다 작으면 count + 1
      setCount(count + 1);
    }
    // 'count === 2'는 마지막 문항까지 제출 된 것. localStorage에 선택 된 값을 저장
    if (count === 2) {
      localStorage.setItem('question', JSON.stringify(userChoice));
    }
    setProgress((prev) => prev + 33);
  };

  // 로그인 함수 성공 || 실패에 해당하는 Toast가 출력
  const onLogin = () => {
    Toast.fire({
      icon: 'info',
      title: '로그인 페이지로 이동합니다',
      timer: 1500
    }).then((value) => {
      value.isDismissed && navi('/login');
    });
  };

  // 사전조사의 이전 문항으로
  const onCancel = () => {
    setCount(count - 1);
    setProgress((prev) => prev - 33);
  };

  // MAIN RETURN
  return (
    <>
      <St.QuestionMainContainer>
        {count !== 3 && <St.QuestionTitle>{questions[0].question}</St.QuestionTitle>}
        {count === 0 && (
          <St.QuestionList>
            {questions[0].list.map((el, i) => {
              return (
                <St.ListBox key={i} onClick={onItemClick} $current={current}>
                  {el}
                </St.ListBox>
              );
            })}
            <St.SelectButton onClick={onSubmit}>선택 완료</St.SelectButton>
          </St.QuestionList>
        )}
        {userChoice[0] !== '' && (
          <St.UserAnswer>
            {userChoice[0]}
            {count === 1 && <St.CancelBtn onClick={onCancel}>취소</St.CancelBtn>}
          </St.UserAnswer>
        )}

        {/* 2번 질문 */}
        {count === 1 && (
          <>
            <St.QuestionTitle>{questions[1].question}</St.QuestionTitle>
            <St.QuestionList>
              {questions[1].list.map((el, i) => {
                return (
                  <St.ListBox key={i} onClick={onItemClick} $current={current}>
                    {el}
                  </St.ListBox>
                );
              })}
              {current === '원하는 날짜가 있어요' && <St.DateInput onChange={onChagneHandler} id={1} />}
              <St.SelectButton onClick={onSubmit}>선택 완료</St.SelectButton>
            </St.QuestionList>
          </>
        )}
        {userChoice[1] !== '' && (
          <St.UserAnswer>
            {userChoice[1]}
            {count === 2 && <St.CancelBtn onClick={onCancel}>취소</St.CancelBtn>}
          </St.UserAnswer>
        )}

        {/* 3번 질문 */}
        {count === 2 && (
          <>
            <St.QuestionTitle>{questions[2].question}</St.QuestionTitle>
            <St.QuestionList>
              {questions[2].list.map((el, i) => {
                return (
                  <St.ListBox key={i} onClick={onItemClick} $current={current}>
                    {el}
                  </St.ListBox>
                );
              })}
              {current === '기타' && <St.EtcInput onChange={onChagneHandler} id={2} />}
              <St.SelectButton onClick={onSubmit}>선택 완료</St.SelectButton>
            </St.QuestionList>
          </>
        )}
        {userChoice[2] !== '' && (
          <St.UserAnswer>
            {userChoice[2]}
            {count === 3 && <St.CancelBtn onClick={onCancel}>취소</St.CancelBtn>}
          </St.UserAnswer>
        )}

        {/*세 개의 질문에 답변하면 로그인 유도*/}
        {count === 3 && (
          <St.ConfirmToLogin onClick={onLogin}>
            <h3>로그인 후 진행하기</h3>
          </St.ConfirmToLogin>
        )}
      </St.QuestionMainContainer>
    </>
  );
}
