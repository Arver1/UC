import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MAIN_COLOR_RED, MIN_WIDTH, Roboto } from '../styles';


export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 10px 2px;
`;

export const StyledFooter = styled.footer`
  background: ${MAIN_COLOR_RED};
  width: 100%;
  min-width: ${MIN_WIDTH};
  margin: auto 0 0;
`;

export const StyledLink = styled(Link)`
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  color: #fff;
  font-family: ${Roboto};
  border-bottom: 1px dashed #fff;
`;

export const WrapperLink = styled.div`
  width: 280px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Span = styled.span`
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  color: #fff;
  font-family: ${Roboto};
  display: inline-block;
  margin-bottom: 5px;
`;

export const CopyRight = styled.p`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  font-size: 8px;
  font-weight: 400;
  line-height: normal;
  color: #fff;
  font-family: ${Roboto};
`;


export const CopyRightLink = styled(Link)`
  font-size: 8px;
  font-weight: 500;
  line-height: normal;
  color: #fff;
  font-family: ${Roboto};
  padding: 0 2px;
`;
