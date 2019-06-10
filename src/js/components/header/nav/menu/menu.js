import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import {
	delay, Li, StyledLink, Ul, MainNavItems
} from './styled';
import { defaultMenuItems } from '../../../../constants/menu-items';


const EntryPointBlock = document.getElementById('app');

export class Menu extends Component {
	state = {
		checked: false,
		menuCount: ((document.body.clientWidth - 570) / 200 ^ 0) + 1
	};

	static defaultProps = {
		items: defaultMenuItems,
	};

	componentDidMount() {
		window.addEventListener('resize', (e) => {
			if(document.body.clientWidth >= 570) {
				this.setState({
					menuCount: ((document.body.clientWidth - 570)/ 200 ^ 0) + 1
				});
			} else if(document.body.clientWidth < 540) {
				this.setState({
					menuCount: 0
				});
			}
		});
	}

	componentDidUpdate() {
		if (this.state.checked) {
			EntryPointBlock.className = 'limit';
		} else {
			EntryPointBlock.className = '';
		}
	}

	handleClick = () => {
		console.log('click')
		if (this.timerID) {
			return;
		}

		this.setState({
			checked: !this.state.checked,
		});

		this.timerID = setTimeout(() => {
			this.timerID = null;
		}, delay);
	};

	createMenu = (items = [], count = items.length, resetFlag, handleClick) => (
		<>
			{Array.isArray(items) && items.map((it, index) => <Li key={index}><StyledLink resetFlag={resetFlag} to={it.url} onClick={handleClick || this.handleClick}>{it.name.toUpperCase()}</StyledLink></Li>).slice(0, count)}
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
			<div>
				<Ul checked={checked}>
					{this.createMenu(items)}
				</Ul>
  </div>
		);
		return (
			<>
				<input type="checkbox" id="burger_menu" checked={checked} readOnly />
				<label htmlFor="burger_menu" onClick={this.handleClick}>Открыть меню</label>
				{createPortal(menu, document.querySelector('body'))}
				<MainNavItems>
					{this.createMenu(items, menuCount, true, ()=>{})}
				</MainNavItems>
				</>
		);
	}
}
