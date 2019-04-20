import React, {Component} from 'react';
import styled from 'styled-components';
import Spinner from '../spinner';
import Title from './title';
import Nav from './main-nav';
import {MAIN_COLOR_RED, HEADER_MOBIL_TOP_PADDING } from '../styles';

const number = '+74995830670';
const time = 'Пн-Пт: 8:00-20:00';

const Header = styled.header`
  margin-bottom: 20px;
  border-bottom: 1px solid ${MAIN_COLOR_RED};
  padding: ${HEADER_MOBIL_TOP_PADDING} 0 10px;
  background: linear-gradient(to bottom, ${MAIN_COLOR_RED} ${HEADER_MOBIL_TOP_PADDING}, #fff ${HEADER_MOBIL_TOP_PADDING});
`;

const Wrapper = styled.div`
  max-width: 415px;
  min-width: 320px;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 10px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  position: relative;
`;

class PageHeader extends Component {

  constructor(){
    super();
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    setTimeout(()=>{
      this.setState({
        isLoading: false
      });
    }, 2000)
  }

  render(){
    const { isLoading } = this.state;

    if(isLoading) {
      return <Spinner />
    }

    return (
      <Header>
        <Wrapper>
          <Title />
          <Nav />
        </Wrapper>
      </Header>
    )
  }
}

export default PageHeader;
