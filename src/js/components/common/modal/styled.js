import styled, { keyframes } from 'styled-components';

const showAnimate = keyframes`
  100% {
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    padding: 30px;
  }
`;


export const Section = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  overflow: hidden;
  background-color: rgba(0,0,0, 0.4);
  z-index: 1000;
  box-sizing: border-box;
  
  animation: ${showAnimate} 500ms linear;
  animation-fill-mode: forwards;
  // animation-direction: ${({ reverse }) => (reverse ? 'reverse' : 'normal')};
`;

export const Wrapper = styled.div`
  background-color: #fff;
  z-index: 2000;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  position: relative;
`;
