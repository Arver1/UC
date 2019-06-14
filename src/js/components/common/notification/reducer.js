import { handleActions, combineActions } from 'redux-actions';
import { showNotification } from './action';


const defaultState = { msg: '' };

export const showNotificationReducer = handleActions({
  [combineActions(showNotification)]: (state, { payload: { msg } }) => ({
    ...state,
    msg,
  }),
}, defaultState);
