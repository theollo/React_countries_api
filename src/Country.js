import React from 'react';

const Country = ({ country, markVisited }) => {
  if (!country || !country.name || !country.capital) {
    return null;
  }

  const { name, capital} = country;

  const handleVisitedClick = () => {
    markVisited(country);
  };

  return (
    <div>
      <h3>{name.common}</h3>
      <p>Capital: {capital}</p>
      <button onClick={handleVisitedClick}>Mark as Visited</button>
    </div>
  );
};

export default Country;