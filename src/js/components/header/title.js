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
`;

const Mark = styled.mark`
  background: none;
  color: ${MAIN_COLOR_RED};
`;

const Title = () => (
  <H1>
    <Mark>М</Mark>еж<Mark>р</Mark>егиональный <Mark>ц</Mark>ентр<Mark> о</Mark>ценки <Mark>к</Mark>валификации
  </H1>
);


export default Title;
