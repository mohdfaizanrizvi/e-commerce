'use client';

import React, { useState } from 'react'; 

export default function ProductCard({ product, addToCart }) {
  
    // Function to format the price as currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { // Locale for India
      style: 'currency',
      currency: 'INR', // Indian Rupee
    }).format(price);
  };

  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setIsAdded(true);
    alert(`${product.title} added to cart!`);
  };

  return (
    <div className="border p-4 rounded shadow-sm">
      <img src={product.image} alt={product.title} className="h-80 w-full object-contain mb-4" />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-600 mb-4">{formatPrice(product.price)}</p>
      <button
        onClick={handleAddToCart}
        className={`py-2 px-4 rounded transition-colors duration-300 ${
          isAdded ? 'bg-green-500' : 'bg-blue-500'
        } text-white hover:bg-blue-700`}
      >
        {isAdded ? 'Added' : 'Add to Cart'}
      </button>
    </div>
  );
}
