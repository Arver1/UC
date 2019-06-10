import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { MAIN_COLOR_RED, Roboto} from '../../../styles/index';


export const delay = 800;
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
        left: 0%;
    }
`;

const menuShowReverse = keyframes`
    from {
        left: 0%;
    }
    to {
        left: -100%;
    }
`;

export const Ul = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    top: 84px;
    height: calc(100vh - 84px);
    background: #E0E0E0;
    width: calc(100vw - 25px);
    animation: ${({ checked }) => (checked && menuShow || menuShowReverse)} ${delay}ms forwards;
    box-shadow: 7px 5px 20px -8px #000;
    border-top-right-radius: 5px;
`;

const animation = ({animate}) => animate ? (`${menuOpacity} ${delay}ms forwards`) : null;

export const StyledLink = styled(Link)`
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    color: #000;
    font-family: ${Roboto};
    cursor: pointer;
    box-sizing: border-box;
    animation: ${menuOpacity} 2s forwards;
    
    &:hover {
        color: ${MAIN_COLOR_RED};
        transition: all 0.3s ease;
        padding-left: ${({resetFlag = false}) => resetFlag ? "0" : "10px"};
    }
    
    &:hover::before {
        background-position: -1%;
        left: 0;
    }
    
    &::before {
        content: '';
        display: block;
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
`;

export const Li = styled.li`
	padding: 0 50px;
	margin-top: 15px;
	position: relative;
	
	&::before {
		content: '';
		display: block;
		position: absolute;
		left: 25px;
		transform: rotate(45deg);
		top: 30%;
		background-color: ${MAIN_COLOR_RED};
		width: 10px;
		height: 10px;
	}
`;

export const MainNavItems = styled.ul`
	order: -1;
	display: flex;
	flex-wrap: wrap;
	margin: 0 0 0 auto;
	padding: 0;
`;
