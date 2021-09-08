import axios from "axios";
import React, { useState } from "react";
import ProductItem from "../components/ProductItem";

const Home = (props) => {
  const [products, setProducts] = useState(props.products.products);
  return (
    <div className="flex mt-20" dir="rtl">
      <div className="flex-1">
        <div className="flex-1 container md:max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-11 sm:gap-10">
            {products.length === 0 ? (
              <div className="bg-gray-50">no product!</div>
            ) : (
              products.map((product) => (
                <ProductItem product={product} key={product._id} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps(context) {
  const res = await axios.get(`${process.env.BASE_URL}/api/product`);
  return {
    props: {
      products: res.data,
    },
  };
}

export default Home;
