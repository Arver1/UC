import { createActions } from 'redux-actions';


export const { showNotification } = createActions({
  SHOW_NOTIFICATION: msg => ({ msg }),
});
