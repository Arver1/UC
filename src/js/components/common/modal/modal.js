import React, { Component } from 'react';
import { connect } from 'react-redux';
import routeMap from './route-map'


@connect(({modal = {}}) => ({component: modal.modalName}))
export class Modal extends Component {
  render() {
    const form = routeMap[this.props.component] || null;
    return <div>{form}</div>
  }
}
