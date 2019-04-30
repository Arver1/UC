import React from 'react';
import styled from 'styled-components';
import {MAIN_COLOR_DGRAY, Roboto} from "../styles";


const Link = styled.a`
  font-size: 26px;
  font-weight: 600;
  line-height: normal;
  font-family: ${Roboto}; 
  color: ${MAIN_COLOR_DGRAY};
  padding-left: 10px;
  cursor: pointer;
`;

const Abbr = styled.abbr`
  order: -1;
`;

export const LogoAbbr = ({title = "Межрегиональный центр оценки квалификации электроэнергетики"}) => (
  <Abbr title={title} >
    <Link href="#">
      МРЦОК
    </Link>
  </Abbr>
);


