import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [userID, setUserID] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://localhost:4000/orders', {
        UserID: userID,
        Price: location.state.price,
      });
  
      if (response.data.success) {
        alert('Thanks for your order! The seller will get back with you soon.');
      } else {
        alert(`Error submitting order: ${response.data.message}`);
      }
    } catch (error) {
      console.error(error);
      alert(`Error submitting order: ${error.message}`);
    }
  };
  

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="bg-gray-900">

    <div className="container mx-auto px-4 py-12 h-screen flex items-center justify-center">
      <div className="bg-white shadow p-6 rounded-lg w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-2xl font-bold mb-8 text-center">Order Confirmation</h1>
        <div className="mb-4">
          <label htmlFor="userID" className="block text-sm font-bold mb-2">UserID:</label>
          <input
            type="text"
            name="userID"
            id="userID"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <p className="text-sm font-bold">Price:</p>
          <p className="text-lg">{location.state.price}</p>
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
          <button
            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            onClick={goBack}
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default OrderConfirmation;
