import React, { Component } from 'react';
import { Header, Wrapper } from './styled';
import Spinner from '../spinner';
import { Title } from './title';
import { Nav } from './nav';
import { Contacts } from './contacts';
import { NUMBER, WORK_TIME, ADDRESS } from '../../constants/common';



export class PageHeader extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        isLoading: false,
      });
    }, 500);
  }

  render() {
    const { isLoading } = this.state;

    if (isLoading) {
      return <Spinner />;
    }

    return (
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
