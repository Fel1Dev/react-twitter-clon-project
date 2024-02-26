import React, { useEffect, useState } from 'react';
//first 20
//Genero, email, img

//https://randomuser.me/api/?results=20

export const UserList = () => {
  const [users, setUsers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [gender, setGender] = useState('');

  const BASE_URL = 'https://randomuser.me/api/?results=20';
  const genders = ['Male', 'Female'];

  function handleChange(event) {
    const selectedGender = event.target.value;
    console.log(selectedGender);
    setGender(selectedGender);

    if (selectedGender != 'All') {
      const filteredList = users.filter(
        (user) => {
          return user.gender === selectedGender.toLowerCase()}
      );
      console.log(filteredList);
      setFiltered(filteredList);
    } else {
      setFiltered(users);
    }
  }

  useEffect(() => {
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => {
        setUsers(data.results);
        setFiltered(data.results);
      });
  }, []);

  return (
    <>
      <h1>People list</h1>

      <label>Choose a gender:</label>

      <select onChange={handleChange}>
        <option value="All">All</option>
        {genders.map((gender) => (
          <option value={gender}>{gender}</option>
        ))}
      </select>

      <ul>
        {filtered.map((user) => {
          return (
            <>
              <li key={user.id.value}>
                {user.gender}, {user.email}
                <img src={user.picture.thumbnail} />
              </li>
            </>
          );
        })}
      </ul>
    </>
  );
};
