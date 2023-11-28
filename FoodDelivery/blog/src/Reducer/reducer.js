import { combineReducers, createStore} from 'redux';

const initialState = [];
const orders = {
  cart: [],
  orders: []
}

function reducer(state= initialState, action){
  if(action.type === 'FETCHING_RESTAURANTS'){
    return state = action.payload;
  }
  return state
}
function reducerOrders(state = orders, action){
  if(action.type === 'ADD_TO_CART'){
    return {...state, cart:[...state.cart,action.payload]}
  }
  if(action.type === 'PLACE_ORDER'){
    return {...state, 
      cart:[], 
      orders:[...state.orders,action.payload]}
  }

  return state
}
const rootReducer = combineReducers({
  initialSt: reducer,
  orders: reducerOrders
})

export default rootReducer;