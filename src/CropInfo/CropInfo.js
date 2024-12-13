import React, { useState } from 'react';
import { getCropInfo } from './CropService'; // Import the service
import './CropInfo.css';

const CropInfo = () => {
  const [cropName, setCropName] = useState('');
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  // Function to handle input changes
  const handleInputChange = (e) => {
    setCropName(e.target.value);
  };

  // Function to fetch crop info based on the crop name
  const fetchCropInfo = () => {
    if (!cropName.trim()) {
      setError('Please enter a crop name.');
      setData(null);
      return;
    }

    // Call getCropInfo from CropServices.js
    getCropInfo(cropName)
      .then((cropInfo) => {
        setData(cropInfo);
        setError('');
      })
      .catch(() => {
        setError('Crop not found. Please try another name.');
        setData(null);
      });
  };

  return (
    <div className="crop-info">
      <h2>Crop Information</h2>

      {/* Input field to type crop name */}
      <input
        type="text"
        placeholder="Enter crop name"
        value={cropName}
        onChange={handleInputChange}
        onKeyDown={(e) => e.key === 'Enter' && fetchCropInfo()} // Trigger fetch on 'Enter' key
      />
      <button onClick={fetchCropInfo}>Search</button>

      {/* Displaying error message if no crop is found */}
      {error && <p className="error">{error}</p>}

      {/* Displaying crop info if available */}
      {data && (
        <div className="results">
          <h3>{data.name}</h3>
          <p><strong>Climate:</strong> {data.climate}</p>
          <p><strong>Soil Type:</strong> {data.soil}</p>
          <p><strong>Best Practices:</strong></p>
          <ul>
            {data.practices.map((practice, index) => (
              <li key={index}>{practice}</li>
            ))}
          </ul>

          <p><strong>Pests and Solutions:</strong></p>
          <ul>
            {data.pests.map((pest, index) => (
              <li key={index}>
                <strong>{pest.name}:</strong> {pest.about}
                <br />
                <strong>Solution:</strong> <span className="highlight">{pest.solution}</span>
              </li>
            ))}
          </ul>

          <p><strong>Market Demand:</strong> {data.market_demand}</p>
          <p><strong>Origin:</strong> {data.origin}</p>

          <p><strong>Uses:</strong></p>
          <ul>
            {data.uses.map((use, index) => (
              <li key={index}>{use}</li>
            ))}
          </ul>

          <p><strong>Nutritional Value:</strong> {data.nutritional_value}</p>
        </div>
      )}
    </div>
  );
};

export default CropInfo;
