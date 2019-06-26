import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { HEADER_DESKTOP_WIDTH, MAIN_COLOR_DGRAY, MIXINS } from '../../../styles';


export const StyledLink = styled(Link)`
  ${MIXINS.font('26px', 600, `${MAIN_COLOR_DGRAY}`)};
  padding-left: 10px;
  cursor: pointer;
  
  @media (min-width: ${HEADER_DESKTOP_WIDTH}) {
    font-size: 32px;
  }
`;

export const Abbr = styled.abbr`
  order: -2;
`;
