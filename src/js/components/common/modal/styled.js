import styled, { keyframes } from 'styled-components';
import {MAX_MODAL_WIDTH, MIN_WIDTH} from "../../styles";

const showAnimate = keyframes`
  100% {
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    padding: 30px;
    min-width: ${MIN_WIDTH};
    transform: none;
  }
`;


export const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 0;
  height: 0;
  overflow: hidden;
  background-color: rgba(0,0,0, 0.4);
  z-index: 1000;
  box-sizing: border-box;
  
  animation: ${showAnimate} 200ms linear;
  animation-fill-mode: forwards;
  // animation-direction: ${({ reverse }) => (reverse ? 'reverse' : 'normal')};
`;

export const Wrapper = styled.div`
  background-color: #fff;
  z-index: 2000;
  max-width: ${MAX_MODAL_WIDTH};
  margin: 0 auto;
  height: calc(100vh - 60px);
  position: relative;
  overflow-y: auto;
  box-sizing: border-box;
`;

export const NotificationPlace = styled.section`
  width: 100%;
  min-height: 50px;
  position: relative;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  justify-content: center;
  align-content: center;
  align-items: center;
`;
