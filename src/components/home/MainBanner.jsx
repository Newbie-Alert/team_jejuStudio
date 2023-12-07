import React, { useState } from 'react';
import styled from 'styled-components';
//이미지 슬라이더를 위한 라이브러리
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import imageData from '../imageData';

function MainBanner() {
  const renderSlides = imageData.map((image) => {
    return (
      <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
      </div>
    );
  });
  const [currentIndex, setCurrentIndex] = useState();
  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <MainBannerContainer>
      <StWrapper>
        <Carousel
          onChange={handleChange}
          showArrows={false}
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          selectedItem={imageData[currentIndex]}
          autoFocus={true}
        >
          {renderSlides}
        </Carousel>
      </StWrapper>
    </MainBannerContainer>
  );
}

export default MainBanner;

const MainBannerContainer = styled.div`
  width: 100%;
  height: 80%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const StWrapper = styled.div`
  width: 80%;
  height: 80%;
`;
