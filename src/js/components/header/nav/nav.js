import React from 'react';
import { Logo } from './logo';
import { LogoAbbr } from './abbr';
import { Menu } from './menu/menu';
import { StyledNav, MenuWrapper, Wrapper } from './styled';




export const Nav = () => (
  <StyledNav>
  <Wrapper>
      <Logo />
      <MenuWrapper className="menu-wrapper">
  <LogoAbbr />
  <Menu />
			</MenuWrapper>
		</Wrapper>
	</StyledNav>
);
