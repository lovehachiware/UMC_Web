import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const SidebarContainer = styled.div`
  width: 200px;
  background-color: #3e3d3d;
  color: white;
  padding: 20px;
  margin: 0;  // 바깥 공백 제거
  height: 100vh;  // 화면 전체 높이로 설정
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  padding: 10px 0;
  color: white;
  text-decoration: none;

  &:hover {
    color: #ff7675;
  }
`;

export const IconWrapper = styled.span`
  margin-right: 10px;
`;
