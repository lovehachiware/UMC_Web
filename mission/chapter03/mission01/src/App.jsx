import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SearchPage from "./pages/search";
import MoviesPage from './pages/moviespage.jsx';
import LoginPage from "./components/login/login.jsx"; // 로그인 페이지 import
import SignupPage from "./pages/signup"; // 회원가입 페이지 import
import RootLayout from "./layout/root-layout";
import Home from "./pages/home";
import NowPlaying from "./pages/NowPlaying";
import Popluar from "./pages/Popular";
import TopRated from "./pages/toprated";
import Upcoming from "./pages/Upcoming";
import MovieDetail from "./pages/DetailPage/MovieDetail";

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
            <Route path="/movies/:movieId" element={<MovieDetail />} />
          </Route>
          {/* 회원가입 페이지 라우팅 */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
