import React, { Component } from 'react';
import { Header, Wrapper } from './styled';
import Spinner from '../spinner';
import { Title } from './title';
import { Nav } from './nav';
import { Contacts } from './contacts';
import { NUMBER, WORK_TIME, ADDRESS } from '../../constants/common';


export class PageHeader extends Component {
  state = {
    isLoading: false,
  };
  
  render() {
    const { isLoading } = this.state;
    return isLoading ? <Spinner /> : (
      <Header>
        <Wrapper>
          <Title />
          <Nav />
          <Contacts number={NUMBER} time={WORK_TIME} address={ADDRESS} />
        </Wrapper>
      </Header>
    );
  }
}
