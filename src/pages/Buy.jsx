import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Buy() {
  const [shoes, setShoes] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/shoes');
        setShoes(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    // needs updated
    <div>
      {shoes.map((shoe) => (
        <div key={shoe.id}>
          <h2>{shoe.name}</h2>
          <p>{shoe.brand}</p>
          <p>{shoe.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Buy;
