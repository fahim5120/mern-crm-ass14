import React from "react";
import { addToCart } from "../../services/userServices";
import toast from "react-hot-toast";

const Cards = ({ product }) => {
  const addProductToCart = async (productId) => {
    try {
      const res = await addToCart(productId)
      console.log(res);
      toast.success(res.data.message)

    } catch (error) {
      toast.error(error.response.data.error);

    }
  }
  return (
    <div className="flex justify-center p-4">
      <div className="card bg-white border border-gray-200 w-80 shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl overflow-hidden">
        <figure className="h-56 bg-gray-50">
          <img
            src={product.image}
            alt={product.title}
            className="object-contain w-full h-full p-4"
          />
        </figure>

        <div className="card-body">
          <h2 className="card-title text-lg font-bold text-gray-800">
            {product.title}
          </h2>
          <p className="text-gray-600 text-sm line-clamp-2">
            {product.description}
          </p>

          <div className="mt-3 flex items-center justify-between">
            <span className="text-orange-500 font-semibold text-lg">
              ₹{product.price}
            </span>
            <button className="btn bg-orange-500 hover:bg-orange-600 border-none text-white rounded-xl px-5" onClick={() => addProductToCart(product._id)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
