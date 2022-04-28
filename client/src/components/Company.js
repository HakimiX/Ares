import axios from "axios";
import { useEffect, useState } from "react";

const Company = ({ match }) => {

  useEffect(() => {
    fetchCompany();
  }, [])


  const [company, setCompany] = useState({});

  const fetchCompany = async () => {
    const result = await axios.get(`/api/company/${match.params.id}`);
    const company = await result.data;
    setCompany(company);
  }

  return (
    <div className="padded-container">
      <h1>{company.name}</h1>
      <p>{company.catchPhrase}</p>
      <p>{company.bs}</p>
    </div>
  )
}

export default Company
