import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

const Persons = () => {

  useEffect(() => {
    fetchPersons()
  }, [])

  const [persons, setPersons] = useState([])

  const fetchPersons = async () => {
    const result = await axios.get('/api/person/all');
    const persons = await result.data.result;
    setPersons(persons);
  }

  return (
    <div className="padded-container">
      <h1>Persons</h1>
      <ul>
        {persons.map((person, index) => {
          return (
            <Link to={`/persons/${person.id}`}>
              <li key={index}>{person.name}</li>
            </Link>
          )
        })}
      </ul>
    </div>
  )
}

export default Persons
