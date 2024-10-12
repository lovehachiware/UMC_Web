import React from 'react';
import { NavbarContainer, Logo, ButtonContainer, Button, Loginlink } from './navbar.style';

const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo to="/">YONGCHA</Logo>
      <ButtonContainer>
        <Loginlink to="/login">로그인</Loginlink>
        <Button to="/signup">회원가입</Button>
      </ButtonContainer>
    </NavbarContainer>
  );
};

export default Navbar;
