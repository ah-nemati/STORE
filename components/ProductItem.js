import { useContext } from "react";
import Link from "next/link";

import { Svg } from "./Svg";
import { DataContext } from "../redux/Store";

const ProductItem = ({ product }) => {
  const [state, dispatch] = useContext(DataContext);
  const { cart } = state;
  const addToCart = () => {
    dispatch({
      type: "ADD_CART",
      payload: [...cart, {...product,qountity:1}],
    });
  };
  return (
    <div className="bg-white shadow-xl rounded-lg flex-col">
      <img
        src={product.image}
        alt={product.category}
        className="object-contain object-center w-full md:80 mb-4 sm:mb-8 rounded-t-lg max-w-full h-64"
        style={{ boxShadow: "0 0 1px gray" }}
      />
      <div className="flex flex-col px-4">
        <p className="text-gray-700 text-lg sm:text-lg font-bold mb-8 h-20">
          {product.title}
        </p>
        <div className="flex items-center text-primary font-bold mb-8 justify-end text-red-500 text-lg">
          <Svg d="M9 5l7 7-7 7" />
          <Link href={`/product/${product._id}`}>
            <a className=""> نمایش جزییات </a>
          </Link>
        </div>
        <div className="flex justify-between items-center mb-4">
          <button
            className="py-3 px-6 rounded-lg bg-gradient-to-l bg-purple-600 text-white"
            onClick={addToCart}
          >
            افزدون به سبد خرید
          </button>
          <div className="flex flex-col justify-between">
            <div className="font-bold">
              <span className="text-gray-700 ml-3">{product.price}</span>
              <span>دلار</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
