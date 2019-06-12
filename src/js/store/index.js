import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { showModalReducer } from '../components/common/modal/reducer';


export const history = createBrowserHistory();

const rootReducer = hist => combineReducers({
  form: formReducer,
  modal: showModalReducer,
  router: connectRouter(hist),
});


const store = createStore(rootReducer(history),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
