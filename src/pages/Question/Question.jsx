import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import QuestionMain from '../QuestionMain/QuestionMain';

const QuestionContainer = styled.div`
  width: 100%;
  background-color: #eee;
`;

const QuestionHeader = styled.div`
  width: 100%;
  background-color: white;
  padding: 1rem 30rem;
  @media screen and (max-width: 1400px) {
    padding: 1rem 20rem;
  }
  @media screen and (max-width: 960px) {
    padding: 1rem 10rem;
  }
  @media screen and (max-width: 768px) {
    padding: 1rem 3rem;
  }
`;

const QustionTitle = styled.div`
  width: 100%;
  margin-block: 1rem;
  font-weight: 600;
`;
const QuestionProgressBarContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const QuestionProgressBar = styled.div`
  width: 100%;
  height: 5px;
  background-color: #eee;
  overflow: hidden;
  position: relative;

  &::after {
    width: 100%;
    height: 5px;
    content: '';
    background-image: linear-gradient(#142e9bff, #f4f4f7ff);
    position: absolute;
    top: 0;
    left: 0;
    transition: all 0.5s ease;
    transform: ${(props) => `translateX(${props.$percent}%)`};
  }
`;

const QuestionProgressBarPercent = styled.div`
  width: 15px;
`;

export default function Question() {
  const [progress, setProgress] = useState(-100);
  const [count, setCount] = useState(0);

  return (
    <QuestionContainer>
      <QuestionHeader>
        <QustionTitle>개인용 사진촬영</QustionTitle>
        <QuestionProgressBarContainer>
          <QuestionProgressBar $percent={progress}></QuestionProgressBar>
          <QuestionProgressBarPercent>{Math.round(count * 33.3)}%</QuestionProgressBarPercent>
        </QuestionProgressBarContainer>
      </QuestionHeader>
      <QuestionMain count={count} setCount={setCount} setProgress={setProgress} />
    </QuestionContainer>
  );
}
