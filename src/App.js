import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./page/homePage/HomePage";
import DetailPage from "./page/detailPage/DetailPage";
import HomeLayout from "./layout/HomeLayout";
import LoginPage from "./page/loginPage/LoginPage";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/detail/:idPhim" element={<DetailPage />} />
          </Route>
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
