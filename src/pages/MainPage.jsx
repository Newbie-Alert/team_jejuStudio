import React from 'react';
import KAKAO from '../components/map/Kakao';
import styled from 'styled-components';
import Introduction from '../components/home/Introduction';
import MainBanner from '../components/home/MainBanner';
import Header from '../components/Layout/Header';

const MapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function MainPage() {
  return (
    <div>
      <StContainer>
        <Header />
        <MainBanner />
        <Introduction />
        <MapContainer>
          <KAKAO />
        </MapContainer>
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
