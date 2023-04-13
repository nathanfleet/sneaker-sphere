import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SellTitle from '../components/SellTitle';
import shoe from "../assets/shoe.png"

const Buy = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/products');
        if (response.data.data.length > 0) {
          setProducts(response.data.data);
        } else {
          alert('No products found');
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="bg-gray-100 h-screen">
      <SellTitle />
      <div className="flex flex-wrap justify-center items-center py-12">
        {products.map((product) => (
          <div key={product.ProductID} className="w-full md:w-1/2 lg:w-1/3 px-4 py-4 flex">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-center justify-center w-1/3">
            <img src={shoe} alt="Shoe" className="h-32 w-32" />
          </div>
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-2/3">
            <div className="px-4 py-2">
              <h2 className="text-lg font-bold">{product.ProductName}</h2>
              <p className="text-sm text-gray-600 font-bold">Brand:</p>
              <p className="text-sm text-gray-600">{product.Brand}</p>
              <p className="text-sm text-gray-600 font-bold">Model:</p>
              <p className="text-sm text-gray-600">{product.Model}</p>
              <p className="text-sm text-gray-600 font-bold">Quantity:</p>
              <p className="text-sm text-gray-600">{product.Quantity}</p>
              <p className="text-sm text-gray-600 font-bold">Price:</p>
              <p className="text-sm text-gray-600">{product.Price}</p>
              <p className="text-sm text-gray-600 font-bold">Color:</p>
              <p className="text-sm text-gray-600">{product.Color}</p>
            </div>
            <div className="px-4 py-2 bg-white">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
