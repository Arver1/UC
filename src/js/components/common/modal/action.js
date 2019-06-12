import { createActions } from 'redux-actions';


export const { showModal } = createActions({
  SHOW_MODAL: name => ({ name })
});
