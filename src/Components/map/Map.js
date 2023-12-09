import React, { useEffect, useState } from "react";
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

const Modal = ({ imageUrl, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <img src={imageUrl} alt="Marker" />
      </div>
    </div>
  );
};

export default function Map() {
  const [modalImageUrl, setModalImageUrl] = useState(null);

  useEffect(() => {
    mapscript();
  }, []);

  const mapscript = () => {
    // your existing mapscript logic
    // ...

    markerdata.forEach((el) => {
      const marker = new window.kakao.maps.Marker({
        map: map,
        position: new window.kakao.maps.LatLng(el.lat, el.lng),
        title: el.title,
      });

      window.kakao.maps.event.addListener(marker, "click", () => {
        setModalImageUrl(el.imageUrl);
      });
    });
  };

  const closeModal = () => {
    setModalImageUrl(null);
  };

  return (
    <MapContainer>
      <h1>이런 곳은 어떤가요?</h1>
      <MapWrapper>
        <div id="map" style={{ width: "100%", height: "100%" }}></div>
      </MapWrapper>
      {modalImageUrl && <Modal imageUrl={modalImageUrl} closeModal={closeModal} />}
    </MapContainer>
  );
}
