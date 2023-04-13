import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BuyTitle from '../components/BuyTitle';
import shoe from "../assets/shoe.png"

const Buy = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

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

  const handleBuyNow = (price) => {
    navigate('/order-confirmation', { state: { price } });
  };

  return (
    <div className="bg-gray-900 min-h-screen">
      <BuyTitle />
      <div className="flex flex-wrap justify-center items-center py-12">
        {products.map((product) => (
          <div key={product.ProductID} className="w-full md:w-1/2 lg:w-1/3 px-4 py-4 flex">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden flex items-start w-full">
              <img src={shoe} alt="Shoe" className="h-32 w-32 object-cover p-4" />
              <div className="p-4 flex flex-col justify-between w-full">
                <div>
                  <h2 className="text-lg font-bold mb-2">{product.ProductName}</h2>
                  <p className="text-sm text-gray-600"><span className="font-bold">Brand:</span> {product.Brand}</p>
                  <p className="text-sm text-gray-600"><span className="font-bold">Model:</span> {product.Model}</p>
                  <p className="text-sm text-gray-600"><span className="font-bold">Quantity:</span> {product.Quantity}</p>
                  <p className="text-sm text-gray-600"><span className="font-bold">Price:</span> {product.Price}</p>
                  <p className="text-sm text-gray-600"><span className="font-bold">Color:</span> {product.Color}</p>
                </div>
                <div className="mt-4">
                  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => handleBuyNow(product.Price)}>
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
