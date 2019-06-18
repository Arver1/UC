import styled from 'styled-components';
import {Link} from 'react-router-dom';
import {Roboto, MAIN_COLOR_RED, MAIN_COLOR_DGRAY} from "../../styles";


export const Section = styled.section`
  width: 300px;
  padding: 10px 0 0;
  margin: 0 auto;
`;


export const H2 = styled.h2`
  font-size: 20px;
  font-weight: 400;
  line-height: normal;
  color: ${MAIN_COLOR_DGRAY};
  font-family: ${Roboto};
  text-transform: uppercase;
`;

export const StyledLink = styled(Link)`
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  color: ${MAIN_COLOR_DGRAY};
  font-family: ${Roboto};
  display: inline-block;
  text-transform: uppercase;
  text-decoration: underline;
  margin: 0 10px 10px;
  padding-bottom: 2px;
`;

export const SVG = styled.svg`
  position: relative;
  right: -4px;
`;

export const Description = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  color: #000;
  font-family: ${Roboto};
  width: 200px;
  padding-left: 64px;
  margin: 0 0 5px;
`;

export const Time = styled.time`
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  color: #fff;
  font-family: ${Roboto};
  background-color: ${MAIN_COLOR_RED};
  padding: 2px 5px;
  border-radius: 5px;
  margin-left: 5px;
`;

export const Wrapper = styled.div`
  padding-left: 10px
  margin-bottom: 10px;
`;

export const MoreLink = styled.a`
  font-size: 10px;
  font-weight: 400;
  line-height: normal;
  color: ${MAIN_COLOR_DGRAY};
  font-family: ${Roboto};
  display: inline-block;
  text-transform: uppercase;
  text-decoration: underline;
  text-align: right;
  padding-right: 36px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 2px;
`;
