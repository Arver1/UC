import { handleActions, combineActions } from 'redux-actions';
import { showModal } from './action';

const defaultState = { modalName: '' };

export const showModalReducer = handleActions(
  {
    [combineActions(showModal)]: (state, { payload: { name } }) => ({
	    ...state,
	    modalName: name
    })
  },
  defaultState
);
