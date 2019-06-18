import React, { Component } from 'react';
import { RouteList } from './route-list';
import { BidList } from './bid-list';
import { Certs } from './certs';
import { StyledMain, Wrapper, Title } from './styled';
import { News } from '../common/news';
import { Reserve } from '../pages/reserve';


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


export class Main extends Component {
  state = {
    hasError: false,
  }

  static getDerivedStateFromError(e) {
    return {
      hasError: true,
    };
  }

  render() {
    const { hasError } = this.state;
    return hasError ? <Reserve /> : (
      <StyledMain>
        <Wrapper>
          <Title>
            <span>Профессиональная деятельность</span>
            <strong>должна начинаться с подтверждения оценки квалификации</strong>
          </Title>
          <RouteList data={dataRoute} />
          <BidList />
          <Certs />
          <News />
        </Wrapper>
      </StyledMain>
    );
  }
}
