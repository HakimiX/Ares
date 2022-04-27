import React, { useEffect } from 'react';
import axios from "axios";

const Home = () => {
  useEffect(() => {
    pourData()
  }, []);

  // TODO:
  // implement button here for pouring data instead of
  // time the page refreshed

  const pourData = async () => {
    const response = await axios.get('/api/pour/all');
    console.log(`pour-server response: ${response.data}`);
  }

  return (
    <div className="padded-container">
      <h1>Home</h1>
      <p>This is the home page</p>
    </div>
  )
}

export default Home;
