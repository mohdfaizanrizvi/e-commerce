'use client'; // Ensure this is a client component

import { useCart } from './context/CartContext';
import ProductCard from './components/ProductCard';
import { useEffect, useState } from 'react';
import Link from 'next/link'; 

export default function Home() {
  const { addToCart } = useCart();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setProducts(data);
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Products</h1>
      <div className="mb-4">
        <Link href="/cart" className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700">
          Go to Cart
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}