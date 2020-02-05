import styled from 'styled-components';
import { MAIN_COLOR_DGRAY, MAIN_COLOR_RED, Roboto, MIXINS, HEADER_DESKTOP_WIDTH } from '../../styles';

export const Quote = styled.blockquote`
  margin: -20px 0 0;
  padding: 0 60px;
  position: relative;
  font-size: 14px;
  font-weight: 400;
  line-height: normal;
  color: ${MAIN_COLOR_DGRAY};
  font-family: ${Roboto};
  
  &::before {
    content: '';
    display: block;
    position: absolute;
    width: 3px;
    height: calc(100% + 20px);
    background: #860809;
    top: -10px;
    left: 42px;
  }
`;

export const Link = styled.a`
  ${MIXINS.font('13px', 500, `${MAIN_COLOR_RED}`)};
  border-bottom: 1px dashed ${MAIN_COLOR_RED};
`;

export const Wrapper = styled.div`
    max-width: 680px;
    padding: 18px 0 0;
    
    @media (min-width: ${HEADER_DESKTOP_WIDTH}) {
        margin: 0 auto 0 150px;
    }
`;

export const Paragraph = styled.p`
    ${MIXINS.font('14px', 400, `${MAIN_COLOR_DGRAY}`)};
    max-width: 680px;
    text-align: left;
    margin: 0 0 18px;
`;
