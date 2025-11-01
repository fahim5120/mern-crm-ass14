

import React from 'react';
import { removeCartItem } from '../../services/userServices';

const CartCard = ({ item, updateCartFromChild }) => {

  const removeItem = async (productId) => {
    try {
      const res = await removeCartItem(productId); //
      console.log("Removed:", res.data);
      updateCartFromChild(productId, res.data.cart.totalPrice);
    } catch (error) {
      console.log("Error removing:", error);
    }
  };

  return (
    <div className="card bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl flex items-center w-full p-4">
      <figure className="w-28 h-28 rounded-xl overflow-hidden border border-gray-200">
        <img
          src={item.productId.image}
          alt={item.productId.title}
          className="object-cover w-full h-full"
        />
      </figure>

      <div className="card-body flex flex-col sm:flex-row justify-between items-center w-full px-4">
        <div>
          <h2 className="card-title text-gray-800 text-lg font-semibold">
            {item.productId.title}
          </h2>
          <p className="text-orange-500 text-xl font-bold mt-1">₹{item.price}</p>
        </div>

        <div className="card-actions mt-3 sm:mt-0">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-xl font-medium transition-all"
            onClick={() => removeItem(item.productId._id)}
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;

