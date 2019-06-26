import styled from 'styled-components';
import MIXINS from '../../styles/mixins';
import { HEADER_DESKTOP_WIDTH, MAIN_COLOR_GRAY, MAIN_COLOR_RED  } from '../../styles';

export const H1 = styled.h1`
  position: absolute;
  top: 38px;
  flex-grow: 1;
  padding-left: 41px;
  ${MIXINS.font('9px', 500, `${MAIN_COLOR_GRAY}`)};
  
  & > mark {
    background: none;
    color: ${MAIN_COLOR_RED};
  }
  
  @media (min-width: ${HEADER_DESKTOP_WIDTH}) {
    top: 44px;
    padding-left: 61px;
    font-size: 11px;
  }
`;
