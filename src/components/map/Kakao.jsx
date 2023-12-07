import React, { useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import styled from 'styled-components';

const Wrap = styled.div`
  position: absolute;
  left: 0;
  bottom: 40px;
  width: 288px;
  height: 132px;
  margin-left: -144px;
  text-align: left;
  overflow: hidden;
  font-size: 12px;
  font-family: 'Malgun Gothic', dotum, '돋움', sans-serif;
  line-height: 1.5;
  display: ${(props) => (props.$current !== props.id ? 'display:block' : 'display:none')};
`;

const Info = styled.div`
  width: 286px;
  height: 120px;
  border-radius: 5px;
  border-bottom: 2px solid #ccc;
  border-right: 1px solid #ccc;
  overflow: hidden;
  background: #fff;

  &:nth-child(1) {
    border: 0;
    box-shadow: 0px 1px 2px #888;
  }
`;

const InfoTitle = styled.div`
  padding: 5px 0 0 10px;
  height: 30px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  font-size: 1rem;
  font-weight: bold;
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: #888;
  width: 17px;
  height: 17px;
  background: url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/overlay_close.png');

  &:hover {
    cursor: pointer;
  }
`;

const OverlayBody = styled.div`
  position: relative;
  overflow: hidden;
`;

const OverlayImgBox = styled.div`
  position: relative;
  top: 6px;
  left: 5px;
  width: 73px;
  height: 71px;
  border: 1px solid #ddd;
  border-radius: 50%;
  overflow: hidden;
  color: #888;
  overflow: hidden;
`;

export default function KAKAO() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(['성산', '애월', '협재', '서귀포']);

  const positions = [
    {
      title: '성산',
      latlng: { lat: 33.4180535, lng: 126.8648302 },
      url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6kGcvNuNBDssrJXXeU3vD3BjKNKaCAKCdWvrqV1JZnSrZcn-cq7IUH3QIr90DgXy4UhEC_9hJ1OWkvCtmylZNj-fH0e-LZvpHvDa-FJg3J7qb6ghzqKs3qrwLpi-LdgodNDket2NAf9duAMUnvRGfj6_igUseqClhjO1x-tu7v9m4S7FFzpgZOBx7/s1048/IMG_3684.jpg'
    },
    {
      title: '애월',
      latlng: { lat: 33.4110784, lng: 126.3939276 },
      url: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/ogJ53QI9LeAOPJqZ-S5uUV--2Ds.jpg'
    },
    {
      title: '협재',
      latlng: { lat: 33.3942945, lng: 126.2398813 },
      url: 'https://api.cdn.visitjeju.net/photomng/imgpath/201911/29/2032c09c-a4cc-445a-80e2-8b3dd11e4b56.jpg'
    },
    {
      title: '서귀포',
      latlng: { lat: 33.2541205, lng: 126.560076 },
      url: 'https://ak-d.tripcdn.com/images/01057120008ip4o727E84_C_800_10000.jpg'
    }
  ];

  console.log(modal);
  return (
    <Map // 지도를 표시할 Container
      center={{
        // 지도의 중심좌표
        lat: 33.3846216,
        lng: 126.5534925
      }}
      style={{
        // 지도의 크기
        width: '100%',
        height: '400px'
      }}
      level={10} // 지도의 확대 레벨
    >
      {positions.map((position, index) => (
        <MapMarker
          onClick={(e) => {
            setModal(e.Gb);
            setIsOpen((prev) => !prev);
          }}
          key={`${position.title}-${position.latlng}`}
          position={position.latlng} // 마커를 표시할 위치
          image={{
            src: 'https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png', // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35
            } // 마커이미지의 크기입니다
          }}
          title={position.title} // 마커의 타이틀, 마커에 마우스를 올리면 타이틀이 표시됩니다
        />
      ))}

      {isOpen &&
        positions.map((positions, index) => {
          return (
            <CustomOverlayMap key={positions.title} position={positions.latlng}>
              <Wrap $current={modal[index]} id={positions.title}>
                <Info>
                  <InfoTitle className="title">
                    {positions.title}
                    <CloseBtn onClick={() => setIsOpen((prev) => !prev)} title="닫기"></CloseBtn>
                  </InfoTitle>
                  <OverlayBody>
                    <OverlayImgBox className="img">
                      <img
                        onClick={() => setIsOpen((prev) => !prev)}
                        src={positions.url}
                        width="70"
                        height="70"
                        style={{ borderRadius: '50%' }}
                        alt=""
                      />
                    </OverlayImgBox>
                  </OverlayBody>
                </Info>
              </Wrap>
            </CustomOverlayMap>
          );
        })}
    </Map>
  );
}
