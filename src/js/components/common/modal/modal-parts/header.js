import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Wrapper, H2, Button } from './styled';
import {closeModal} from "../action";


@connect(null, {closeModal})
export class Header extends Component {
	
	state = {
		hidden: true
	};
	
	componentDidMount(){
		const {wait = 500} = this.props;
		this.timerId = setTimeout(() => {
			this.setState({
				hidden: false
			})
		}, wait)
	}
	
	
	render(){
		const { hidden } = this.state;
		const { title = 'Форма для подачи заявки физического лица и ИП', closeModal } = this.props;
		
		return hidden ? null :
			<Wrapper>
				<H2>
					{title}
				</H2>
				<Button onClick={() => {
					closeModal();
					// this.props.onClick();
				}} />
			</Wrapper>
	}
}
