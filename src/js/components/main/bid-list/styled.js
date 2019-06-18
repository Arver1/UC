import styled from 'styled-components';
import {MAIN_COLOR_DGRAY, MAIN_COLOR_RED, Roboto} from '../../styles';

export const List = styled.ul`
  padding: 0 15px;
  margin-bottom: 20px;
`;

export const ListItem = styled.li`
  background: linear-gradient(160deg, #ffffff 45%, #C8C6C7 100%);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 300px;
  margin: auto;
  
  & + & {
    margin-top: 20px;
  }
  
  & > img {
    order: -1;
    align-self: flex-start;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex-direction: column;
  width: 160px;
  text-overflow: ellipsis;
  
  & > h3 {
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: ${MAIN_COLOR_DGRAY};
    font-family: ${Roboto};
    align-self: center;
    margin-bottom: 16px;
    position: relative;
  }
  
  & > h3::before {
    content: '';
    display: block;
    position: absolute;
    width: calc(100% - 20px);
    height: 2px;
    left: 10px;
    bottom: -2px;
    border-bottom: 1px dashed ${MAIN_COLOR_DGRAY};
  }
`;

export const StyledLink = styled.a`
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: #fff;
  font-family: ${Roboto};
  background-color: ${MAIN_COLOR_RED};
  text-align: center;
  vertical-align: center;
  padding: 5px;
  text-transform: uppercase;
  border-radius: 5px;
`;
