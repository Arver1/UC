import styled from 'styled-components';
import {
  HEADER_TABLET_WIDTH,
  MAIN_COLOR_RED,
  MIXINS,
} from '../../styles';


export const Wrapper = styled.div`
  ${MIXINS.flex};
`;

export const MenuWrapper = styled.div`
  ${MIXINS.flex};
  align-content: center;
  align-items: center;
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
  
  @media (min-width: ${HEADER_TABLET_WIDTH}) {
    label {
      display: none;
    }
  }
`;

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 10px 0 0;
  min-height: 37px;
`;
