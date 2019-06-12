import React from 'react';
import {Route} from 'react-router-dom';
import {defaultMenuItems} from './constants/menu-items';
import {Main} from './components/main';
import {Header} from './components/header';
import {Modal} from './components/common';

const getPages = menuItems => {
	return menuItems.map(it => <Route path={it.url} component={it.component}/>)
};

export function RouterList() {
	return (
		<>
			<Route path="/" component={Header}/>
			<Route path="/" component={Modal}/>
			<Route exact path="/" component={Main}/>
			{getPages(defaultMenuItems)}
		</>
	)
}
