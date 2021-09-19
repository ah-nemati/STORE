import { Action } from "./Action";

const reducers = (state, action) => {
  // console.log("action :",action);
  switch (action.type) {
    case Action.PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };
    case Action.NOTIFY:
      return {
        ...state,
        notify: action.payload,
      };
    case Action.AUTH:
      return {
        ...state,
        auth: action.payload,
      };
    case Action.ADD_CART:
      return {
        ...state,
        cart: action.payload,
      };
    default:
      return state;
  }
};

export default reducers;
