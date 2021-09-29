import { useContext } from "react";
import Link from "next/link";
import Image from "next/image";

import { Svg } from "./Svg";
import { DataContext } from "../redux/Store";

const ProductItem = ({ product }) => {
  const [state, dispatch] = useContext(DataContext);
  const { cart } = state;
  const addToCart = () => {
    const check = cart.every((item) => {
      return item._id !== product._id;
    });
    if (!check)
      dispatch({
        type: "NOTIFY",
        payload: { err: "the product has been add to cart !" },
      });
    else {
      dispatch({
        type: "ADD_CART",
        payload: [...cart, { ...product, qountity: 1 }],
      });
      dispatch({
        type: "NOTIFY",
        payload: { success: "the product successfuly add to cart !" },
      });
    }
  };
  return (
    <div className="bg-white shadow-xl rounded-lg flex-col m-2">
      <Image
        src={product.image}
        width={380}
        height={300}
        alt={product.category}
        className="object-contain object-center w-full mb-4 sm:mb-8 rounded-t-lg max-w-full h-64"
        loading="lazy"
      />
      <div className="flex flex-col px-4">
        <h6 className="text-gray-700 text-sm font-bold mb-8 md:h-16 h-14">
          {product.title}
        </h6>
        <div className="flex items-center font-bold mb-8 justify-end text-red-500 text-base">
          <Svg d="M9 5l7 7-7 7" />
          <Link href={`/product/${product._id}`}>نمایش جزییات</Link>
        </div>
        <div className="flex justify-between items-center mb-4">
          <button
            className="py-3 md:px-3 px-4 text-base rounded-lg bg-gradient-to-l bg-purple-600 text-white"
            onClick={addToCart}
          >
            افزدون به سبد خرید
          </button>
          <div className="flex flex-col justify-between">
            <div className="font-bold">
              <span className="text-gray-700 md:ml-3 ml-2">
                {product.price}
              </span>
              <span>دلار</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
