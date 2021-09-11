import React from "react";
import { decrease, increase, removeCart } from "../redux/Action";

import { Svg } from "./Svg";

export const CartItem = ({ cart, dispatch, item }) => {
  return (
    <div>
      {item.length === 0 ? (
        <div>does not found cart!</div>
      ) : (
        <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
          <div className="flex w-2/4">
            <div className="w-20">
              <img className="h-24" src={item.image} alt="" />
            </div>
            <div className="flex flex-col justify-between ml-4 flex-grow">
              <span className="text-xs">{item.category}</span>
              <span className="text-red-500 text-xs">{item.title}</span>
              <a>
                <button
                  className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                  onClick={() => dispatch(removeCart(cart, item._id))}
                >
                  Remove
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center w-1/4">
            <button onClick={() => dispatch(increase(cart, item._id))}>
              <Svg d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </button>
            <span className="mx-2 border text-center w-8">{item.qountity}</span>
            <button
              onClick={() => dispatch(decrease(cart, item._id))}
              disabled={item.qountity === 1 ? true : false}
            >
              <Svg d="M18 12H6" />
            </button>
          </div>
          <span className="text-center w-1/4 font-semibold text-sm">
            {item.price}
          </span>
        </div>
      )}
    </div>
  );
};
