import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import RouterList from './router-map-list';
import { FULL_LIMIT } from './constants/common';

const EntryPointBlock = document.getElementById('app');

store.subscribe(() => {
  const state = store.getState();
  const { appSize: { limit } } = state;

  EntryPointBlock.className = limit === FULL_LIMIT ? 'limit' : '';
});



render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <RouterList />
    </ConnectedRouter>
  </Provider>, EntryPointBlock,
);
