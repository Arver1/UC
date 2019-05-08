import styled from 'styled-components';
import {MAIN_COLOR_DGRAY, Roboto} from "../../styles";


export const List = styled.ul`
  margin-bottom: 20px;
  padding-left: 40px;
`;

export const ListItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: ${MAIN_COLOR_DGRAY};
  font-family: ${Roboto};
  text-align: center;
  display: inline-block;
  position: relative;
  margin-bottom: 10px;
  padding-left: 25px;
  min-height: 20px;
  
  & > b {
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    color: #000;
    font-family: ${Roboto};
  }
  
  & > .icon {
    position: absolute;
    bottom: 2px;
    left: 0;
  }
`;