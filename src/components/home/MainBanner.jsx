import React, { useState } from 'react';
import * as St from './MainBannerStyles';
//이미지 슬라이더를 위한 라이브러리
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import imageData from '../imageData';

function MainBanner() {
  // STATE
  const [currentIndex, setCurrentIndex] = useState();

  // FUNCTIONS
  // 슬라이드 렌더
  const renderSlides = imageData.map((image) => {
    return (
      <div key={image.alt}>
        <img src={image.url} alt={image.alt} />
      </div>
    );
  });

  // 슬라이드 선택
  const handleChange = (index) => {
    setCurrentIndex(index);
  };

  return (
    <St.MainBannerContainer>
      <St.StWrapper>
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
      </St.StWrapper>
    </St.MainBannerContainer>
  );
}

export default MainBanner;
