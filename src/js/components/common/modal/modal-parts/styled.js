import styled, { keyframes } from 'styled-components';
import { MAIN_COLOR_DGRAY, MAIN_COLOR_RED, Roboto } from '../../../styles';


export const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-content: center;
  align-items: center;
  padding: 20px 0 10px;
  background: linear-gradient(to bottom, ${MAIN_COLOR_RED} 10px, #fff 10px);
  border-bottom: 1px solid ${MAIN_COLOR_RED};
  min-height: 10px;
  box-sizing: border-box;
`;

export const H2 = styled.h2`
  order: -2;
  flex-grow: 1;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  line-height: normal;
  color: ${MAIN_COLOR_DGRAY};
  font-family: ${Roboto};
  text-transform: uppercase;
  box-sizing: border-box;
  margin: 0 10px;
`;

export const Button = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 16px;
  width: 15px;
  margin-right: 10px;
  position: relative;
  
  &::before,&::after {
    content: '';
    display: block;
    width: 20px;
    height: 3px;
    background-color: ${MAIN_COLOR_RED};
    position: absolute;
    left: -2px;
    top: 6px;
  }
  
  &::before {
    transform: rotate(45deg);
  }
  
  &::after {
    transform: rotate(-45deg);
  }
`;
