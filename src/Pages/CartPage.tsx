import React from "react";
import { useCartStore } from "../Store/Store.tsx";

const CartPage: React.FC = () => {
  const { cart, removeFromCart, updateCartItemQuantity, clearCart} = useCartStore();

  // Calculate total price
  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ).toFixed(2);
  };

  return (
    <div className="p-4 sm:p-8">
      <h1 className="text-2xl sm:text-3xl font-semibold text-center">Cart</h1>
      {cart.length === 0 ? (
        <p className="text-center text-sm text-gray-500">
          Your cart is empty.
          <br />
          <span className="text-xs">
            Looks like you haven't added anything to your cart yet.
          </span>
        </p>
      ) : (
        <>
          <div className="flex justify-end mb-4">
            <button
              onClick={clearCart}
              className="px-4 py-2 bg-red-400 text-white rounded hover:bg-red-500"
            >
              Remove All
            </button>
          </div>

          <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-6 mx-auto">
            {cart.map((item: any) => (
              <div
                key={item.id}
                className="p-4 border rounded-lg shadow-md flex flex-col items-center"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="mb-4 w-full h-32 sm:h-40 object-cover rounded"
                />
                <h2 className="text-lg sm:text-xl font-semibold text-center">
                  {item.name}
                </h2>
                <p className="text-sm sm:text-base text-gray-600">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center justify-center my-4">
                  <button
                    onClick={() =>
                      updateCartItemQuantity(item.id, item.quantity - 1)
                    }
                    disabled={item.quantity === 1}
                    className="px-2 py-1 bg-gray-300 text-sm rounded hover:bg-gray-400 disabled:bg-gray-200"
                  >
                    -
                  </button>
                  <span className="px-4">{item.quantity}</span>
                  <button
                    onClick={() =>
                      updateCartItemQuantity(item.id, item.quantity + 1)
                    }
                    className="px-2 py-1 bg-gray-300 text-sm rounded hover:bg-gray-400"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="w-[100px] mt-2 rounded bg-red-400 text-white p-2 hover:bg-red-500"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Price Section */}
          <div className="mt-6 p-4 border-t flex flex-col items-center">
            <h2 className="text-xl sm:text-2xl font-semibold">
              Total: ${calculateTotal()}
            </h2>
            <button
              className="mt-4 px-6 py-3 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => alert("Proceeding to payment")}
            >
              Proceed to Payment
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
