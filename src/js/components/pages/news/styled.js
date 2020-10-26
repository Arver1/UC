import styled from 'styled-components';
import {HEADER_DESKTOP_WIDTH, MAIN_COLOR_DGRAY, Roboto} from '../../styles';

export const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    
    @media (min-width: ${HEADER_DESKTOP_WIDTH}) {
        flex-direction: row;
        justify-content: flex-start;
    }
`;

export const NewsWrapper = styled.div`
    max-width: 680px;
    padding: 18px 0 0;
    margin: 0 0 0 60px;
    
    @media (min-width: ${HEADER_DESKTOP_WIDTH}) {
        margin: -32px 0 0;
        padding: 0;
    }
`;

export const Quote = styled.blockquote`
  margin: -32px 0 0;
  max-width: 500px;
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
