'use client';

import React from 'react';

export default function CartItem({ item, removeFromCart, updateQuantity }) {

    const formatPrice = (price) => {
        return new Intl.NumberFormat('en-IN', { // Locale for India
          style: 'currency',
          currency: 'INR', // Indian Rupee
        }).format(price);
      };

  return (
    <div className="flex items-center justify-between mb-4">
      <img src={item.image} alt={item.title} className="h-16 w-16 object-cover" />
      <div>
        <h3 className="font-bold">{item.title}</h3>
        <p className="text-gray-600">{formatPrice(item.price)}</p>
      </div>
      <div className="flex items-center">
        <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2">-</button>
        <span className="px-4">{item.quantity}</span>
        <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2">+</button>
      </div>
      <button onClick={() => removeFromCart(item.id)} className="text-red-500">Remove</button>
    </div>
  );
}
