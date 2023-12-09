import React from 'react';

function KakaoChatting() {
  const handleOpenNewTab = () => {
    window.open(
      'http://pf.kakao.com/_bfxlXG/chat',
      'popup',
      'width=350, height=500, left=30, top=30, right=50, scrollbars=no,titlebar=no,status=no,resizable=no,fullscreen=no'
    );
  };
  return (
    <>
      <img src="assets/KaKao.png" onClick={handleOpenNewTab}></img>
    </>
  );
}

export default KakaoChatting;
