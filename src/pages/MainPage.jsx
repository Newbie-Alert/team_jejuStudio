import React from 'react';
import styled from 'styled-components';
import Header from '../components/Layout/Header';
import Introduction from '../components/home/Introduction';
import MainBanner from '../components/home/MainBanner';
import KakaoChatting from '../components/Layout/KakaoChatting';
export default function MainPage() {
  return (
    <div>
      <StContainer>
        <Header />
        <MainBanner />
        <Introduction />
        <StKaKaoContainer>
          <KakaoChatting />
        </StKaKaoContainer>
      </StContainer>
    </div>
  );
}

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;

const StKaKaoContainer = styled.div`
  position: fixed;
  right: 60px;
  bottom: 15px;
  width: 80px;
  height: 80px;
  z-index: 77;
`;
