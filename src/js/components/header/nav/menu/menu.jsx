import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPortal } from 'react-dom';
import {
  delay, Li, StyledLink, Section, UL, StyledUl, SocialWrapper
} from './styled';
import { defaultMenuItems } from '../../../../constants/menu-items';
import {Social} from "../../../common/social";
import { FULL_LIMIT } from "../../../../constants/common";
import { limitApp} from "../../../../AC/actions";
import {noop} from "../../../../constants";
import {MAIN_COLOR_RED} from "../../../styles";


@connect(null, {limitApp})
export class Menu extends Component {
  state = {
    checked: false,
    menuCount: 0
  };

  static defaultProps = {
    items: defaultMenuItems,
  };
  
  componentDidUpdate(){
    if(!this.state.menuCount) {
      this.setState({
        menuCount: 1
      })
    }
  }
  
  
  handleClick = () => {
    const { limitApp = noop } = this.props;
    const { checked } = this.state;
    
    if (this.timerID) {
      return;
    }
    
    if(checked) {
      limitApp(0);
    } else {
      limitApp(FULL_LIMIT);
    }
    this.setState({
      checked: !checked,
    });
    
    this.timerID = setTimeout(() => {
      this.timerID = null;
    }, delay);
  };

  createMenu = (items = [], resetFlag = false, handleClick ,count = items.length) => (
    <>
      {Array.isArray(items) && items.map((it, index) =>
        <Li key={index} resetFlag={resetFlag}>
          <StyledLink activeStyle={{color: `${MAIN_COLOR_RED}`}} resetFlag={resetFlag} to={it.url} onClick={handleClick || this.handleClick}>
            {it.name.toUpperCase()}
          </StyledLink>
        </Li>).slice(0, count)}
    </>
  );
  
  createMainNavItem = (items = [], menuCount) => (
    <>
      {Array.isArray(items)}
    </>
  );

  render() {
    const { items } = this.props;
    const { checked, menuCount } = this.state;
    const menu = (
      <Section checked={checked} menuCount={menuCount}>
        <UL>
          {this.createMenu(items)}
        </UL>
        <Social />
      </Section>
    );
    
    const EntryPointBlock = document.getElementById('app');
    return (
      <>
        <input type="checkbox" id="burger_menu" checked={checked} readOnly />
        <label htmlFor="burger_menu" onClick={this.handleClick}>Открыть меню</label>
        {createPortal(menu, EntryPointBlock)}
        <StyledUl>{this.createMenu(items, true, noop)}</StyledUl>
        <SocialWrapper><Social size={20} resetPadding/></SocialWrapper>
      </>
    );
  }
}
