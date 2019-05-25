import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';
import {defaultMenuItems} from "./constants/menu-items";
import {Main} from "./components/main";
import {Header} from "./components/header";

const getPages = menuItems => {
	return menuItems.map(it => <Route path={it.url} component={it.component}/>)
};

export function RouterList() {
	return (
		<BrowserRouter>
			<Route path="/" component={Header}/>
			<Route exact path="/" component={Main}/>
			{getPages(defaultMenuItems)}
		</BrowserRouter>
	)
}
