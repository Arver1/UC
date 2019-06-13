import { createActions } from 'redux-actions';

export const limitApp = createActions({
  LIMIT_APP: limit => ({ limit })
});
