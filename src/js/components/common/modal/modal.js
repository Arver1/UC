import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { connect } from 'react-redux';
import routeMap from './route-map';
import { Section, Wrapper } from './styled';
import { closeModal } from "./action";

const EntryPointBlock = document.getElementById('app');
@connect(({modal = {}}) => ({component: modal.modalName}), {closeModal})
export class Modal extends Component {
	
	componentDidUpdate() {
		if (this.props.component) {
			EntryPointBlock.className = 'limit';
		} else {
			EntryPointBlock.className = '';
		}
	}
	
  render() {
    const form = routeMap[this.props.component] || null;
	  return form && createPortal((<Section><Wrapper>{form}<button onClick={()=>this.props.closeModal()}>close</button></Wrapper></Section>), document.body)
  }
}
