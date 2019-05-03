import React from 'react';
import styled from "styled-components";
import Logo from './logo';
import {LogoAbbr} from "./abbr";
import {MAIN_COLOR_RED} from "../styles";
import {Menu} from './menu';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-grow: 1;
  
  input {
    display: none;
  }
  
  input:checked ~ .items{
    display: block;
    position: absolute;
    left: 0;
    top: 58px;
    height: 200vh;
    width: calc(100vw - 25px);
  }

  label {
    display: block;
    font-size: 0;
    width: 30px;
    height: 3px;
    position: relative;
    webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    background: linear-gradient(to right,${MAIN_COLOR_RED} 60%, transparent 60%, transparent 70%, ${MAIN_COLOR_RED} 70%);
    cursor: pointer;
    box-shadow:
      0 -8px 0 ${MAIN_COLOR_RED},
      0 8px 0 ${MAIN_COLOR_RED};
  }

  label::after {
    content: "";
    display: block;
    position: absolute;
    background-color: transparent;
    width: 30px;
    height: 14px;
    top: -6.5px;
    left: 0;
  }

  input:checked ~ label {
    background: transparent;
    box-shadow: none;
    outline: none;
    -webkit-touch-callout:none;                /* prevent callout to copy image, etc when tap to hold */
    -webkit-text-size-adjust:none;             /* prevent webkit from resizing text to fit */
    -webkit-tap-highlight-color:rgba(0,0,0,0); /* prevent tap highlight color / shadow */
    -webkit-user-select:none;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    height: 14px;
    margin: 6px 0 0;
  }

  input:checked ~ label::before,
  input:checked ~ label::after {
    content: "";
    display: block;
    position: absolute;
    background-color: ${MAIN_COLOR_RED};
    width: 30px;
    height: 3px;
    top: 4px;
    left: 0;
    transform-origin: center;
  }

  input:checked ~ label::before {
    transform: rotate(-45deg);
  }

  input:checked ~ label::after {
    transform: rotate(45deg);
  }
  
  
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 0 0;
  min-height: 37px;
`;

export const Nav = () => {
  return (
      <StyledNav>
        <Wrapper>
          <Logo />
          <MenuWrapper>
            <LogoAbbr />
            <Menu />
          </MenuWrapper>
        </Wrapper>
      </StyledNav>
  )
};

