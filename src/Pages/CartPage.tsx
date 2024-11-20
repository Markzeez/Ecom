import React from 'react';
import { useCartStore } from '../Store/Store';

const CartPage: React.FC = () => {
  const { cart, removeFromCart } = useCartStore();

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cart.map((item:any) => (
            <div key={item.id} className="p-4 border rounded-lg shadow-md">
              <img
                src={item.image}
                alt={item.name}
                className="mb-4 w-full h-32 sm:h-40 object-cover rounded"
              />
              <h2 className="text-lg sm:text-xl font-semibold">{item.name}</h2>
              <p className="text-sm sm:text-base text-gray-600">${item.price}</p>
              <button
                onClick={() => removeFromCart(item.id)}
                className="w-[100px] rounded bg-red-400 p-2 mx-auto"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CartPage;
