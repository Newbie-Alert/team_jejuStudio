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
  display: flex;
  justify-content: center;
  text-align: right;
`;

const OverlayImgBox = styled.div`
  position: absolute;
  top: 10%;
  left: 4%;
  color: #888;
  overflow: hidden;
`;

export default function KAKAO() {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(['성산', '애월', '협재', '서귀포']);
  const [clicked, setClicked] = useState();
  const [current, setCurrent] = useState();

  const positions = [
    {
      title: '성산',
      latlng: { lat: 33.4180535, lng: 126.8648302 },
      address: '제주특별자치도 서귀포시 성산읍',
      url: 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi6kGcvNuNBDssrJXXeU3vD3BjKNKaCAKCdWvrqV1JZnSrZcn-cq7IUH3QIr90DgXy4UhEC_9hJ1OWkvCtmylZNj-fH0e-LZvpHvDa-FJg3J7qb6ghzqKs3qrwLpi-LdgodNDket2NAf9duAMUnvRGfj6_igUseqClhjO1x-tu7v9m4S7FFzpgZOBx7/s1048/IMG_3684.jpg',
      page: 'https://www.google.com/search?q=%EC%84%B1%EC%82%B0&tbm=isch&ved=2ahUKEwje1ZiKq_-CAxWCdXAKHQh4Al4Q2-cCegQIABAA&oq=%EC%84%B1%EC%82%B0&gs_lcp=CgNpbWcQAzIFCAAQgAQyCAgAEIAEELEDMgUIABCABDIFCAAQgAQyBQgAEIAEMgsIABCABBCxAxCDATIOCAAQgAQQigUQsQMQgwEyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgAEANQqQpY6TtgxDxoB3AAeACAAa8BiAGhDZIBBDEuMTSYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABAMABAQ&sclient=img&ei=VMhyZd7bCYLrwQOI8InwBQ&bih=934&biw=1910'
    },
    {
      title: '애월',
      address: '제주특별자치도 제주시 애월읍 ',
      latlng: { lat: 33.4110784, lng: 126.3939276 },
      url: 'https://t1.daumcdn.net/thumb/R1280x0/?fname=http://t1.daumcdn.net/brunch/service/user/1jPF/image/ogJ53QI9LeAOPJqZ-S5uUV--2Ds.jpg',
      page: 'https://www.google.com/search?q=%EC%95%A0%EC%9B%94&tbm=isch&ved=2ahUKEwjixtaCq_-CAxXJe_UHHR3wAlUQ2-cCegQIABAA&oq=%EC%95%A0%EC%9B%94&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BAgAEAM6CAgAEIAEELEDULdpWMhwYKdxaAJwAHgBgAFxiAHQBZIBAzEuNpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=RMhyZeKUGMn31e8PneCLqAU&bih=934&biw=1910'
    },
    {
      title: '협재',
      address: '제주특별자치도 제주시 한림로',
      latlng: { lat: 33.3942945, lng: 126.2398813 },
      url: 'https://api.cdn.visitjeju.net/photomng/imgpath/201911/29/2032c09c-a4cc-445a-80e2-8b3dd11e4b56.jpg',
      page: 'https://www.visitjeju.net/kr/detail/view?contentsid=CONT_000000000500697'
    },
    {
      title: '서귀포',
      address: '제주특별자치도 서귀포시 남성중로',
      latlng: { lat: 33.2541205, lng: 126.560076 },
      url: 'https://ak-d.tripcdn.com/images/01057120008ip4o727E84_C_800_10000.jpg',
      page: 'https://www.google.com/search?q=%EC%84%9C%EA%B7%80%ED%8F%AC&tbm=isch&ved=2ahUKEwjLg7T5qv-CAxVmY_UHHWphBjgQ2-cCegQIABAA&oq=%EC%84%9C%EA%B7%80%ED%8F%AC&gs_lcp=CgNpbWcQAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6CAgAEIAEELEDOgsIABCABBCxAxCDAToOCAAQgAQQigUQsQMQgwFQ4AdYig5giw9oAnAAeAOAAdQBiAHdCJIBBTEuNy4xmAEAoAEBqgELZ3dzLXdpei1pbWewAQDAAQE&sclient=img&ei=MMhyZcurOubG1e8P6sKZwAM&bih=934&biw=1910'
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
        width: '70%',
        height: '400px'
      }}
      level={10} // 지도의 확대 레벨
    >
      {positions.map((position, index) => (
        <MapMarker
          onClick={(e) => {
            setCurrent([position]);
            setClicked(position);
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
      {current &&
        current[0]?.title === clicked?.title &&
        current?.map((position, index) => {
          return (
            <CustomOverlayMap key={position.title} position={position.latlng}>
              <Wrap $current={modal[index]} id={position.title}>
                <Info>
                  <InfoTitle className="title">
                    {position.title}
                    <CloseBtn onClick={() => setCurrent('')} title="닫기"></CloseBtn>
                  </InfoTitle>
                  <OverlayBody>
                    <div className="desc" style={{ position: `relative`, margin: `25px 0 0 80px`, height: `75px` }}>
                      <div className="ellipsis" style={{ width: '100%', fontSize: '0.8rem' }}>
                        {clicked.address}
                      </div>
                      <div>
                        <a
                          style={{ fontSize: '.9rem', textDecoration: 'none' }}
                          href={clicked.page}
                          target="_blank"
                          className="link"
                          rel="noreferrer"
                        >
                          관련 링크
                        </a>
                      </div>
                    </div>
                    <OverlayImgBox className="img">
                      <img src={position.url} width="70" height="70" alt="" />
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
