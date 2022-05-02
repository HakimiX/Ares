import React from 'react';
import axios from "axios";

const Home = () => {
  const pourData = async () => {
    const response = await axios.get('/api/pour/all');
    console.log(`pour-server response: ${JSON.stringify(response.data)}`);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await pourData();
  };

  return (
    <div className="padded-container">
      <h1>Home</h1>
      <p>This is the home page</p>
      <form onSubmit={handleSubmit}>
        <button>Pour</button>
      </form>
    </div>
  );
}

export default Home;
