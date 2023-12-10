import React, { useEffect, useState } from "react";
import * as St from './MapStyles'
import { markerdata } from "../data/markerData";



// MODAL COMPONENT
const Modal = ({ imageUrl, closeModal }) => {
  return (
    <St.ModalContainer className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}></span>
        <img src={imageUrl} alt="Marker" />
      </div>
    </St.ModalContainer>
  );
};


// MAIN COMPONENT
export default function Map() {
  // STATE
  const [modalImageUrl, setModalImageUrl] = useState(null);

  // USE EFFECT
  useEffect(() => {
    mapscript();
  }, []);

  // FUNCTIONS
  //지도를 그립니다
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

  // 모달 제어
  const closeModal = () => {
    setModalImageUrl(null);
  };

  // MAIN RETURN
  return (
    <>
      <St.RecommendTitleSection>
        <h1>이런 곳은 어떠신가요?</h1>
      </St.RecommendTitleSection>
      <St.MapContainer>
        <St.MapWrapper>
          <div id="map" style={{ width: "100%", height: "100%" }}></div>
        </St.MapWrapper>
        {modalImageUrl && <Modal imageUrl={modalImageUrl} closeModal={closeModal} />}
      </St.MapContainer>
    </>

  );
}