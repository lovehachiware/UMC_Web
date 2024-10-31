import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MoviesPage from "./pages/moviespage";
import SearchPage from "./pages/search";
import LoginPage from "./pages/login"; // 로그인 페이지 import
import SignupPage from "./pages/signup"; // 회원가입 페이지 import
import RootLayout from "./layout/root-layout";
import Home from "./pages/home";
import NowPlaying from "./pages/NowPlaying";
import Popluar from "./pages/Popular";
import TopRated from "./pages/toprated";
import Upcoming from "./pages/Upcoming";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="" element={<Home />} />
          <Route path="moviespage" element={<MoviesPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="login" element={<LoginPage />} />
          {/* 로그인 페이지 라우팅 */}
          <Route path="signup" element={<SignupPage />} />
          <Route path="movies">
            <Route path="now-playing" element={<NowPlaying />} />
            <Route path="popular" element={<Popluar />} />
            <Route path="top-rated" element={<TopRated />} />
            <Route path="upcoming" element={<Upcoming />} />
          </Route>
          {/* 회원가입 페이지 라우팅 */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
