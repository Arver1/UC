import styled from 'styled-components';
import {
  HEADER_MOBIL_TOP_PADDING, MIXINS,
} from '../../styles';


export const Section = styled.section`
  position: absolute;
  width: 100%;
  left: 0;
  top: calc(-${HEADER_MOBIL_TOP_PADDING} + 7px);
  box-sizing: border-box;
  overflow: hidden;
  max-height: ${HEADER_MOBIL_TOP_PADDING};
  ${MIXINS.flex};
`;

export const Number = styled.a`
  ${MIXINS.font('12px', 500, '#fff')};
  order: -2;
  text-align: left;
  margin-left: 10px;
  ${MIXINS['inline-block']};
`;

export const Time = styled.small`
  margin: 0 10px 5px 0;
  ${MIXINS.font('12px', 500, '#fff')};
  text-align: right;
  ${MIXINS['inline-block']};
  order: -1;
`;
