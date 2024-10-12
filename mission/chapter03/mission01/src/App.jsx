import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviesPage from './pages/moviespage';
import SearchPage from './pages/search';
import LoginPage from './pages/login';  // 로그인 페이지 import
import SignupPage from './pages/signup';  // 회원가입 페이지 import
import RootLayout from './layout/root-layout';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="moviespage" element={<MoviesPage />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="login" element={<LoginPage />} />  {/* 로그인 페이지 라우팅 */}
          <Route path="signup" element={<SignupPage />} />  {/* 회원가입 페이지 라우팅 */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
