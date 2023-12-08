import { BrowserRouter, Route, Routes } from "react-router-dom"
import MainPage from "../pages/MainPage"
import GlobalStyle from "../globalStyle/GlobalStyle"


const Router = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router