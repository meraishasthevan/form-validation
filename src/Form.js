import React, { useState } from 'react';
import './Form.css'; 

function Form() {
  const [city, setCity] = useState(''); 
  const [cities, setCities] = useState([]); 
  const [error, setError] = useState(''); 

  function handleSubmit(event) {
    event.preventDefault(); 

    if (city === '' || city[0] === ' ') {
      setError('City name cannot be empty or start with a space.');
      return;
    }

    let isDuplicate = false;
    for (let i = 0; i < cities.length; i++) {
      if (cities[i].toLowerCase() === city.toLowerCase()) {
        isDuplicate = true;
        break;
      }
    }

    if (isDuplicate) {
      setError('This city has already been added.');
      return;
    }

    setCities([...cities, city]); 
    setCity(''); 
    setError(''); 
  }

  function handleInputChange(event) {
    setCity(event.target.value); 
  }

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={city} 
          onChange={handleInputChange} 
          placeholder="Enter city name"
        />
        <button type="submit">Add City</button>
      </form>

      {error && <p>{error}</p>}

      <ul>
        {cities.map((city, index) => (
          <li key={index}>{city}</li>
        ))}
      </ul>
    </div>
  );
}

export default Form;
