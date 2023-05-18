import React from 'react';

const VisitedCountries = ({ visitedCountries }) => {
  const renderVisitedCountries = () => {
    if (visitedCountries.length === 0) {
      return <p>No countries visited yet.</p>;
    } else {
      return (
        <ul>
          {visitedCountries.map((country, index) => (
            <li key={index}>{country.name.common}</li>
          ))}
        </ul>
      );
    }
  };

  return (
    <div>
      <h2>Visited Countries</h2>
      {renderVisitedCountries()}
    </div>
  );
};

export default VisitedCountries;