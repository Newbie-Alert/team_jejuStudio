import React from 'react';
import { useState } from 'react';
import * as St from './QuestionStyles';
import QuestionMain from '../QuestionMain/QuestionMain';

export default function Question() {
  // STATES
  const [progress, setProgress] = useState(-100); // progressBar의 게이지를 담당, 초기값은 -100으로 화면에 보이지 않음
  const [count, setCount] = useState(0);

  return (
    <St.QuestionContainer>
      <St.QuestionHeader>
        <St.QustionTitle>개인용 사진촬영</St.QustionTitle>
        <St.QuestionProgressBarContainer>
          <St.QuestionProgressBar $percent={progress}></St.QuestionProgressBar>
          <St.QuestionProgressBarPercent>{Math.round(count * 33.3)}%</St.QuestionProgressBarPercent>
        </St.QuestionProgressBarContainer>
      </St.QuestionHeader>
      <QuestionMain count={count} setCount={setCount} setProgress={setProgress} />
    </St.QuestionContainer>
  );
}
