import { createStore} from 'redux';

const initialState = [];


function reducer(state= initialState, action){
  if(action.type === 'FETCHING_RESTAURANTS'){
    return state = action.payload;
  }
  return state
}

export const store = createStore(reducer);