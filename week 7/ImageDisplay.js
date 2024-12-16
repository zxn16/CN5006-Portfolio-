// ImageDisplay.js
import React, { useState } from 'react';
// Import local images
import sad from './sad.png';
import love from './Love.png';
import like from './like.png';

// Map filenames to imports for easy lookup
const images = {
  sad: sad,
  love: love,
  like: like,
};

function ImageDisplay() {
  // State to hold the entered image name
  const [imageName, setImageName] = useState('');

  // Handle changes in the text box
  const handleInputChange = (event) => {
    setImageName(event.target.value.toLowerCase()); // Convert input to lowercase for consistent matching
  };

  return (
    <div>
        <p>
      {/* Text box to enter image name */}
      <input
        type="text"
        placeholder="Enter image name (e.g., happy, love, like)"
        value={imageName}
        onChange={handleInputChange}
      />

      {/* Label to display the image */}
      <label>
        {images[imageName] ? (
          <img
            src={images[imageName]}
            alt={imageName}
            style={{ maxWidth: '100%', height: 'auto', marginTop: '10px' }}
          />
        ) : (
          <p>No image found</p>
        )}
      </label>
      </p>
    </div>
  );
}

export default ImageDisplay;
