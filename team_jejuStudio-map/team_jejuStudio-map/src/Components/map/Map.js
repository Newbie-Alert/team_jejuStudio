import React, { useEffect } from "react";
import { markerdata } from "../data/markerData";


  

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

    //map
    const map = new window.kakao.maps.Map(container, options);
    
    markerdata.forEach((el) => {
      // 마커를 생성합니다
      new window.kakao.maps.Marker({
        //마커가 표시 될 지도
        map: map,
        //마커가 표시 될 위치
        position: new window.kakao.maps.LatLng(el.lat, el.lng),
        //마커에 hover시 나타날 title
        title: el.title,
      });
    });
  };

  return <div id="map" style={{ width: "1400px", height: "800px" }}></div>;
}