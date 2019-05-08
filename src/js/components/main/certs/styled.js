import styled from 'styled-components';
import {MAIN_COLOR_DGRAY, Roboto} from "../../styles";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  color: ${MAIN_COLOR_DGRAY};
  font-family: ${Roboto};
  text-transform: uppercase;
  text-align: center;
  margin: 0 10px 20px;
  padding: 20px 0 0; 
`;

export const Link = styled.a`
  position: relative;
  
  & + & {
    margin-left: 50px;
  }
  
  & > .icon {
    background-color: #fff;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: -6px;
  }
`;