import React, { useState } from 'react';
import axios from 'axios';

function Sell() {
  const [userID, setUserID] = useState('');
  const [productName, setProductName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [quantity, setQuantity] = useState('');
  const [price, setPrice] = useState('');
  const [color, setColor] = useState('');
  const generateSubID = () => {
    const id = `S${Math.floor(Math.random() * 900) + 100}`;
    // check if the id already exists
    if (localStorage.getItem(id)) {
      return generateSubID(); // recursively generate new id if id already exists
    }
    return id;
  };
  
  const generateProdID = () => {
    const id = `P${Math.floor(Math.random() * 900) + 100}`;
    // check if the id already exists
    if (localStorage.getItem(id)) {
      return generateProdID(); // recursively generate new id if id already exists
    }
    return id;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSubmissionID = generateSubID();
    const newProductID = generateProdID(); // generate new product id
  
    try {
      // post product data to server
      // UPDATE ENDPOINTS
      await axios.post('http://localhost:4000/products', {
        productID: newProductID,
        productName,
        brand,
        model,
        quantity,
        price,
        color,
      });
  
      // post submission data to server
      // UPDATE ENDPOINTS
      await axios.post('http://localhost:4000/submission', {
        submissionID: newSubmissionID,
        userID,
        productID: newProductID, // use the new product id
      });
  
      localStorage.setItem(newSubmissionID, JSON.stringify({
        userID,
        productName,
        brand,
        model,
        quantity,
        price,
        color,
      }));
      alert('Submission successful!');
      setUserID('');
      setProductName('');
      setBrand('');
      setModel('');
      setQuantity('');
      setPrice('');
      setColor('');
    } catch (error) {
      alert('An error occurred while submitting your shoe.');
      console.error(error);
    }
  };
  

  return (
    <div className="py-16 bg-gray-900 overflow-hidden h-screen w-screen">
      <div className="max-w-xl mx-auto px-4 space-y-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-extrabold tracking-tight text-white">
          Would you like to add your sneakers to the SneakerSphere?
        </h2>
        <h3 className="text-xl font-extrabold tracking-tight text-white">
          Sell your shoe!
        </h3>
        <form onSubmit={handleSubmit}>
          <div className="mt-4">
            <label
              htmlFor="user-id"
              className="block text-sm font-medium text-white"
            >
              User ID
            </label>
            <input
              type="text"
              name="user-id"
              id="user-id"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full h-10 px-3 py-2 border-gray-300 rounded-md max-w-xs"
              value={userID}
              onChange={(e) => setUserID(e.target.value)}
            />
        </div>
        <div className="mt-4">
            <label
              htmlFor="product-name"
              className="block text-sm font-medium text-white"
            >
              Product Name
            </label>
            <input
              type="text"
              name="product-name"
              id="product-name"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full h-10 px-3 py-2 border-gray-300 rounded-md max-w-xs"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
        </div>

          
      <button
        type="submit"
        className="mt-8 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:w-auto"
      >
        Submit
      </button>
      </form>
    </div>
  </div>
  );
}
export default Sell;