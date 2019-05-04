import React from 'react';
import {Link, Abbr} from "./styled";

export const LogoAbbr = ({title = "Межрегиональный центр оценки квалификации электроэнергетики"}) => (
  <Abbr title={title} >
    <Link href="#">
      МРЦОК
    </Link>
  </Abbr>
);


