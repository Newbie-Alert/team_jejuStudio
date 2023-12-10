import React, { useEffect } from 'react';
import styled from 'styled-components';
import Introduction from '../components/home/Introduction';
import MainBanner from '../components/home/MainBanner';
import Header from '../components/Layout/Header';
import Map from '../components/newMap/new/Map';
import { FadeAnimation } from '../globalStyle/GlobalAnimation';

const StContainer = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  flex-direction: column;
  animation: ${FadeAnimation} 0.5s forwards;
`;

export default function MainPage() {
  useEffect(() => {
    window.scrollTo({ top: true });
  }, []);

  return (
    <div>
      <Header />
      <StContainer>
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
