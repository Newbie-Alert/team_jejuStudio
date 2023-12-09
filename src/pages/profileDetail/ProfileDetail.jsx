import React, { useState } from 'react';
import { useParams } from 'react-router';
import { data } from '../../shared/fakedata';
import styled from 'styled-components';
import Slider from 'react-slick';

// 스타일 수정이 필요할 시 import
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import * as St from './profileDetailStyle';

export const Styled_Slide = styled(Slider)`
  .slick-slide {
    padding: 0 30px; // space(여백)/2
  }

  .slick-list {
    width: 800px;

    margin: 20px -30px 100px -30px; // space(여백)/-2
  }
  .slick-dots {
    bottom: 120px;
  }
  .slick-dots li.slick-active button:before {
    color: white;
    font-size: 12px;
  }

  .slick-dots li button:before {
    color: white;
  }
  .slick-prev {
    z-index: 1;
    left: 30px;
  }

  .slick-next {
    right: 40px;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 0.5;
    color: white;
  }

  & img {
    height: 400px;
    &:hover {
      transform: scale(1.1, 1.1);
      transition-duration: 0.3s;
    }
    transition-duration: 0.2s;
  }
`;
function ProfileDetail() {
  const params = useParams();

  const settings = {
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    centerMode: true,
    variableWidth: true
  };

  const filteredProfile = data.find((p) => {
    return String(p.id) == params.id;
  });
  const [workVersion, setWorkVersion] = useState(false);
  return (
    <St.Container>
      <St.ContentContainer>
        <St.Title>{filteredProfile.name}</St.Title>

        <St.ProfileBox>
          <St.ProfileInfo>
            <St.ProfileImg src={filteredProfile.avatar} />
            <St.ProfileCategory>
              <span>전문분야</span>
              {filteredProfile.category.map((c, idx) => {
                return <li key={idx}>{c}</li>;
              })}
              <St.Line />
              <p>{filteredProfile.comment}</p>
              <p>contact : {filteredProfile.contact}</p>
              <St.Btn
                onClick={() => {
                  setWorkVersion(!workVersion);
                }}
              >
                {workVersion ? '슬라이드로 보기' : '작업물 한번에 보기'}
              </St.Btn>
            </St.ProfileCategory>
          </St.ProfileInfo>
        </St.ProfileBox>
        {workVersion ? (
          <St.Works>
            {filteredProfile.works.map((c, idx) => {
              return <St.WorksImg src={c} key={idx} />;
            })}
          </St.Works>
        ) : (
          <Styled_Slide {...settings}>
            {filteredProfile.works.map((c, idx) => {
              return <img src={c} key={idx} />;
            })}
          </Styled_Slide>
        )}
      </St.ContentContainer>
    </St.Container>
  );
}

export default ProfileDetail;
