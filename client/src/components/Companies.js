import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Companies = () => {

  useEffect(() => {
    fetchCompanies()
  }, [])

  const [companies, setCompanies] = useState([]);

  const fetchCompanies = async () => {
    const result = await axios.get('/api/company/all');
    const companies = await result.data.filter(element => {
      return element !== null;
    });
    setCompanies(companies)
  }

  return (
    <div className="padded-container">
      <h1>Companies</h1>
      <ul>
        {companies.map((company, index) => {
          return (
            <Link to={`/companies/${company.userId}`}>
              <li key={index}>{company.name}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Companies
