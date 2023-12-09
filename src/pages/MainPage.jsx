import React, { useEffect } from 'react';
import styled from 'styled-components';
import Introduction from '../components/home/Introduction';
import MainBanner from '../components/home/MainBanner';
import Header from '../components/Layout/Header';
import Map from '../components/newMap/new/Map';
import { FadeAnimation } from '../globalStyle/GlobalAnimation';

const MapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function MainPage() {
  useEffect(() => {
    window.scrollTo({ top: true });
  }, []);

  return (
    <div>
      <StContainer>
        <Header />
        <MainBanner />
        <Introduction />
        {/* <MapContainer>
          <KAKAO />
        </MapContainer> */}
        <Map />
      </StContainer>
    </div>
  );
}

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  animation: ${FadeAnimation} 0.5s forwards;
`;
