import styled from 'styled-components';
import { MAIN_COLOR_DGRAY, Roboto } from '../../styles';

export const Quote = styled.blockquote`
  margin: -32px 0 0;
  max-width: 790px;
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
