"use client"; // Add this at the very top to mark the file as a client component

import React from "react";
import { useCart } from "@/app/context/CartContext"; // Import the useCart hook

const ShoppingCart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item._id} className="flex justify-between items-center mb-4">
                <div>
                  <p>{item.name}</p>
                  <p className="text-sm text-gray-500">Price: ${item.price}</p>
                  <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                </div>
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-4">
            <button
              onClick={clearCart}
              className="bg-gray-500 text-white px-4 py-2 rounded"
            >
              Clear Cart
            </button>
            <p className="font-bold">
              Total: ${cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShoppingCart;
