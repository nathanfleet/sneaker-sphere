import React, { useState } from 'react';
import axios from 'axios';

function Sell() {
  const [UserID, setUserID] = useState('');
const [ProductName, setProductName] = useState('');
const [Brand, setBrand] = useState('');
const [Model, setModel] = useState('');
const [Quantity, setQuantity] = useState('');
const [Price, setPrice] = useState('');
const [Color, setColor] = useState('');

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:4000/products-and-submission', {
      UserID,
      ProductName,
      Brand,
      Model,
      Quantity,
      Price,
      Color,
    });

    if (response.data.success) {
      const { SubmissionID } = response.data.data;
      localStorage.setItem(SubmissionID, JSON.stringify({
        UserID,
        ProductName,
        Brand,
        Model,
        Quantity,
        Price,
        Color,
      }));
      alert('Submission successful!');
      setUserID('');
      setProductName('');
      setBrand('');
      setModel('');
      setQuantity('');
      setPrice('');
      setColor('');
    } else {
      throw new Error(response.data.message);
    }
  } catch (error) {
    alert('An error occurred while submitting your shoe.');
    console.error(error);
  }
};



  return (
    <div className="y-16 bg-gray-900 overflow-hidden w-screen h-screen">
      <div className="max-w-xl mx-auto px-4 flex flex-col items-center space-y-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="mt-10 text-2xl font-extrabold tracking-tight text-white text-center">
          Would you like to add your sneakers to the SneakerSphere?
        </h2>
        <h3 className="text-xl font-extrabold tracking-tight text-white">
          Sell your shoe!
        </h3>
        <form onSubmit={handleSubmit} className="w-full max-w-xs">
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
              value={UserID}
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
              value={ProductName}
              onChange={(e) => setProductName(e.target.value)}
            />
        </div>
        <div className="mt-4">
            <label
              htmlFor="brand"
              className="block text-sm font-medium text-white"
            >
              Brand
            </label>
            <input
              type="text"
              name="brand"
              id="brand"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full h-10 px-3 py-2 border-gray-300 rounded-md max-w-xs"
              value={Brand}
              onChange={(e) => setBrand(e.target.value)}
            />
        </div>
        <div className="mt-4">
            <label
              htmlFor="model"
              className="block text-sm font-medium text-white"
            >
              Model
            </label>
            <input
              type="text"
              name="model"
              id="model"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full h-10 px-3 py-2 border-gray-300 rounded-md max-w-xs"
              value={Model}
              onChange={(e) => setModel(e.target.value)}
            />
        </div>
        <div className="mt-4">
            <label
              htmlFor="Quantity"
              className="block text-sm font-medium text-white"
            >
              Quantity
            </label>
            <input
              type="text"
              name="quantity"
              id="quantity"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full h-10 px-3 py-2 border-gray-300 rounded-md max-w-xs"
              value={Quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
        </div>
        <div className="mt-4">
            <label
              htmlFor="price"
              className="block text-sm font-medium text-white"
            >
              Price
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full h-10 px-3 py-2 border-gray-300 rounded-md max-w-xs"
              value={Price}
              onChange={(e) => setPrice(e.target.value)}
            />
        </div>
        <div className="mt-4">
            <label
              htmlFor="color"
              className="block text-sm font-medium text-white"
            >
              Color
            </label>
            <input
              type="text"
              name="color"
              id="color"
              className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full h-10 px-3 py-2 border-gray-300 rounded-md max-w-xs"
              value={Color}
              onChange={(e) => setColor(e.target.value)}
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