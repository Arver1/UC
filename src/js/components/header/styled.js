import styled from 'styled-components';
import {
  HEADER_MOBIL_TOP_PADDING, HEADER_TABLET_TOP_PADDING, HEADER_TABLET_WIDTH,
  MAIN_COLOR_RED, MIN_WIDTH,
  MIXINS,
} from '../styles';

export const Header = styled.header`
  min-width: ${MIN_WIDTH};
  border-bottom: 1px solid ${MAIN_COLOR_RED};
  padding: ${HEADER_MOBIL_TOP_PADDING} 0 10px;
  background: linear-gradient(to bottom, ${MAIN_COLOR_RED} ${HEADER_TABLET_TOP_PADDING}, #fff ${HEADER_MOBIL_TOP_PADDING});
  background-size: 100% 200%;
  background-position-y: -10px;
  position: relative;
  
  @media (min-width: ${HEADER_TABLET_WIDTH}){
    padding: ${HEADER_MOBIL_TOP_PADDING} 0 2px;
    
    &::after {
      content: '';
      display: block;
      height: 1px;
      position: absolute;
      width: 100%;
      bottom: 26px;
      background-color: ${MAIN_COLOR_RED};
    }
  }
`;

export const Wrapper = styled.div`
  ${MIXINS.flex};
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
`;
