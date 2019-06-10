import styled, { keyframes } from 'styled-components';
import {HEADER_MOBIL_TOP_PADDING, MAIN_COLOR_RED, MEDIA_DELAY, MEDIA_POINT_1} from '../styles';

const menuStem = keyframes`

	30% {
		bottom: 34px;
	}

  50% {
  	bottom: 4px;
  	right: 242px;
  	transform: rotate(360deg);
  }
  
  51% {
  	bottom: 4px;
  	right: 242px;
  	transform: none;
  }
  
  100% {
  	bottom: 4px;
  	right: 242px;
  	width: 0;
  	height: 0;
  }
`;

const menuLeaves = keyframes`
	100% {
		opacity: 1;
		width: 10px;
  	height: 10px;
	}
`;

export const Header = styled.header`
  min-width: 270px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${MAIN_COLOR_RED};
  padding: ${HEADER_MOBIL_TOP_PADDING} 0 10px;
  background: linear-gradient(to bottom, ${MAIN_COLOR_RED} ${HEADER_MOBIL_TOP_PADDING}, #fff ${HEADER_MOBIL_TOP_PADDING});
  transition: ${MEDIA_DELAY};
  
  @media (min-width: ${MEDIA_POINT_1}) {
  	padding-bottom: 20px;
  	transition: ${MEDIA_DELAY};
  }
`;


export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
  transition: ${MEDIA_DELAY};
  
  @media (min-width: ${MEDIA_POINT_1}) {
  	padding: 0 20px;
  	transition: ${MEDIA_DELAY};
  	
  	&::before {
  		content: '';
  		display: block;
  		position: absolute;
  		width: 13px;
  		height: 13px;
  		background-color: ${MAIN_COLOR_RED};;
  		right: 38px;
  		bottom: 28px;
  		z-index: 100;
  		animation: ${menuStem} 2s linear;
  		animation-fill-mode: forwards;
  	}
  }
  
  @media (min-width: 420px) {
  	&::after {
  		content: '';
  		display: block;
  		width: 0;
  		height: 0;
  		position: absolute;
  		transform: rotate(-45deg);
  		right: 72px;
  		bottom: 15px;
  		z-index: 100;
  		border-left: 1px solid greenyellow;
  		border-bottom: 1px solid forestgreen;
  		animation: ${menuLeaves} 1s linear;
  		animation-fill-mode: forwards;
  		animation-delay: 2s;
  		opacity: 0;
  	}
  }
`;
