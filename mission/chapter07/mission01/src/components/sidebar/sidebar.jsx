import React from 'react';
import { AiOutlineSearch} from 'react-icons/ai';
import { MdMovie} from 'react-icons/md';
import { SidebarContainer, SidebarLink, IconWrapper } from './sidebar.style';

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarLink to="/search">
        <IconWrapper>
          <AiOutlineSearch />
        </IconWrapper>
        찾기
      </SidebarLink>
      <SidebarLink to="/moviespage">
        <IconWrapper>
          <MdMovie />
        </IconWrapper>
        영화
      </SidebarLink>
    </SidebarContainer>
  );
};

export default Sidebar;
