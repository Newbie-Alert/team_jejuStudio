import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import * as St from './HeaderStyles';

function Header() {
  // STATES
  const [scrollPosition, setScrollPosition] = useState('0');
  const [isModalOn, setIsModalOn] = useState(false);

  // HOOKS
  const navi = useNavigate('/question');
  const { pathname } = useLocation();

  // FUNCTIONS
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const navigateTo = (path) => {
    navi(path);
  };

  const goHome = () => {
    navi('/');
  };

  const modalToggle = () => {
    setIsModalOn((prev) => !prev);
  };

  // USE EFFECT
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);

    return () => {
      window.removeEventListener('scroll', updateScroll);
    };
  }, []);

  // MAIN RETURN
  return (
    <St.StContainer $path={pathname}>
      {pathname === '/' && scrollPosition < 300 ? (
        <>
          <St.BrandTitle>
            <span>A Moment To Love</span>
          </St.BrandTitle>
          <St.StWrapper>
            <St.StHeader>
              <St.BrandLogo>
                <img onClick={goHome} src="assets/LOGO3_White.png" alt="" />
              </St.BrandLogo>
            </St.StHeader>
            <St.StHeader>
              <St.StHeaderButton $isModal={isModalOn}>
                <button onClick={() => navigateTo('/question')}>예약하기</button>
                <button onClick={() => navigateTo('/profile')}>작가소개</button>
                <button onClick={() => navigateTo('/portfolio')}>포트폴리오</button>
              </St.StHeaderButton>
            </St.StHeader>
          </St.StWrapper>
        </>
      ) : (
        <>
          <St.ChangeBrandTitle>
            <span>A Moment To Love</span>
          </St.ChangeBrandTitle>
          <St.ChangeStWrapper>
            <St.ChangeStHeader>
              <St.ChangeBrandLogo>
                <img onClick={goHome} src="assets/LOGO3_Blue.png" alt="" />
              </St.ChangeBrandLogo>
            </St.ChangeStHeader>
            <St.ChangeStHeader>
              <St.ChangeStHeaderButton $isModal={isModalOn}>
                <button onClick={() => navigateTo('/question')}>예약하기</button>
                <button onClick={() => navigateTo('/profile')}>작가소개</button>
                <button onClick={() => navigateTo('/portfolio')}>포트폴리오</button>
              </St.ChangeStHeaderButton>
            </St.ChangeStHeader>
          </St.ChangeStWrapper>
        </>
      )}
      <St.ButtonModalSwitch onClick={modalToggle}>{isModalOn ? '닫기' : '메뉴'}</St.ButtonModalSwitch>
    </St.StContainer>
  );
}
export default Header;
