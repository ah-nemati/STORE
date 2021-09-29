import axios from "axios";
import React, { useState, useEffect } from "react";
import Head from "next/head";

const DetailProduct = ({ id }) => {
  const [product, setproduct] = useState([]);
  useEffect(() => {
    axios.get(`/api/product/${id}`).then((item) => {
      const { data } = item;
      setproduct(data.product);
    });
  }, [id]);
  return (
    <div className="flex md:mt-20 mt-10 p-2">
      <Head>
        <title>Product</title>
        <meta name="description" content="Product page" />
      </Head>
      <div className="grid md:grid-cols-3 grid-cols-1 md:max-w-screen-xl mx-auto">
        <img
          src={product.image}
          alt=""
          className="md:h-96 h-40 rounded-md border-2 p-4 justify-self-center mb-4"
        />
        <div className="flex-col md:col-span-2 text-center mx-10">
          <span className="md:text-xl text-red-600">{product.category}</span>
          <p className="text-justify p-1">{product.description}</p>
        </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  return {
    props: { id },
  };
}

export default DetailProduct;
