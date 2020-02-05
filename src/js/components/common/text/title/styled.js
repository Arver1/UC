import styled from 'styled-components';
import { MAIN_COLOR_DGRAY, MIXINS } from '../../../styles';

const h2 = styled.h2`
  ${MIXINS['flex-center']};
  text-align: center;
  flex-direction: column;
  margin: 0 0 30px 60px;
  padding-top: 30px;
  align-content: flex-start;
  align-items: flex-start;
  
  & > span {
    ${MIXINS.font('26px', 400, `${MAIN_COLOR_DGRAY}`)};
    text-transform: uppercase;
    margin-bottom: 18px;
  }
`;

export const titleMap = {
  2: h2
};
