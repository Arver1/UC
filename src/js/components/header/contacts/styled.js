import styled from 'styled-components';
import { HEADER_MOBIL_TOP_PADDING, Roboto } from '../../styles';


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
`;

export const Time = styled.small`
  margin: 0 0 5px;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: #fff;
  font-family: ${Roboto};
  text-align: right;
  display: inline-block;
  vertical-align: top;
  order: -1;
  margin-right: 10px;
`;

export const Address = styled.p`
  margin: 0 0 5px auto;
  font-size: 12px;
  font-weight: 500;
  line-height: normal;
  color: #fff;
  font-family: ${Roboto};
  text-align: right;
  display: inline-block;
  vertical-align: top;
  margin-top: 20px;
  width: 100%;
`;
