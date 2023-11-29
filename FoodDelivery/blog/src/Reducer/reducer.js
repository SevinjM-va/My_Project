import { combineReducers, createStore} from 'redux';
import Restaurants from '../Components/Restaurants';

const initialState = {
  restaurants: [],
  item: []
}


function reducer(state= initialState, action){
  if(action.type === 'FETCHING_RESTAURANTS'){
    return {...state, restaurants: action.payload};
  }

  return state
}
const orders = {
  cartItems: [],
  amount: 0,
  totalAmount: 0
}

function reducerOrders(state = orders, action){
  if(action.type === 'ADD_TO_CART'){

    const checking = state.cartItems.find((item)=>item.id == action.payload.id)
    
    if(!checking){
      return {...state, cartItems: [...state.cartItems, action.payload]};
    } else {
      const updatedCartItem = state.cartItems.map((item)=>
        item.id === action.payload.id ?
          {...item, itemAmount: action.payload.itemAmount} : item
      );
     console.log('upd',updatedCartItem);
    const calculAmount = updatedCartItem.map(item =>state.amount += item.price * item.itemAmount)
    
    const calculTotalAmount = calculAmount.reducer((prev, curr)=> prev+curr,0);
  return {...state, cartItems: updatedCartItem, amount: calculAmount, totalAmount: calculTotalAmount};
    }
  }
  return state;
}


const rootReducer = combineReducers({
  initialSt: reducer,
  orders: reducerOrders
})

export default rootReducer;