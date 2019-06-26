import styled from 'styled-components';
import {HEADER_TABLET_WIDTH, MAIN_COLOR_DGRAY, MIXINS} from '../../styles';

export const Section = styled.section`
  ${MIXINS['flex-center']};
  margin: 0 auto 20px;
  max-width: 300px;
  
  @media(min-width: ${HEADER_TABLET_WIDTH}){
    margin: 0 auto;
  }
`;

export const Title = styled.h3`
  ${MIXINS.font('20px', 400, `${MAIN_COLOR_DGRAY}`)};
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
