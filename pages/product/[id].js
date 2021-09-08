import axios from "axios";
import React, { useState } from "react";

const DetailProduct = (props) => {
  const [product] = useState(props.product);
  return (
    <div className="flex mt-20">
      <div className="flex container md:max-w-screen-xl mx-auto">
          <img src={product.image} alt="" className="h-96" />
          <div className="flex-col text-center mx-10">
          <span>{product.category}</span>
            <p>{product.description}</p>
          </div>
      </div>
    </div>
  );
};

export async function getServerSideProps({ params: { id } }) {
  const res = await axios.get(`${process.env.BASE_URL}/api/product/${id}`);
  return {
    props: { product: res.data.product },
  };
}

export default DetailProduct;
