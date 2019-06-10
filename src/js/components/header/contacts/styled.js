import styled from 'styled-components';
import {HEADER_MOBIL_TOP_PADDING, MEDIA_DELAY, MEDIA_POINT_1, Roboto} from '../../styles';


export const Section = styled.section`
  position: absolute;
  width: 100%;
  left: 0;
  top: calc(-${HEADER_MOBIL_TOP_PADDING} + 7px);
  box-sizing: border-box;
  overflow: hidden;
  max-height: ${HEADER_MOBIL_TOP_PADDING};
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Number = styled.a`
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: #fff;
  font-family: ${Roboto};
  order: -2;
  text-align: left;
  display: inline-block;
  vertical-align: top;
  margin-left: 10px;
  transition: ${MEDIA_DELAY};
  
  @media (min-width: ${MEDIA_POINT_1}) {
  	font-size: 15px;
  	transition: ${MEDIA_DELAY};
  	margin-left: 20px;
  }
`;

export const Time = styled.small`
  margin: 0 10px 5px 0;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: #fff;
  font-family: ${Roboto};
  text-align: right;
  display: inline-block;
  vertical-align: top;
  order: -1;
  transition: ${MEDIA_DELAY};
  
  @media (min-width: ${MEDIA_POINT_1}) {
  	font-size: 15px;
  	transition: ${MEDIA_DELAY};
  	margin: 0 20px 5px 0;
  }
`;

export const Address = styled.p`
  margin: 20px 0 5px auto;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: #fff;
  font-family: ${Roboto};
  text-align: right;
  display: inline-block;
  vertical-align: top;
  width: 100%;
`;
