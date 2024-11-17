import React from 'react';
import { NavbarContainer, Logo, ButtonContainer, Button, Loginlink } from './navbar.style';
import { useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();

  // 사용자 정보 API 호출 함수
  const fetchUserInfo = async () => {
    const token = localStorage.getItem('accessToken');
    if (!token) throw new Error('No Access Token');

    const response = await axios.get('http://localhost:3000/user/me', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  };

  // react-query로 사용자 정보 가져오기
  const { data: user, isError, isLoading } = useQuery({
    queryKey: ['user'],
    queryFn: fetchUserInfo,
    retry: false, // 실패 시 재시도하지 않음
    onError: () => {
      console.error('사용자 정보를 불러오지 못했어요...ㅠㅠ 당신 누구얏!!!');
    },
  });

  const handleLogout = () => {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    navigate('/');
  };

  if (isLoading) {
    return <p>로딩 중...입니닷</p>;
  }

  return (
    <NavbarContainer>
      <Logo to="/">YONGCHA</Logo>
      <ButtonContainer>
        {user ? (
          <>
            <p>{user.email.split('@')[0]}님 반갑띠예!</p>
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
