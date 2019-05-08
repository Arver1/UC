import React from 'react';
import {Route} from 'react-router-dom';
import {About} from './about';
import {RouteList} from "./route-list";
import {BidList} from "./bid-list";
import {Certs} from './certs'
import {Main, Wrapper, Title} from './styled';


const dataRoute = [
  {
    count: 10,
    name: 'профессиональных стандартов'
  },
  {
    count: 30,
    name: 'присваемых квалификаций'
  }
];

const Ma = () => (
  <Main>
    <Wrapper>
      <Title>
        <span>Профессиональная деятельность</span>
        <strong>должна начинаться с подтверждения оценки квалификации</strong>
      </Title>
      <RouteList data={dataRoute}/>
      <BidList />
      <Certs />
    </Wrapper>
  </Main>
);

export function PageMain(){
  return (
    <>
      <Route exact path="/" component={Ma} />
      <Route path="/about" component={About} />
      </>
  )
}