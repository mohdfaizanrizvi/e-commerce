'use client'; 

import './globals.css';
import { CartProvider } from './context/CartContext';
import Link from 'next/link'; 

export default function RootLayout({ children }) {
  return (
    <CartProvider>
      <html lang="en">
        <body className="bg-gray-100">
          <header className="bg-red-600 text-white p-4">
            <nav className="container mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">
                E-Commerce
              </Link>
              <div className="flex space-x-4">
              <Link href="/" className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200">
                Home
              </Link>
              <Link href="/cart" className="bg-white text-blue-500 py-2 px-4 rounded hover:bg-gray-200">
                Cart
              </Link>
              </div>
            </nav>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </CartProvider>
  );
}