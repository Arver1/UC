import React from 'react';
import styled from "styled-components";
import Logo from './logo';

const MainNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 0 0;
  min-height: 37px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Nav = () => {
  return (
    <MainNav>
      <Wrapper>
        <Logo />
      </Wrapper>
    </MainNav>
  )
};

export default Nav;
