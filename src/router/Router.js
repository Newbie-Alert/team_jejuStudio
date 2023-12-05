import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"
import GlobalStyle from "../globalStyle/GlobalStyle"
import Question from "../pages/Question/Question"
import Login from "../pages/Login/Login"


const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/question" element={<Question />} />
        <Route path="/login" element={<Login />} />
        <Route path="/photogrpher" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router