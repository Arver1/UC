import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MAIN_COLOR_RED, MAIN_COLOR_DGRAY, MIXINS, HEADER_TABLET_WIDTH} from '../../styles';


export const Section = styled.section`
  width: 300px;
  padding: 10px 0 0;
  margin: 0 auto 20px;
  
  @media(min-width: ${HEADER_TABLET_WIDTH}) {
    width: auto;
     padding: 10px 25px 0;
  }
`;


export const H2 = styled.h2`
  ${MIXINS.font('20px', 400, `${MAIN_COLOR_DGRAY}`)};
  text-transform: uppercase;
`;

export const StyledLink = styled(Link)`
  ${MIXINS.font('10px', 400, `${MAIN_COLOR_DGRAY}`)};
  ${MIXINS['inline-block']};
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
  ${MIXINS.font('12px', 400)};
  width: 200px;
  padding-left: 64px;
  margin: 0 0 5px;
`;

export const Time = styled.time`
  ${MIXINS.font('10px', 500, '#fff')};
  background-color: ${MAIN_COLOR_RED};
  padding: 2px 5px;
  border-radius: 5px;
  margin-left: 5px;
`;

export const Wrapper = styled.div`
  padding-left: 10px;
  margin-bottom: 10px;
`;

export const MoreLink = styled.a`
  ${MIXINS.font('10px', 400, `${MAIN_COLOR_DGRAY}`)};
  ${MIXINS['inline-block']};
  text-transform: uppercase;
  text-decoration: underline;
  text-align: right;
  padding-right: 36px;
  width: 100%;
  box-sizing: border-box;
  margin: 0 0 2px;
`;

export const UL = styled.ul`
  @media(min-width: ${HEADER_TABLET_WIDTH}) {
    ${MIXINS.flex};
  }
`;
