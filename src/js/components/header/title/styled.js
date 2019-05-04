import styled from 'styled-components';
import {Roboto, MAIN_COLOR_GRAY, MAIN_COLOR_RED} from "../../styles/index";

export const H1 = styled.h1`
  position: absolute;
  bottom: 0;
  flex-grow: 1;
  padding-left: 41px;
  font-size: 9px;
  font-weight: 500;
  line-height: normal;
  font-family: ${Roboto}; 
  color: ${MAIN_COLOR_GRAY};
  
  & > mark {
    background: none;
    color: ${MAIN_COLOR_RED};
  }
`;