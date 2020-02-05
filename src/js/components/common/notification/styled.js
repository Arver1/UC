import styled, { keyframes } from 'styled-components';
import {MAIN_COLOR_DGRAY, MAIN_WARNING_COLOR, Roboto} from '../../styles';


const showNotice = keyframes`
  100% {
    opacity: 0;
  }
`;

export const H3 = styled.h3`
  width: 100%;
  background-color: ${MAIN_WARNING_COLOR};
  text-align: center;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: ${MAIN_COLOR_DGRAY};
  font-family: ${Roboto};
  padding: 10px 5px;
  opacity: 1;
  animation: ${showNotice} 100ms linear;
  animation-delay: 2s;
  animation-fill-mode: forwards;
`;
