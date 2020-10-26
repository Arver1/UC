import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { defaultMenuItems } from './constants/menu-items';
import {
  Main,
  Header,
  Footer,
} from './components';
import { NotFound } from './components/pages/404';
import { Modal, Notification } from './components/common/modal';
import { News } from './components/pages/news';


const getPages = menuItems => menuItems.map(it => <Route path={it.url} component={it.component} />);


export default () => (
  <>
    <Route path="/" component={Header} />
    <Route path="/" component={Modal} />
    <Route path="/" component={Notification} />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/news" component={News} />
      {getPages(defaultMenuItems)}
      <Route component={NotFound} />
    </Switch>
    <Route path="/" component={Footer} />
  </>
);
