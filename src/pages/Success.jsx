import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center bg-white p-6">
      <h1 className="text-4xl font-bold text-green-600 mb-4">🎉 Order Placed Successfully!</h1>
      <p className="text-gray-600 mb-6">Thank you for shopping with TrendAura. Your order is on its way!</p>
      <Link to="/">
        <button className="px-6 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
          Continue Shopping
        </button>
      </Link>
    </div>
  );
};

export default Success;
