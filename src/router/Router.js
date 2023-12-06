import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from '../pages/MainPage';
import GlobalStyle from '../globalStyle/GlobalStyle';
import Profile from '../pages/Profile.jsx';
import ProfileDetail from '../pages/ProfileDetail.jsx';

const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:id" element={<ProfileDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
