import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from '../pages/profile/Profile.jsx';
import ProfileDetail from '../pages/profileDetail/ProfileDetail.jsx';
import MainPage from '../pages/MainPage';
import GlobalStyle from '../globalStyle/GlobalStyle';
import Question from '../pages/Question/Question';
import Login from '../pages/Login/Login';
import Portfolio from '../pages/portfolio/Portfolio.jsx';
import KakaoChatting from '../components/Layout/KakaoChatting';
import Match from '../pages/Match/Match.jsx';
import styled from 'styled-components';


const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:id" element={<ProfileDetail />} />
        <Route path="/question" element={<Question />} />
        <Route path="/login" element={<Login />} />
        <Route path="/photogrpher" element={<Login />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/matching" element={<Match />}></Route>
      </Routes>
      <StKaKaoContainer>
        <KakaoChatting />
      </StKaKaoContainer>
    </BrowserRouter>
  );
};

export default Router;

// KAKAO 상담 버튼
const StKaKaoContainer = styled.div`
  position: fixed;
  right: 60px;
  bottom: 15px;
  width: 80px;
  height: 80px;
  z-index: 77;
`;