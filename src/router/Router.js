import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from '../pages/Profile.jsx';
import ProfileDetail from '../pages/ProfileDetail.jsx';
import MainPage from '../pages/MainPage';
import GlobalStyle from '../globalStyle/GlobalStyle';
import Question from '../pages/Question/Question';
import Login from '../pages/Login/Login';

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
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
