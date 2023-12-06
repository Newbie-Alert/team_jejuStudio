import React from 'react';
import { useParams } from 'react-router';
import { data } from '../shared/fakedata';
import styled from 'styled-components';
import Slider from 'react-slick';

// 스타일 수정이 필요할 시 import
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProfileBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;
const ProfileImg = styled.div`
  width: 150px;
  height: 190px;
  background-image: url(${(props) => props.src});
  background-position: center;
  background-size: cover;
`;
const ProfileCategory = styled.ul`
  font-size: 20px;
  & li {
    font-size: 15px;
  }
`;
const ProfileInfo = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  gap: 20px;
`;
const Title = styled.h1`
  margin: 30px;
  font-size: 25px;
  font-weight: 600;
`;

export const Styled_Slide = styled(Slider)`
  .slick-list {
    width: 300px;
  }
`;
function ProfileDetail() {
  const params = useParams();

  const settings = {
    // dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
    adaptiveHeight: true,
    autoplay: true
  };

  const filteredProfile = data.find((p) => {
    return p.id == params.id;
  });

  return (
    <Container>
      <Title>{filteredProfile.name}</Title>
      <ProfileBox>
        <ProfileImg src={filteredProfile.avatar} />
        <ProfileInfo>
          <ProfileCategory>
            카테고리
            {filteredProfile.category.map((c, idx) => {
              return <li key={idx}>{c}</li>;
            })}
          </ProfileCategory>
          <p>{filteredProfile.comment}</p>
          <p>contact : {filteredProfile.contact}</p>
        </ProfileInfo>
        <Styled_Slide {...settings}>
          {filteredProfile.works.map((c, idx) => {
            return <img src={c} key={idx} />;
          })}
        </Styled_Slide>
      </ProfileBox>
      <div></div>
    </Container>
  );
}

export default ProfileDetail;
