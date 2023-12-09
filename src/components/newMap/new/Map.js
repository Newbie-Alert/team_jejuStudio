import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { markerdata } from "../data/markerData";

const MapContainer = styled.div`
  width: 80%;
  margin: auto;
  text-align: center;
  padding: 20px;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const MapWrapper = styled.div`
  width: 100%;
  max-width: 1280px; 
  margin: 0 auto;
  height: 550px;
`;

const ModalContainer = styled.div`
  width: 100%;
  & img {
    max-width: 100%;
  }
`

const RecommendTitleSection = styled.div`
  width: 100%;
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
  background-color: #5bc3ebff;
  font-weight: 600;
  color: white;
`;



const Modal = ({ imageUrl, closeModal }) => {
  return (
    <ModalContainer className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}></span>
        <img src={imageUrl} alt="Marker" />
      </div>
    </ModalContainer>
  );
};


export default function Map() {
  const [modalImageUrl, setModalImageUrl] = useState(null);

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
    <>
      <RecommendTitleSection>
        <h1>이런 곳은 어떠신가요?</h1>
      </RecommendTitleSection>
      <MapContainer>
        <MapWrapper>
          <div id="map" style={{ width: "100%", height: "100%" }}></div>
        </MapWrapper>
        {modalImageUrl && <Modal imageUrl={modalImageUrl} closeModal={closeModal} />}
      </MapContainer>
    </>

  );
}