import React from 'react';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
function Header() {
  const navi = useNavigate('/question');
  const navigateTo = (path) => {
    navi(path);
  };

  return (
    <StContainer>
      <BrandTitle>
        <span>enjoy jeju island</span>
      </BrandTitle>
      <StWrapper>
        <StHeader>
          <BrandLogo>
            <p>JeJuStudio</p>
          </BrandLogo>
        </StHeader>
        <StHeader>
          <StHeaderButton>
            <button onClick={() => navigateTo('/question')}>예약하기</button>
            <button onClick={() => navigateTo('/profile')}>작가소개</button>
            <button>장소추천</button>
          </StHeaderButton>
        </StHeader>
      </StWrapper>
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
  border: 2px solid orange;
  box-shadow: var(--box-shadow);
  * {
    color: black;
  }
`;
const BrandTitle = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 20px;
  border: 2px solid orange;
  box-shadow: var(--box-shadow);
  * {
    color: black;
  }
`;
const StWrapper = styled.div`
  border: 2px solid orange;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 1280px;
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
    color: #ff5b22;
    border: none;
    padding: 10px;
    font-size: 15px;
    font-weight: 700;
    border-radius: 5px;
    cursor: pointer;
  }
`;
const StHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
  cursor: pointer;
  p {
    font-size: 15px;
  }
  img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 50%;
    cursor: pointer;
  }
`;
const BrandLogo = styled.div`
  padding-left: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  border: 1px solid orange;
`;

const StHeaderButton = styled.div`
  padding-right: 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 5rem;
  border: 1px solid orange;
`;
