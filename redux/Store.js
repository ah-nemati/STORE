import axios from "axios";
import { createContext, useReducer, useEffect } from "react";
import reducers from "./Reducer";

export const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const initialState = { notify: {}, auth: {},
  //  cart: []
   };
  const [state, dispatch] = useReducer(reducers, initialState);
  // const { cart } = state;

  useEffect(() => {
    const firstlogin = localStorage.getItem("firstlogin");
    if (firstlogin)
      axios.get(`${process.env.BASE_URL}/api/auth/accesstoken`).then((res) => {
        if (res.err) return localStorage.removeItem(firstlogin);
        dispatch({
          type: "AUTH",
          payload: {
            token: res.data.accesstoken,
            user: res.data.users,
          },
        });
      });
  }, []);

  // useEffect(() => {
  //   const __next__cart__store = JSON.parse(
  //     localStorage.getItem("__next__cart__store")
  //   );

  //   if (__next__cart__store)
  //     dispatch({ type: "ADD_CART", payload: __next__cart__store });
  // }, []);

  // useEffect(() => {
  //   localStorage.setItem("__next__cart__store", JSON.stringify(cart));
  // }, [cart]);

  return (
    <DataContext.Provider value={[state, dispatch]}>
      {children}
    </DataContext.Provider>
  );
};
