import { createActions } from 'redux-actions';


export const { showModal, closeModal } = createActions({
  SHOW_MODAL: name => ({ name }),
  CLOSE_MODAL: () => ({})
});
