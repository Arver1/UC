import styled from 'styled-components';
import { MAIN_COLOR_DGRAY, Roboto } from '../../styles';


export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: ${MAIN_COLOR_DGRAY};
  font-family: ${Roboto};
  display: inline-block;
  position: relative;
  margin-bottom: 10px;
  padding-left: 35px;
  min-height: 20px;
  width: 280px;
  box-sizing: border-box;
  text-overflow: ellipsis;
  vertical-align: middle;
  
  & > b {
    font-size: 14px;
    font-weight: 500;
    line-height: normal;
    color: #000;
    font-family: ${Roboto};
    vertical-align: middle;
  }
  
  & > .icon {
    position: absolute;
    left: 0;
    bottom: 2px;
  }
`;
