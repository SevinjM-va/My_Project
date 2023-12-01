import { combineReducers, createStore } from "redux";
import Restaurants from "../Components/Restaurants";

const initialState = {
  restaurants: [],
  foods: [],
  category: []
};

function reducer(state = initialState, action) {
  if (action.type === "FETCHING_RESTAURANTS") {
    return { ...state, restaurants: action.payload };
  }
  if (action.type === "FETCHING_FOODS") {
    return { ...state, foods: action.payload };
  }
  if (action.type === 'FETCHING_CATEG') {
    return { ...state, category: action.payload };
  }
  

  return state;
}
const orders = {
  cartItems: [],
  amount: 0,
  totPrice: 0,
};

function reducerOrders(state = orders, action) {
  if (action.type === "ADD_TO_CART") {
    const checking = state.cartItems.find(
      (item) => item.id == action.payload.id
    );
    if (!checking) {
      return { ...state, cartItems: [...state.cartItems, action.payload] };
    } else {
      const updatedCartItem = state.cartItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, itemAmount: item.itemAmount + action.payload.itemAmount }
          : item
      );
      return { ...state, cartItems: updatedCartItem };
    }
  } else if (action.type === "CALCULATE_TOTAL") {
    let totalAmount = 0;
    let totalPrice = 0;
    let roundedNum;
    const calcul = state.cartItems.map((item) => {
      totalAmount += item.itemAmount;
      totalPrice += item.itemAmount * Number(item.price);
    });
    return { ...state, amount: totalAmount, totPrice: totalPrice };
  }
  if (action.type === "CLEAR_STATE") {
    return { ...state, cartItems: [], amount: 0, totPrice: 0 };
  }
  return state;
}

const rootReducer = combineReducers({
  initialSt: reducer,
  orders: reducerOrders,
});

export default rootReducer;
