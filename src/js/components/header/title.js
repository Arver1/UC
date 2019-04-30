import React from 'react';
import styled from 'styled-components';
import {Roboto, MAIN_COLOR_GRAY, MAIN_COLOR_RED} from "../styles";


const H1 = styled.h1`
  position: absolute;
  bottom: 0;
  flex-grow: 1;
  padding-left: 41px;
  font-size: 9px;
  font-weight: 500;
  line-height: normal;
  font-family: ${Roboto}; 
  color: ${MAIN_COLOR_GRAY};
  
  & > mark {
    background: none;
    color: ${MAIN_COLOR_RED};
  }
`;

export const Title = () => (
  <H1>
    <mark>М</mark>еж<mark>р</mark>егиональный <mark>ц</mark>ентр<mark> о</mark>ценки <mark>к</mark>валификации
  </H1>
);
