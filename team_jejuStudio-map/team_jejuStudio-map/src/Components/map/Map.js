import React, { useEffect } from "react";
import styled from "styled-components";
import { markerdata } from "../data/markerData";

const MapContainer = styled.div`
  text-align: center;
  padding: 20px;
  background: #f0f0f0;
`;

const MapWrapper = styled.div`
  width: 100%;
  max-width: 1400px; 
  margin: 0 auto;
  height: 600px;
`;

export default function Map() {
  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(33.375842577023796, 126.5447226734622),
      level: 9,
    };

    const map = new window.kakao.maps.Map(container, options);

    markerdata.forEach((el) => {
      new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(el.lat, el.lng),
        title: el.title,
      });
    });
  };

  return (
    <MapContainer>
      <h1>이런 곳은 어떤가요?</h1>
      <MapWrapper>
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
      </MapWrapper>
    </MapContainer>
  );
}
