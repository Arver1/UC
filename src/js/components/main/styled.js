import styled from 'styled-components';
import { MAIN_COLOR_DGRAY, MAIN_COLOR_RED, Roboto } from '../styles';

export const StyledMain = styled.main`
  border-bottom: 1px solid ${MAIN_COLOR_RED};
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 10px;
`;

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  text-align: center;
  flex-direction: column;
  margin-bottom: 30px;
  
  & > span {
    font-size: 26px;
    font-weight: 400;
    line-height: normal;
    color: ${MAIN_COLOR_DGRAY};
    font-family: ${Roboto};
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  
  & > strong {
    font-size: 14px;
    font-weight: 400;
    line-height: normal;
    color: ${MAIN_COLOR_DGRAY};
    font-family: ${Roboto};
  }
`;
