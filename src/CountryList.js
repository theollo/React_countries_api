import React from 'react';
import Country from './Country';

const CountryList = ({ countries, markVisited }) => {
  const renderCountry = (country) => (
    <Country key={country.name.common} country={country} markVisited={markVisited} />
  );

  return (
    <div>
      <h2>List of Countries</h2>
      {countries.map(renderCountry)}
    </div>
  );
};

export default CountryList;