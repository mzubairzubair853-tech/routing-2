import { useState } from 'react'

import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import { NavLink } from "react-router";

import './App.css'

function App() {
  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 80000,
      image:"https://png.pngtree.com/png-vector/20250304/ourmid/pngtree-sleek-modern-laptop-with-high-resolution-display-png-image_15711292.png"
    },
    {
      id: 2,
      name: "Mobile",
      price: 50000,
      image: "https://png.pngtree.com/png-vector/20250307/ourmid/pngtree-latest-model-mobile-phone-png-image_15739741.png"
    }
  ]

  return (
    <div>
      <h1>Our Products</h1>

      <div className="products">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
             <NavLink to={'/product/${product.id}'}>Detail</NavLink>

            <h2>{product.name}</h2>

            <p>Price: Rs. {product.price}</p>

            <button>Buy Now</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
