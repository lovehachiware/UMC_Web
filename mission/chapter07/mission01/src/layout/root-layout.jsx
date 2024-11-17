import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components//navbar/navbar';
import Sidebar from '../components/sidebar/sidebar';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;   // 전체 너비 사용
  margin: 0;
  padding: 0;
`;

const MainContent = styled.div`
  flex: 1;
  padding: 20px;
  background-color: #000;  // 검정색 배경
  color: white;  // 텍스트 하얀색
  height: 100%;  // 컨텐츠가 Sidebar와 같은 높이로 맞춰지도록
`;

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <LayoutContainer>
        <Sidebar />
        <MainContent>
          <Outlet />
        </MainContent>
      </LayoutContainer>
    </div>
  );
};

export default RootLayout;
