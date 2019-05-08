import React from 'react';
import {StyledLink, Abbr} from "./styled";

export const LogoAbbr = ({title = "Межрегиональный центр оценки квалификации электроэнергетики"}) => (
  <Abbr title={title} >
    <StyledLink to="/">
      МРЦОК
    </StyledLink>
  </Abbr>
);


