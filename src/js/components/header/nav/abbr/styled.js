import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MAIN_COLOR_DGRAY, MIXINS } from '../../../styles/index';


export const StyledLink = styled(Link)`
  ${MIXINS.font('26px', 600, `${MAIN_COLOR_DGRAY}`)};
  padding-left: 10px;
  cursor: pointer;
`;

export const Abbr = styled.abbr`
  order: -2;
`;
