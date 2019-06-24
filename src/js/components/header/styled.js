import styled from 'styled-components';
import {
  HEADER_MOBIL_TOP_PADDING, HEADER_TABLET_TOP_PADDING, MAIN_COLOR_RED, MEDIA_DELAY,
  MIXINS
} from '../styles';


export const Header = styled.header`
  min-width: 270px;
  border-bottom: 1px solid ${MAIN_COLOR_RED};
  padding: ${HEADER_MOBIL_TOP_PADDING} 0 10px;
  background: linear-gradient(to bottom, ${MAIN_COLOR_RED} ${HEADER_TABLET_TOP_PADDING}, #fff ${HEADER_MOBIL_TOP_PADDING});
  background-size: 100% 200%;
  background-position-y: -10px;
  transition: ${MEDIA_DELAY};
`;


export const Wrapper = styled.div`
  ${MIXINS.flex};
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 10px;
  position: relative;
`;
