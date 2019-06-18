import styled from 'styled-components';
import { Roboto, MAIN_COLOR_RED } from '../../styles';


export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  font-size: 60px;
  font-weight: 500;
  line-height: normal;
  color: ${MAIN_COLOR_RED};
  font-family: ${Roboto};
  text-transform: uppercase;
`;
