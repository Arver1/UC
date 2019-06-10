import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import store from "./store";
import {RouterList} from './router-map-list';


render(
	<Provider store={store}>
		<RouterList />
	</Provider>
	, document.getElementById('app'));

window.addEventListener('resize', (e) => {
	if (document.body.clientWidth >= 570) {
		this.setState({
			menuCount: ((document.body.clientWidth - 570) / 200 ^ 0) + 1
		});
	} else if (document.body.clientWidth < 540) {
		this.setState({
			menuCount: 0
		});
	}
});
