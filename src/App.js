import React, { useState, useEffect } from 'react';
import CountryList from './CountryList';
import VisitedCountries from './VisitedCountries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      const response = await fetch('https://restcountries.com/v3.1/all');
      if (!response.ok) {
        throw new Error('Could not find the countries');
      }
      const data = await response.json();
      setCountries(data);
    } catch (error) {
      console.error('Could not find the countries', error);
    }
  };

  const addVisitedCountry = (country) => {
    setVisitedCountries((prevVisitedCountries) => {
      const updatedVisitedCountries = [...prevVisitedCountries];
      updatedVisitedCountries.push(country);
      return updatedVisitedCountries;
    });
  };

  return (
    <div>
      <h1>Country Bucket List</h1>
      <CountryList countries={countries} markVisited={addVisitedCountry} />
      <VisitedCountries visitedCountries={visitedCountries} />
    </div>
  );
};

export default App;






