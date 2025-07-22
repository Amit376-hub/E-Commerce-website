import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../Data/Product';
import { useCart } from '../context/ShopContext';
import { toast } from 'react-toastify';

const Product = () => {
  const { productId } = useParams();
  const { addToCart } = useCart();

  const product = products.find(p => p.id === parseInt(productId));

  if (!product) {
    return <div className="p-6">Product not found.</div>;
  }

  return (
    <div className="p-6 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-10">
      
      {/* Product Image */}
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-w-[400px] object-contain bg-white p-4 rounded shadow"
      />

      {/* Product Details */}
      <div className="flex flex-col items-start space-y-4">
        <h1 className="text-3xl font-bold">{product.name}</h1>
        <p className="text-xl text-gray-700">₹{product.price}</p>
        <p className="text-sm text-gray-500">{product.description || 'No description available.'}</p>
        <p className="text-xs text-gray-400">Brand: {product.supplier || 'TrendAura'}</p>

        {/* ✅ Buy Now Button */}
        <button
          onClick={() => {
            addToCart(product);
            toast.success(`${product.name} added to cart! ✅`, {
              position: "top-right",
              autoClose: 2000
            });
          }}
          className="mt-4 px-6 py-3 bg-black text-white rounded hover:bg-gray-800 transition"
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Product;
