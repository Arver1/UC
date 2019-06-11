import styled from 'styled-components';
import {
	HEADER_MOBIL_TOP_PADDING, HEADER_TABLET_TOP_PADDING, MAIN_COLOR_RED, MEDIA_DELAY,
	MEDIA_POINT_1
} from '../styles';


export const Header = styled.header`
  min-width: 270px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${MAIN_COLOR_RED};
  padding: ${HEADER_MOBIL_TOP_PADDING} 0 10px;
  background: linear-gradient(to bottom, ${MAIN_COLOR_RED} ${HEADER_TABLET_TOP_PADDING}, #fff ${HEADER_MOBIL_TOP_PADDING});
  background-size: 100% 200%;
  background-position-y: -10px;
  transition: ${MEDIA_DELAY};
  
  @media (min-width: ${MEDIA_POINT_1}) {
  	background-position-y: 0;
  	transition: ${MEDIA_DELAY};
  	padding: calc(${HEADER_TABLET_TOP_PADDING} - 8px) 0 10px;
  }
`;


export const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 10px;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
`;
