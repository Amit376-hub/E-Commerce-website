import React, { useState } from 'react';
import { useCart } from '../context/ShopContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showSizes, setShowSizes] = useState(false);
  const [selectedSizes, setSelectedSizes] = useState({});
  const [selectedQuantities, setSelectedQuantities] = useState({});
  const navigate = useNavigate();

  const handleSizeSelect = (itemId, size) => {
    setSelectedSizes(prev => ({ ...prev, [itemId]: size }));
  };

  const handleQuantityChange = (itemId, quantity) => {
    setSelectedQuantities(prev => ({ ...prev, [itemId]: quantity }));
  };

  const totalPrice = cartItems.reduce((total, item) => {
    const quantity = selectedQuantities[item.id] || 1;
    return total + item.price * quantity;
  }, 0);

  const handlePlaceOrder = () => {
    const allSizesSelected = cartItems.every(item => selectedSizes[item.id]);
    if (allSizesSelected) {
      clearCart();
      navigate('/success');
    } else {
      alert('Please select size for all items!');
    }
  };

  return (
    <div className="p-6 min-h-[80vh]">
      <h1 className="text-3xl font-bold mb-6">Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row justify-between items-center border rounded-lg p-4 shadow space-y-4 md:space-y-0"
              >
                {/* Image and Item Info */}
                <div className="flex flex-col sm:flex-row items-center sm:space-x-4 w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded object-contain border mb-4 sm:mb-0"
                  />

                  <div className="flex-1 text-center sm:text-left">
                    <h2 className="font-semibold text-xl">{item.name}</h2>
                    <p className="text-gray-600">₹{item.price}</p>

                    {showSizes && (
                      <div className="mt-3 space-y-3">

                        {/* Size Selection */}
                        <div>
                          <p className="text-sm font-semibold mb-1">Select Size:</p>
                          <div className="flex justify-center sm:justify-start flex-wrap gap-2">
                            {['S', 'M', 'L', 'XL'].map(size => (
                              <button
                                key={size}
                                onClick={() => handleSizeSelect(item.id, size)}
                                className={`px-3 py-1 rounded border ${
                                  selectedSizes[item.id] === size
                                    ? 'bg-black text-white'
                                    : 'bg-gray-200 text-black'
                                }`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                          {selectedSizes[item.id] && (
                            <p className="text-sm text-green-600">
                              Selected Size: {selectedSizes[item.id]}
                            </p>
                          )}
                        </div>

                        {/* Quantity Selection */}
                        <div>
                          <p className="text-sm font-semibold mb-1">Select Quantity:</p>
                          <input
                            type="number"
                            min="1"
                            max="10"
                            value={selectedQuantities[item.id] || 1}
                            onChange={(e) => handleQuantityChange(item.id, parseInt(e.target.value))}
                            className="border rounded px-3 py-1 w-20 mx-auto sm:mx-0"
                          />
                        </div>

                      </div>
                    )}
                  </div>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition w-full md:w-auto"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total and Checkout */}
          <div className="mt-10 text-right">
            <p className="text-2xl font-bold">Total: ₹{totalPrice}</p>

            {!showSizes ? (
              <button
                onClick={() => setShowSizes(true)}
                className="mt-4 px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition w-full md:w-auto"
              >
                Proceed to Checkout
              </button>
            ) : (
              <button
                onClick={handlePlaceOrder}
                className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition w-full md:w-auto"
              >
                Place Order
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
