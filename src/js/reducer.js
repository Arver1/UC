import { handleActions, combineActions } from 'redux-actions';
import { limitApp } from './AC/actions';

const defaultState = { limit: 0 };

export const limitReducer = handleActions(
  {
    [combineActions(limitApp)]: (state, { payload: { limit } }) => ({
      ...state,
      limit
    })
  },
  defaultState
);
