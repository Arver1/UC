import React,{Component} from 'react';
import {createPortal} from 'react-dom';
import {delay, Li, A, Ul} from "./styled";

const defaultMenuItems = Array(5).fill("Тестовый пункт меню");


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

        this.timerID = setTimeout(()=>{
            this.timerID = null;
        },delay)
    };


    createMenu = (items = [], checked) => {
        return (
            <Ul checked={checked} doc={this.doc}>
                {Array.isArray(items) && items.map((it, index)=> <Li key={index}><A>{it}</A></Li>)}
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
