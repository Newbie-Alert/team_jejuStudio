import React from 'react';
import KAKAO from '../components/map/Kakao';
import styled from 'styled-components';
import Header from '../components/Layout/Header';
import Introduction from '../components/home/Introduction';
import MainBanner from '../components/home/MainBanner';


const MapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function MainPage() {
  return (
    <div>
      <stContainer>
        <Header />
        <MainBanner />
        <Introduction />
        <MapContainer>
          <KAKAO />
        </MapContainer>
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
