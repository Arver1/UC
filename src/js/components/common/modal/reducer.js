import { handleActions, combineActions } from 'redux-actions';
import { closeModal, showModal } from './action';

const defaultState = { modalName: 'bid_form_u' };

export const showModalReducer = handleActions(
  {
    [combineActions(showModal)]: (state, { payload: { name } }) => ({
      ...state,
      modalName: name,
    }),
    [combineActions(closeModal)]: state => ({
      ...state,
      modalName: '',
    }),
  },
  defaultState,
);
