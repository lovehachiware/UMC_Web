import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const ContentWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

export const NavbarWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
`;

export const Logo = styled.h1`
  color: #ff6347;
`;

export const NavButton = styled.button`
  background-color: #ff6347;
  border: none;
  padding: 10px;
  color: white;
  cursor: pointer;
  &:hover {
    background-color: #ff4500;
  }
`;

export const SidebarWrapper = styled.div`
  width: 250px;
  background-color: #222;
  color: white;
  height: 100vh;
  padding: 20px;
`;

export const SidebarItem = styled.div`
  margin: 20px 0;
  font-size: 20px;
`;
