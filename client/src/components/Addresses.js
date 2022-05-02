import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Addresses = () => {

  useEffect(() => {
    fetchAddresses();
  }, []);

  const [addresses, setAddresses] = useState([]);

  const fetchAddresses = async () => {
    const result = await axios.get('/api/address/all');
    const addresses = await result.data;
    setAddresses(addresses);
  }

  return (
    <div className="padded-container">
      <h1>Addresses</h1>
      <p>Data from a REST API</p>
      <ul>
        {addresses.map((address, index) => {
          return (
            <Link to={`/addresses/${address.userId}`}>
              <li key={index}>{address.city}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Addresses
