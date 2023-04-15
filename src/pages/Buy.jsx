import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Buy() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleBuyNow = (price) => {
    navigate('/order-confirmation', { state: { price } });
  };

  const fetchProducts = async () => {
    try {
      const response = await axios.get('https://sneaker-sphere-api.herokuapp.com/products');
      console.log('API response:', response);
      if (response.data && Array.isArray(response.data.data) && response.data.data.length > 0) {
        const products = response.data.data[0];
        console.log('Products fetched:', products);
        setProducts(products);
      } else {
        throw new Error('No products found');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
  

  return (
    <div className="bg-gray-900 min-h-screen">
  <div className="text-center pt-8">
    <h1 className="text-5xl font-extrabold text-white mb-6">Buy a Shoe!</h1>
    <h2 className="text-3xl font-semibold text-white">Select your favorite sneakers</h2>
  </div>
  <div className="container mx-auto px-4 py-12">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <div key={product.ProductID} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col">
          <img src={product.Image} alt="Shoe" className="h-48 w-full object-cover" />
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
      ))}
    </div>
  </div>
</div>

  );
}

export default Buy;
