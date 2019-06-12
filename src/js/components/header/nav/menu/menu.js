import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import {
	delay, Li, StyledLink, Section, MainNavItems, Address,UL
} from './styled';
import { defaultMenuItems } from '../../../../constants/menu-items';
import {MEDIA_POINT_2} from "../../../styles";
import {Social} from "../../../common/social";


const EntryPointBlock = document.getElementById('app');
const address = '143040 МО г.Голицыно Генерала Ремезова, д.6';

export class Menu extends Component {
	state = {
		checked: false,
		menuCount: 0
	};

	static defaultProps = {
		items: defaultMenuItems,
	};

	componentDidMount() {
		window.addEventListener('resize', (e) => {
			if(document.body.clientWidth >= 630) {
				if(document.body.clientWidth >= MEDIA_POINT_2.slice(0, -2)) {
					this.setState({
						menuCount: ((document.body.clientWidth - 630) / 150) + 2
					});
				} else
				this.setState({
					menuCount: ((document.body.clientWidth - 630)/ 150)+ 1
				});
			} else if(document.body.clientWidth < 630) {
				this.setState({
					menuCount: 0
				});
			}
		});
		if (document.body.clientWidth >= 630) {
			if (document.body.clientWidth >= MEDIA_POINT_2.slice(0, -2)) {
				this.setState({
					menuCount: ((document.body.clientWidth - 630) / 150) + 2
				});
			} else
				this.setState({
					menuCount: ((document.body.clientWidth - 630) / 150) + 1
				});
		} else if (document.body.clientWidth < 630) {
			this.setState({
				menuCount: 0
			});
		}
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
			{Array.isArray(items) && items.map((it, index) => <Li resetFlag={resetFlag} key={index}><StyledLink resetFlag={resetFlag} to={it.url} onClick={handleClick || this.handleClick}>{it.name.toUpperCase()}</StyledLink></Li>).slice(0, count)}
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
			<Section checked={checked}>
				<UL>
					{this.createMenu(items)}
				</UL>
				<Social />
			</Section>
		);
		return (
			<>
				<input type="checkbox" id="burger_menu" checked={checked} readOnly />
				<label htmlFor="burger_menu" onClick={this.handleClick}>Открыть меню</label>
				{createPortal(menu, document.querySelector('body'))}
				{menuCount ? (
					<MainNavItems>
						{this.createMenu(items, menuCount, true, () => {
						})}
					</MainNavItems>
				) : null}
				</>
		);
	}
}
