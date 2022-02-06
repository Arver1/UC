import React from 'react';
import { Title } from '../../common';
import { Paragraph, Wrapper } from './styled';

export const DriveWay = () => (
  <>
    {Title('Схема проезда')}
    <Wrapper>
    <Paragraph>
      <b>Адрес офиса</b>
      : 143040, Российская Федерация, Московская область, Одинцовский район, г. Голицыно, бульвар Генерала Ремезова, д.6., пом. 1., офис 4
    </Paragraph>
    <img src="/src/img/map_1.jpg" width="100%" style={{maxHeight: "560px"}} />
    <img src="/src/img/map_2.jpg" width="100%" style={{maxHeight: "560px"}} />
    <img src="/src/img/map_3.jpg" width="100%" style={{maxHeight: "560px"}} />
    <img src="/src/img/map_4.jpg" width="100%" style={{maxHeight: "560px"}} />
    </Wrapper>
  </>
);
