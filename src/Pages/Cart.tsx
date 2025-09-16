import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, updateQuantity, clearCart } from "../Slices/CartSlice";
import type { RootState } from "../Store";

const Cart: React.FC = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const handleQuantityChange = (id: string, quantity: number) => {
    if (quantity < 1) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity }));
    }
  };

  const handleRemoveItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const total = items.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        <p className="text-center text-gray-600">Your cart is empty.</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        {items.map((item) => (
          <div
            key={item.product.id}
            className="p-4 border-b border-gray-200 flex items-center"
          >
            <img
              src={item.product.image}
              alt={item.product.name}
              className="w-20 h-20 object-cover rounded"
            />
            <div className="ml-4 flex-grow">
              <h2 className="text-xl font-semibold">{item.product.name}</h2>
              <p className="text-gray-600">${item.product.price.toFixed(2)}</p>
            </div>
            <div className="flex items-center">
              <button
                onClick={() =>
                  handleQuantityChange(item.product.id, item.quantity - 1)
                }
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-l"
              >
                -
              </button>
              <span className="bg-gray-100 px-4 py-1">{item.quantity}</span>
              <button
                onClick={() =>
                  handleQuantityChange(item.product.id, item.quantity + 1)
                }
                className="bg-gray-200 text-gray-700 px-2 py-1 rounded-r"
              >
                +
              </button>
            </div>
            <div className="ml-4">
              <span className="text-xl font-semibold">
                ${(item.product.price * item.quantity).toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => handleRemoveItem(item.product.id)}
              className="ml-4 text-red-600 hover:text-red-800"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="p-4 flex justify-between items-center">
          <div className="text-2xl font-bold">Total: ${total.toFixed(2)}</div>
          <div className="space-x-4">
            <button
              onClick={() => dispatch(clearCart())}
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300"
            >
              Clear Cart
            </button>
            <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
