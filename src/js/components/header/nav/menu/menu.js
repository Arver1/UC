import React,{Component} from 'react';
import {createPortal} from 'react-dom';
import {Link} from "react-router-dom";
import {delay, Li, StyledLink, Ul} from "./styled";

const defaultMenuItems = Array(4).fill("Тестовый пункт меню");
defaultMenuItems.unshift("квалификации");
defaultMenuItems.push("о компании");
const EntryPointBlock = document.getElementById('app');

export class Menu extends Component {
    state = {
        checked: false
    };

    static defaultProps = {
        items: defaultMenuItems
    };

    handleClick = () => {
        if(this.timerID){
            return;
        }

        this.setState({
            checked: !this.state.checked
        });

        this.timerID = setTimeout(() => {
            this.timerID = null;
        }, delay)
    };

    componentDidUpdate(){
        if(this.state.checked){
          EntryPointBlock.className = 'limit';
        }
        else {
          EntryPointBlock.className = '';
        }
    }

    createMenu = (items = [], checked) => {
        return (
            <Ul checked={checked}>
                {Array.isArray(items) && items.map((it, index)=> <Li key={index}><StyledLink to="/qualification" onClick={this.handleClick}>{it.toUpperCase()}</StyledLink></Li>)}
            </Ul>
        )
    };

    render(){
        const {items} = this.props;
        const {checked} = this.state;
        const menu = (
            <div>
                {this.createMenu(items, checked)}
            </div>
        );
        return(
            <>
                <input type="checkbox" id="burger_menu" checked={checked} readOnly/>
                <label htmlFor="burger_menu" onClick={this.handleClick}>Открыть меню</label>
                {createPortal(menu, document.querySelector('body'))}
            </>
        )
  }
}
