import React from 'react';
import products from '../Data/Product';
import { useCart } from '../context/ShopContext';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';

const ShopCategory = ({ category }) => {
  const { addToCart } = useCart();
  const categoryProducts = products.filter(product => product.category === category);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6 capitalize">{category} Collection</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {categoryProducts.map(product => (
          <div key={product.id} className="border rounded-lg p-4 shadow hover:scale-105 transition">

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-contain bg-white p-4 mb-4 rounded"
            />

            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-600">₹{product.price}</p>

            {/* ✅ Buttons: Buy + View Product */}
            <div className="flex flex-wrap gap-4 mt-4">
              <button
                onClick={() => {
                  addToCart(product);
                  toast.success(`${product.name} added to cart! ✅`, {
                    position: "top-right",
                    autoClose: 2000
                  });
                }}
                className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
              >
                Buy Now
              </button>

              <Link to={`/product/${product.id}`}>
                <button className="px-4 py-2 bg-white text-black border border-black rounded hover:bg-black hover:text-white transition">
                  View Product
                </button>
              </Link>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
