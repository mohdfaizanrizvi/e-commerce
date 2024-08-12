'use client';

import React, { useState } from 'react';

export default function CartSummary({ cart }) {
  const [discount, setDiscount] = useState(0);

  // Calculate subtotal
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  // Apply discount to subtotal
  const total = subtotal - discount;

  // Function to apply discount
  const applyDiscount = (type) => {
    if (type === 'fixed') {
      setDiscount(10); 
    } else if (type === 'percentage') {
      setDiscount(subtotal * 0.1); 
    }
  };

  // Function to format price as currency
  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', { // Locale for India
      style: 'currency',
      currency: 'INR', // Indian Rupee
    }).format(price);
  };

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold">Subtotal: {formatPrice(subtotal)}</h2>
      <div className="flex space-x-4 mt-4">
        <button
          onClick={() => applyDiscount('fixed')}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Apply ₹10 Off
        </button>
        <button
          onClick={() => applyDiscount('percentage')}
          className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-700"
        >
          Apply 10% Off
        </button>
      </div>
      <h2 className="text-2xl font-bold mt-4">Total: {formatPrice(total)}</h2>
      <button
        onClick={() => alert('Checkout successful!')}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 mt-4"
      >
        Checkout
      </button>
    </div>
  );
}
