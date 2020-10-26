import React, {Component} from 'react';
import {connect} from 'react-redux'
import {List, ListItem, Wrapper, StyledLink} from './styled';
import {showModal} from "../../common";
import {noop} from "../../../constants";

@connect(null, {showModal})
export class BidList extends Component {

  handleClickU = (e) => {
    e.preventDefault();
    const {showModal = noop} = this.props;

    showModal('bid_form_u');
  };

  handleClickF = (e) => {
    e.preventDefault();
    const {showModal = noop} = this.props;

    showModal('bid_form_f');
  };

  render(){

    return (
      <List>
        <ListItem>
          <Wrapper>
            <h3>Физические лица и ИП</h3>
            <StyledLink href="#req_indiv" title="недоступно" onClick={this.handleClickF}>Подать заявку</StyledLink>
          </Wrapper>
          <img src="/src/img/worker@1x.png" srcSet="/src/img/worker@2x.png 2x" width="139" height="200"
               alt="Изображение сотрудника" title="Изображение сотрудника"/>
        </ListItem>
        <ListItem>
          <Wrapper>
            <h3>Юридические лица</h3>
            <StyledLink href="#req_entity" title="Подать заявку как юридическое лицо" onClick={this.handleClickU}>Подать заявку</StyledLink>
          </Wrapper>
          <img src="/src/img/manager@1x.png" srcSet="/src/img/manager@2x.png 2x" width="138" height="200"
               alt="Изображение начальника"
               title="Изображение начальника"/>
        </ListItem>
      </List>
    )
  }
};
