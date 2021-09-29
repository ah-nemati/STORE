import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Loading } from "../components/Loading";
import ProductItem from "../components/ProductItem";
import { DataContext } from "../redux/Store";
import Head from "next/head";

const Home = () => {
  const [state, dispatch] = useContext(DataContext);
  useEffect(() => {
    axios.get("/api/product").then((res) => {
      const { data } = res;
      dispatch({ type: "PRODUCTS", payload: data });
    });
  }, [dispatch]);
  const { products } = state.products;
  return (
    <div className="flex mt-20 min-h-screen">
      <Head>
        <title>Products</title>
        <meta name="description" content="Products page" />
      </Head>
      <div className="flex-1">
        <div className="flex-1 container md:max-w-screen-xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-11 sm:gap-10">
            {!products ? (
              <Loading />
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

export default Home;
