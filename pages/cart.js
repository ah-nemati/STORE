import React, { useContext, useEffect, useState } from "react";
import { CartItem } from "../components/CartItem";
import { DataContext } from "../redux/Store";

const Cart = () => {
  const [state, dispatch] = useContext(DataContext);
  const { cart, notify } = state;
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const gettotal = () => {
      const res = cart.reduce((prev, item) => {
        return prev + item.price * item.qountity;
      }, 0);
      setTotal(res);
    };
    gettotal();
  }, [cart]);
  return (
    <>
      <div className="">
        <div className="container mx-auto mt-10">
          <div className="flex shadow-md my-10">
            <div className="flex-1">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-11">
                <div className="md:col-span-2 bg-white px-10 py-10">
                  <div className="flex justify-between border-b pb-8">
                    <h1 className="font-semibold text-2xl">Shopping Cart</h1>
                    <h2 className="font-semibold text-2xl">
                      {cart.length} Items
                    </h2>
                  </div>
                  <div className="flex mt-10 mb-5">
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/4">
                      Product Details
                    </h3>
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/4 text-center">
                      Quantity
                    </h3>
                    <h3 className="font-semibold text-gray-600 text-xs uppercase w-1/4 text-center">
                      Price
                    </h3>
                  </div>
                  {cart.map((item) => (
                    <CartItem
                      key={item._id}
                      item={item}
                      dispatch={dispatch}
                      cart={cart}
                    />
                  ))}
                </div>
                <div className=" px-8 py-10">
                  <h1 className="font-semibold text-2xl border-b pb-8">
                    Order Summary
                  </h1>
                  <div className="flex justify-between mt-10 mb-5">
                    <span className="font-semibold text-sm uppercase">
                      Items {cart.length}
                    </span>
                    <span className="font-semibold text-sm">{total}$</span>
                  </div>
                  <div>
                    <label className="font-medium inline-block mb-3 text-sm uppercase">
                      Shipping
                    </label>
                    <select className="block p-2 text-gray-600 w-full text-sm">
                      <option>Standard shipping - $10.00</option>
                    </select>
                  </div>
                  <div className="py-10">
                    <label
                      htmlFor="promo"
                      className="font-semibold inline-block mb-3 text-sm uppercase"
                    >
                      Promo Code
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your code"
                      className="p-2 text-sm w-full outline-none rounded-md border-2"
                    />
                  </div>
                  <button className="bg-red-500 hover:bg-red-600 px-5 py-2 text-sm text-white uppercase rounded-md">
                    Apply
                  </button>
                  <div className="border-t mt-8">
                    <div className="flex font-semibold justify-between py-6 text-sm uppercase">
                      <span>Total cost</span>
                      <span>${total}</span>
                    </div>
                    <button className="bg-indigo-500 font-semibold hover:bg-indigo-600 py-3 text-sm text-white uppercase w-full rounded-md">
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
