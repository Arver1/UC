import React from 'react';
import styled, { keyframes } from 'styled-components';
import { MAIN_COLOR_RED } from '../styles';

const Container = styled.div`
  width: 100%;
  height: 37px;
  text-align: center;
`;

const cssloadSpin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Wheel = styled.div`
  width: 30px;
  height: 30px;
  margin: 0 auto;
  border: 2px solid ${MAIN_COLOR_RED};
  border-radius: 50%;
  border-left-color: transparent;
  border-right-color: transparent;
  animation: ${cssloadSpin} 1775ms infinite linear;
`;

function Spinner(){
  return (
    <>
      <Wheel />
    </>
  )
}

export default Spinner;
