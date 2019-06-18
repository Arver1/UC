import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { defaultMenuItems } from './constants/menu-items';
import { Main, Header, Footer, Modal, Notification } from './components';
import { NotFound } from './components/pages/404';


const getPages = menuItems => menuItems.map(it => <Route path={it.url} component={it.component} />);



export default () => (
  <>
    <Route path="/" component={Header} />
    <Route path="/" component={Modal} />
    <Route path="/" component={Notification} />
    <Switch>
      <Route exact path="/" component={Main}/>
      <Route path="/news" component={() => <div>Все новости</div>}/>
      <Route path="/news" component={() => <div>Все новости</div>}/>
      {getPages(defaultMenuItems)}
      <Route component={NotFound}/>
    </Switch>
    <Route path="/" component={Footer}/>
  </>
);
