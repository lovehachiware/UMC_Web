import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavbarContainer = styled.div`
  background-color: #3b3a3a;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;  // 바깥 공백 제거
  width: 100%;  // 전체 너비로 설정
`;

export const Loginlink = styled(Link)`
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #252424;
  }
`;

export const Logo = styled(Link)`
  font-size: 24px;
  color: #e74c3c;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #ff7675;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const Button = styled(Link)`
  background-color: #e74c3c;
  color: white;
  padding: 10px 15px;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ff7675;
  }
`;
