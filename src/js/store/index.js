import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { createBrowserHistory } from 'history';
import { connectRouter } from 'connected-react-router';
import { showModalReducer } from '../components/common/modal/reducer';
import { limitReducer } from '../reducer';


export const history = createBrowserHistory();

const rootReducer = hist => combineReducers({
  form: formReducer,
  modal: showModalReducer,
  router: connectRouter(hist),
  appSize: limitReducer,
});


export default createStore(rootReducer(history),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
