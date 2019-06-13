import React from 'react';
import { Route } from 'react-router-dom';
import { defaultMenuItems } from './constants/menu-items';
import { Main } from './components/main';
import { Header } from './components/header';
import { Modal } from './components/common';

const getPages = menuItems => menuItems.map(it => <Route path={it.url} component={it.component} />);


export default () => (
  <>
    <Route path="/" component={Header} />
    <Route path="/" component={Modal} />
    <Route exact path="/" component={Main} />
    {getPages(defaultMenuItems)}
  </>
);
