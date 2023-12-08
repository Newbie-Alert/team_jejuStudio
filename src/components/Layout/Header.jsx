import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Header() {
  const [scrollPosition, setScrollPosition] = useState('0');
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  });

  return (
    <StContainer>
      {scrollPosition < 300 ? (
        <>
          <BrandTitle>
            <span>A Moment To Love</span>
          </BrandTitle>
          <StWrapper>
            <StHeader>
              <BrandLogo>
                <img src="assets/LOGO3_White.png" alt="" />
              </BrandLogo>
            </StHeader>
            <StHeader>
              <StHeaderButton>
                <button>예약하기</button>
                <button>작가소개</button>
                <button>장소추천</button>
              </StHeaderButton>
            </StHeader>
          </StWrapper>
        </>
      ) : (
        <>
          <ChangeBrandTitle>
            <span>A Moment To Love</span>
          </ChangeBrandTitle>
          <ChangeStWrapper>
            <ChangeStHeader>
              <ChangeBrandLogo>
                <img src="assets/LOGO3_Blue.png" alt="" />
              </ChangeBrandLogo>
            </ChangeStHeader>
            <ChangeStHeader>
              <ChangeStHeaderButton>
                <button>예약하기</button>
                <button>작가소개</button>
                <button>장소추천</button>
              </ChangeStHeaderButton>
            </ChangeStHeader>
          </ChangeStWrapper>
        </>
      )}
    </StContainer>
  );
}
export default Header;

const StContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 90px;

  box-shadow: var(--box-shadow);
`;
const BrandTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 30px;
  border: 2px solid white;
  box-shadow: var(--box-shadow);
  * {
    color: white;
  }
`;
const StWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  > div {
    cursor: pointer;
  }
  .logo {
    width: 200px;
  }
  button {
    background: transparent;
    padding: 3px;
    color: white;
    border: none;
    padding: 10px;
    font-size: 20px;
    text-shadow: 2px 4px 2px gray;
    font-weight: 700;
    cursor: pointer;
  }
`;
const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  img {
    width: 70%;
    height: 40%;
    object-fit: cover;
    cursor: pointer;
  }
`;
const BrandLogo = styled.div`
  margin-top: 50px;
  padding-left: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const StHeaderButton = styled.div`
  margin-top: 50px;
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;
// 스크롤 내리면 변경되는 스타일
const ChangeBrandTitle = styled.div`
  background-color: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 30px;
  border: 2px solid white;
  box-shadow: var(--box-shadow);
  * {
    color: white;
  }
`;
const ChangeStWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 120%;
  > div {
    cursor: pointer;
  }
  .logo {
    width: 200px;
  }
  button {
    background: transparent;
    padding: 3px;
    color: black;
    border: none;
    padding: 10px;
    font-size: 20px;
    font-weight: 800;
    cursor: pointer;
  }
`;
const ChangeStHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  img {
    width: 70%;
    height: 40%;
    object-fit: cover;
    cursor: pointer;
  }
`;
const ChangeBrandLogo = styled.div`
  margin-top: 30px;
  padding-left: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
`;

const ChangeStHeaderButton = styled.div`
  margin-top: 50px;
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
`;
