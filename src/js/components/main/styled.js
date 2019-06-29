import styled from 'styled-components';
import {
  HEADER_DESKTOP_WIDTH,
  HEADER_TABLET_WIDTH, MAIN_COLOR_DGRAY, MAIN_COLOR_RED, MIXINS,
} from '../styles';

export const StyledMain = styled.main`
  border-bottom: 1px solid ${MAIN_COLOR_RED};
  
   @media(min-width: ${HEADER_TABLET_WIDTH}){
     flex-grow: 1;
  }
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 10px 0;
  
  @media(min-width: ${HEADER_TABLET_WIDTH}){
    max-width: 880px;
  }
  
  @media(min-width: ${HEADER_DESKTOP_WIDTH}){
    max-width: none;
  }
`;

export const Title = styled.h2`
  ${MIXINS['flex-center']};
  text-align: center;
  flex-direction: column;
  margin-bottom: 30px;
  
  & > span {
    ${MIXINS.font('26px', 400, `${MAIN_COLOR_DGRAY}`)};
    ${MIXINS['inline-block']};
    text-transform: uppercase;
    margin-bottom: 20px;
    max-width: 350px;
  }
  
  & > strong {
    ${MIXINS['inline-block']};
    ${MIXINS.font('14px', 400, `${MAIN_COLOR_DGRAY}`)};;
    max-width: 350px;
  }
  
  @media(min-width: ${HEADER_TABLET_WIDTH}){
    & > span,
    & > strong {
      max-width: 100%;
    }
  }
  
  @media(min-width: ${HEADER_DESKTOP_WIDTH}){
    & > span {
      margin-bottom: 5px;
    }
  }
`;

export const WrapperTitle = styled.div`
  @media(min-width: ${HEADER_DESKTOP_WIDTH}){
    ${MIXINS['flex-center']};
  }
`;

export const StyledDiv = styled.div`
  ${MIXINS.flex};
  margin-bottom: 20px;
  padding: 0 10px;
`;

export const About = styled.blockquote`
  display: none;
  width: 300px;
  box-sizing: border-box;
  overflow: hidden;
  margin: 20px auto 0;
  padding: 0 0 0 50px;
  position: relative;
  ${MIXINS.font('12px', 400)};
  
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 3px;
    height: calc(100% - 34px);
    background: #860809;
    top: 44px;
    left: 30px;
  }
  
   @media(min-width: 668px){
     display: block;
   }
  
   @media(min-width: ${HEADER_TABLET_WIDTH}){
     width: calc(100% - 300px);
   }
  
   @media(min-width: ${HEADER_DESKTOP_WIDTH}){
     flex-wrap: nowrap;
     ${MIXINS.font('14px', 400)};
   }
`;
