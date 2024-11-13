import React, { useEffect, useState } from 'react';
import { NavbarContainer, Logo, ButtonContainer, Button, Loginlink } from './navbar.style';
import { useNavigate } from 'react-router-dom'; // 리다이렉트를 위한 useNavigate
import axios from 'axios';

const Navbar = () => {
  const [user, setUser] = useState(null); // 사용자 정보 상태
  const navigate = useNavigate(); // 리다이렉트를 위한 훅

  useEffect(() => {
    const fetchUser = async () => {
      const token = localStorage.getItem('accessToken'); // Access Token 확인
      if (!token) return; // 토큰이 없으면 로그인 상태가 아님

      try {
        const response = await axios.get('http://localhost:3000/user/me', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUser(response.data); // 사용자 정보 저장
      } catch (error) {
        console.error('사용자 정보를 불러오는 중 오류 발생:', error);
        setUser(null); // 오류 발생 시 사용자 정보 초기화
      }
    };

    fetchUser(); // 컴포넌트 마운트 시 사용자 정보 요청
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('accessToken'); // Access Token 삭제
    localStorage.removeItem('refreshToken'); // Refresh Token 삭제
    setUser(null); // 사용자 정보 초기화
    alert('로그아웃 되었습니다.');
    navigate('/'); // 로그아웃 후 홈으로 리다이렉트
  };

  return (
    <NavbarContainer>
      <Logo to="/">YONGCHA</Logo>
      <ButtonContainer>
        {user ? ( // 로그인 상태에 따라 다른 UI 렌더링
          <>
            <p>{user.email.split('@')[0]}님 반가워요!</p>
            <Button as="button" onClick={handleLogout}>로그아웃</Button>
          </>
        ) : (
          <>
            <Loginlink to="/login">로그인</Loginlink>
            <Button to="/signup">회원가입</Button>
          </>
        )}
      </ButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
