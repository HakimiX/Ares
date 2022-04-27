import { useEffect, useState } from "react";
import axios from "axios";

const Person = ({ match }) => {

  useEffect(() => {
    fetchPerson()
  }, []);

  const [person, setPerson] = useState({});

  const fetchPerson = async () => {
    const result = await axios.get(`/api/person/${match.params.id}`);
    const person = await result.data;
    setPerson(person);
  }

  return (
    <div>
      <h1>{person.name}</h1>
      <p>{person.username}</p>
      <p>{person.email}</p>
    </div>
  )
}

export default Person
