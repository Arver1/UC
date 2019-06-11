import React from 'react';
import { Logo } from './logo';
import { LogoAbbr } from './abbr';
import { Menu } from './menu/menu';
import { StyledNav, MenuWrapper, Wrapper } from './styled';
import {Social} from "../../common/social";




export const Nav = () => (
	<StyledNav>
		<Wrapper>
			<Logo />
			<MenuWrapper className="menu-wrapper">
				<LogoAbbr />
				<Menu />
	      <Social/>
			</MenuWrapper>
		</Wrapper>
	</StyledNav>
);
