import styled, { keyframes } from 'styled-components';
import { NavLink } from 'react-router-dom';
import {MAIN_COLOR_RED, MIXINS, HEADER_TABLET_WIDTH, HEADER_DESKTOP_WIDTH} from '../../../styles';


export const delay = 500;
const menuOpacity = keyframes`
  0% {
    opacity: 0;
  }
  
  100% {
    opacity: 1;
  }
`;
const menuShow = keyframes`
    from {
        left: -100%;
    }
    to {
        left: 0;
    }
`;

const menuShowReverse = keyframes`
    from {
        left: 0;
    }
    to {
        left: -100%;
    }
`;
export const Section = styled.section`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  position: absolute;
  z-index: 1000;
  top: 84px;
  height: calc(100vh - 84px);
  background: #E0E0E0;
  width: 82vw;
  left: -100%;
  animation: ${({ checked, menuCount }) => (menuCount && (checked && menuShow || menuShowReverse))} ${delay}ms forwards;
  box-shadow: 7px 5px 20px -8px #000;
  border-top-right-radius: 5px;
`;

export const UL = styled.ul`
  margin-bottom: 50px;
`;

export const StyledLink = styled(NavLink)`
    ${MIXINS['inline-block']};
    position: relative;
    width: ${({ resetFlag }) => (resetFlag ? 'auto' : '100%')};
    ${MIXINS.font()};
    font-size: ${({ resetFlag }) => (resetFlag ? '12px' : '16px')};
    font-weight: ${({ resetFlag }) => (resetFlag ? 500 : 400)};
    cursor: pointer;
    box-sizing: border-box;
    animation: ${menuOpacity} 2s forwards;
    
    &:hover {
        color: ${MAIN_COLOR_RED};
        transition: all 0.3s ease;
        padding-left: ${({ resetFlag = false }) => (resetFlag ? '0' : '10px')};
    }
    
    &:hover::before {
        background-position: -1%;
        left: 0;
    }
    
    &::before {
        content: '';
        display: ${({ resetFlag }) => (resetFlag ? 'none' : 'block')};
        position: absolute;
        bottom: -5px;
        width: 100%;
        height: 1px;
        background: linear-gradient(to right, transparent 50%, ${MAIN_COLOR_RED} 50%);
        background-position: 100%;
        background-size: 200% 100%;
        transition: all 1s ease;
        }
    
    &:active {
      color: ${MAIN_COLOR_RED};
    }
    
    @media (min-width: 750px) {
      font-size: 15px;
      font-weight: 400;
    }
`;

export const Li = styled.li`
  margin-top: ${({ resetFlag }) => (resetFlag ? '5px' : '15px')};
  position: relative;
  padding: ${({ resetFlag }) => (resetFlag ? '0 5px' : '0 50px')};
  
  &::before {
    content: '';
    display: block;
    position: absolute;
    left: ${({ resetFlag }) => (resetFlag ? '-7px' : '20px')};
    transform: rotate(45deg);
    top: ${({ resetFlag }) => (resetFlag ? '4px' : '30%')};
    background-color: ${MAIN_COLOR_RED};
    width:  ${({ resetFlag }) => (resetFlag ? '5px' : '8px')};
    height: ${({ resetFlag }) => (resetFlag ? '5px' : '8px')};
  }
  
  @media (min-width: 750px) {
    &::before {
      top: 5px;
      width:  6px;
      height: 6px;
    }
  }
  
  @media (min-width: ${HEADER_DESKTOP_WIDTH}){
    margin-right: 20px;
    
    &::before {
      left: -10px;
    }
  }
`;

export const StyledUl = styled.ul`
  display: none;
  @media (min-width: ${HEADER_TABLET_WIDTH}){
    ${MIXINS.flex};
    justify-content: space-around;
    width: 100%;
    margin-left: -15px;
    margin-top: 32px;
    overflow: hidden;
  }
  
  @media (min-width: ${HEADER_DESKTOP_WIDTH}){
    justify-content: flex-start;
    margin-left: 5px;
    overflow: visible;
  }
`;

export const SocialWrapper = styled.div`
  display: none;
  width: 120px;
  box-sizing: border-box;
  overflow: hidden;
  position: absolute;
  right: 0;
  top: 15px;
  @media (min-width: ${HEADER_TABLET_WIDTH}){
    display: block;
  }
  
  @media (min-width: ${HEADER_DESKTOP_WIDTH}){
    top: auto;
    bottom: -3px;
  }
`;
