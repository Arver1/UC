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
