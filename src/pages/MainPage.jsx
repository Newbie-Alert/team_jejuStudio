import React from 'react';
import styled from 'styled-components';
import Header from '../components/Layout/Header';
import Introduction from '../components/home/Introduction';
import MainBanner from '../components/home/MainBanner';
export default function MainPage() {
  return (
    <div>
      <stContainer>
        <Header />
        <MainBanner />
        <Introduction />
      </stContainer>
    </div>
  );
}

const stContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
`;
