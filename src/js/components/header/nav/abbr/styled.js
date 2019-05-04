import styled from 'styled-components';
import {MAIN_COLOR_DGRAY, Roboto} from "../../../styles/index";


export const Link = styled.a`
  font-size: 26px;
  font-weight: 600;
  line-height: normal;
  font-family: ${Roboto}; 
  color: ${MAIN_COLOR_DGRAY};
  padding-left: 10px;
  cursor: pointer;
`;

export const Abbr = styled.abbr`
  order: -1;
`;