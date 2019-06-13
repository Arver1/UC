import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import routeMap from './route-map';
import { Section, Wrapper } from './styled';
import { closeModal } from "./action";
import {Header} from "./modal-parts";


const EntryPointBlock = document.getElementById('app');
@connect(({modal = {}}) => ({component: modal.modalName}), {closeModal})
export class Modal extends Component {
	
	state = {
		reverse: false
	};
	
	componentDidUpdate() {
		if (this.props.component) {
			EntryPointBlock.className = 'limit';
		} else {
			EntryPointBlock.className = '';
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
	  	<Section reverse={this.state.reverse}>
			  <Wrapper>
			  <Header wait={500} onClick={this.handleClick} title={form.title}/>
				  {form.component}
			  </Wrapper>
		  </Section>), document.body)
  }
}
