import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import RouterList from './router-map-list';
import { FULL_LIMIT } from './constants/common';
import { get } from './constants';


const ENTRY_POINT_BLOCK = document.getElementById('app');

store.subscribe(() => {
  const state = store.getState();
  const limit = get(state, 'appSize.limit');

  // required due to a bug in mobil redux form
  ENTRY_POINT_BLOCK.className = limit === FULL_LIMIT ? 'limit' : '';
});


render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RouterList />
    </ConnectedRouter>
  </Provider>, ENTRY_POINT_BLOCK,
);
