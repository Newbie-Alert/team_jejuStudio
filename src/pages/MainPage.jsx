import React from 'react';
import KAKAO from '../components/map/Kakao';
import styled from 'styled-components';

const MapContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export default function MainPage() {
  return (
    <MapContainer>
      <KAKAO />
    </MapContainer>
  );
}
