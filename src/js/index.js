import React from 'react';
import { render } from 'react-dom';
import {Provider} from 'react-redux';
import store, {history} from "./store";
import {RouterList} from './router-map-list';
import {ConnectedRouter} from 'connected-react-router'


render(
	<Provider store={store}>
		<ConnectedRouter history={history}>
		<RouterList />
		</ConnectedRouter>
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
