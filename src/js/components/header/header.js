import React, {Component} from 'react';
import {Header, Wrapper} from "./styled";
import Spinner from '../spinner';
import {Title} from './title';
import {Nav} from './nav';
import {Contacts} from "./contacts";

const number = '74995830670';
const time = '8:00-20:00';
const address ='143040 МО г.Голицыно<br />Генерала Ремезова, д.6';


export class PageHeader extends Component {

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
    }, 500)
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
            <Contacts number={number} time={time} address={address}/>
          </Wrapper>
        </Header>
    )
  }
}