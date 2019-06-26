import styled from 'styled-components';
import {
  HEADER_TABLET_WIDTH, MAIN_COLOR_DGRAY, MAIN_COLOR_RED, MIXINS, Roboto,
} from '../styles';

export const StyledMain = styled.main`
  border-bottom: 1px solid ${MAIN_COLOR_RED};
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 20px 10px 0;
`;

export const Title = styled.h2`
  ${MIXINS['flex-center']};
  flex-wrap: wrap;
  text-align: center;
  flex-direction: column;
  margin-bottom: 30px;
  
  & > span {
    ${MIXINS.font('26px', 400, `${MAIN_COLOR_DGRAY}`)};
    ${MIXINS['inline-block']};
    text-transform: uppercase;
    margin-bottom: 20px;
    max-width: 350px;
    
    @media(min-width: ${HEADER_TABLET_WIDTH}){
      max-width: 100%;
    }
  }
  
  & > strong {
    ${MIXINS['inline-block']};
    ${MIXINS.font('14px', 400, `${MAIN_COLOR_DGRAY}`)};;
    max-width: 350px;
    
    @media(min-width: ${HEADER_TABLET_WIDTH}){
      max-width: 100%;
    }
  }
`;

export const StyledDiv = styled.div`
  ${MIXINS.flex};
  margin-bottom: 20px;
  padding: 0 10px;
`;

export const About = styled.blockquote`
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
`;
