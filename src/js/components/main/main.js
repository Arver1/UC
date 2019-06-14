import React from 'react';
import { RouteList } from './route-list';
import { BidList } from './bid-list';
import { Certs } from './certs';
import { StyledMain, Wrapper, Title } from './styled';


const dataRoute = [
  {
    count: 10,
    name: ' профессиональных стандартов',
  },
  {
    count: 30,
    name: 'присваемых квалификаций',
  },
];


export const Main = () => (
  <StyledMain>
    <Wrapper>
      <Title>
        <span>Профессиональная деятельность</span>
        <strong>должна начинаться с подтверждения оценки квалификации</strong>
      </Title>
      <RouteList data={dataRoute} />
      <BidList />
      <Certs />
    </Wrapper>
  </StyledMain>
);
