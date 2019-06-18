import React from 'react';
import { Title } from '../../common';
import { Div } from './styled';
import { Logo } from '../../header/nav/logo';

export const NotFound = () => (
  <>
    {Title('Страница не найдена')}
    <Div>
      4
      <Logo width={55} height={55} />
      4
    </Div>
  </>
);
