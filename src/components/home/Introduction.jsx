import React from 'react';
import styled from 'styled-components';
import KakaoChatting from '../Layout/KakaoChatting';
export default function Introduction() {
  return (
    <IntroductionContainer>
      <StWarpper>
        <div>12월8일 Update예정</div>
      </StWarpper>
      <StWarpper>
        <div>12월8일 Update예정</div>
      </StWarpper>
      <KakaoChatting />
    </IntroductionContainer>
  );
}

const IntroductionContainer = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  margin: auto;
  width: 70%;
  height: 250px;
`;
const StWarpper = styled.div`
  border: 2px solid green;
  display: flex;
  align-items: center;
  width: 50%;
  height: 100%;
`;
