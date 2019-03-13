import goods from '../goods';
import {INC_GOOD, DEC_GOOD, DELETE_GOOD} from "../constants";

const initialState = goods.reduce((acc, good) => {
  acc[good.id] = 1;
  return acc;
}, {});

export default (cartState = initialState, action) => {
  const {type, payload} = action;
  const newState = {...cartState};
  switch(type){
    case INC_GOOD:
      if(cartState.hasOwnProperty(payload.id)){
        newState[payload.id]++;
        return newState;
      }
      newState[payload.id] = 1;
      return newState;
    case DEC_GOOD:
      if(cartState.hasOwnProperty(payload.id)){
        if(newState[payload.id] === 1){
          delete newState[payload.id];
          return newState;
        }
        newState[payload.id]--;
        return newState;
      }
      return newState;
    case DELETE_GOOD:
      delete newState[payload.id];
      return newState;
  }
  return cartState;
}
