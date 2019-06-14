import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { H3 } from './styled';


@connect(({notifications}) => ({notifications}))
export class Notification extends Component {
	render(){
		const { notifications: { msg } } = this.props;
		
		return msg && createPortal(<H3 key={Math.random()}>{msg}</H3>, document.querySelector('.notification'));
	}
}
