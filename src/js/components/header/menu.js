import React,{Component} from 'react';
import {createPortal} from 'react-dom';
import styled, {keyframes} from 'styled-components';
import {MAIN_COLOR_GRAY, MAIN_COLOR_RED, Roboto} from '../styles'
const defaultMenuItems = Array(5).fill("Тестовый пункт меню");

const delay = 800;
const menuShow = keyframes`
    from {
        left: -100%;
    }
    to {
        left: 0%;
    }
`;

const menuShowReverse = keyframes`
    from {
        left: 0%;
    }
    to {
        left: -100%;
    }
`;

const Ul = styled.ul`
    display: flex;
    justify-content: flex-start;
    flex-direction: column;
    position: absolute;
    top: 84px;
    height: calc(${()=> {const doc = document.querySelector('body');
    const max = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight,
    );
    console.log('max', document.height);
    return max+'px';
    }} - 84px);
    background: #E0E0E0;
    width: calc(100vw - 25px);
    animation: ${({checked}) => (checked && menuShow || menuShowReverse)} ${delay}ms forwards;
    box-shadow: 7px 5px 20px -8px #000;
    border-top-right-radius: 5px;
`;

const A = styled.a`
    display: inline-block;
    vertical-align: top;
    position: relative;
    width: 100%;
    font-size: 16px;
    font-weight: 400;
    line-height: normal;
    color: #000;
    font-family: ${Roboto};
    cursor: pointer;
    box-sizing: border-box;
    
    &:hover {
        color: ${MAIN_COLOR_RED};
        transition: all 0.3s ease;
        padding-left: 10px;
    }
    
    &:hover::before {
        background-position: 0%;
        left: 0;
    }
    
    &::before {
        content: '';
        display: block;
        position: absolute;
        bottom: -5px;
        width: 100%;
        height: 1px;
        background: linear-gradient(to right, transparent 50%, ${MAIN_COLOR_RED} 50%);
        background-position: 100%;
        background-size: 200% 100%;
        transition: all 1s ease;
    }
`;

const Li = styled.li`
    padding: 0 50px;
    margin-top: 15px;
`;

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
        console.log(this.doc)
        return (
            <Ul checked={checked} doc={this.doc}>
                {Array.isArray(items) && items.map((it, index)=> <Li key={index}><A>{it}</A></Li>)}
            </Ul>
        )
    };

    render(){
        const {items} = this.props;
        const {checked} = this.state;
        const menu = this.createMenu(items, checked);
        return(
            <>
                <input type="checkbox" id="burger_menu" checked={checked} readOnly/>
                <label htmlFor="burger_menu" onClick={this.handleClick}>Открыть меню</label>
                {createPortal(menu, document.querySelector('body'))}
            </>
        )
  }
}
