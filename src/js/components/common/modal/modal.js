import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import { Scrollbars } from 'react-custom-scrollbars';
import routeMap from './route-map';
import { Section, Wrapper, NotificationPlace } from './styled';
import { closeModal } from './action';
import { Header } from './modal-parts';
import { limitApp } from '../../../AC/actions';
import {FULL_LIMIT} from '../../../constants';

@connect(({modal = {}}) => ({component: modal.modalName}), {limitApp, closeModal})
export class Modal extends Component {
	
	state = {
		reverse: false
	};
	
	componentDidUpdate() {
		const { component, limitApp} = this.props;
		if (component) {
      limitApp(FULL_LIMIT)
		} else {
      limitApp(0)
		}
	}
	
	handleClick = () => {
		this.setState({
			reverse: true
		})
	};
	
  render() {
    const form = routeMap[this.props.component] || null;
	  return form && createPortal((
	  	<Section reverse={this.state.reverse} className="modal">
			  <Wrapper>
			  <Header wait={500} onClick={this.handleClick} title={form.title}/>
					<Scrollbars style={{height: 'calc(100% - 48px)'}}>
				  <NotificationPlace className="notification">
						{form.notification}
					</NotificationPlace>
				  {form.component}
					</Scrollbars>
					<div style={{height: '50px'}} />
			  </Wrapper>
		  </Section>), document.body)
  }
}
