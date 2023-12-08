import React from 'react';
import styled from 'styled-components';
export default function Introduction() {
  return (
    <IntroductionContainer>
      <StLeftWarpper>
        <span>Capturing the</span>
        <br />
        <br />
        <span>beauty of</span>
        <span className="spanOrange">Jeju,</span>
        <p>　</p>
        <span>you are the star</span>
        <span>of the　　</span>
        <br />
        <br />
        <span className="spanSky">special moment.</span>
      </StLeftWarpper>
      <StRightWarpper>
        <span>JejuStudio는 여러분의 취향에 맞는 포토스타일을 고민하고 창조합니다.</span>
        <br />
        <span>여행의 목적, 감성, 스타일에 따라 여러분의 이야기를 최고의 모습으로</span>
        <br />
        <span> 담아내기 위해 노력하고 있습니다.</span>
        <br />
        <span>우리는 제주도의 특별하고 다양한 명소 어디든지 여러분과 함께합니다.</span>
        <span>
          푸른바다, 신비로운 돌담길, 환상적인 일출과 일몰의 순간까지 여러분이 원하는곳에서 멋진 인생사진을 남길 수
          있도록 최적의 장소를 선택해드립니다.
        </span>
        <span>예약은 간편하게 온라인으로도 가능하며, 특별한 날짜나 이벤트에 맞게 맞춤예약도 가능합니다.</span>
        <br />
        <span>JejuStudio는 여러분의 소중한 순간을 함께 나누기를 기다립니다.</span>
      </StRightWarpper>
    </IntroductionContainer>
  );
}

const IntroductionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: auto;
  width: 60%;
  height: 250px;
`;
const StLeftWarpper = styled.div`
  align-items: center;
  width: 50%;
  height: 100%;
  span {
    padding: 3px;
    color: black;
    border: none;
    padding: 10px;
    font-size: 35px;
    font-weight: 900;
  }
  .spanOrange {
    color: orange;
  }
  .spanSky {
    color: lightblue;
  }
  p {
    white-space: pre-wrap;
  }
`;
const StRightWarpper = styled.div`
  align-items: center;
  width: 60%;
  height: 100%;

  span {
    color: black;
    border: none;
    padding: 15px;
    font-size: 18px;
    font-weight: 100;
    line-height: 2;
  }
`;
