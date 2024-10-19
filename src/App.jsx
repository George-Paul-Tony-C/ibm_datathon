import React, { useState } from 'react';
import bgi from './assets/background.jpg';

// Default data for Sunflower
const defaultData = {
  common_name: "Sunflower",
  scientific_name: "Helianthus annuus",
  family: "Asteraceae",
  order: "Asterales",
  class: "Magnoliopsida",
  kingdom: "Plantae",
  details:
    "Sunflowers are a genus of plants comprising about 70 species in the family Asteraceae. They are known for their large, daisy-like flower heads. They are highly recognizable and are cultivated worldwide for their seeds and oil production.",
};

const defaultImage = 'https://upload.wikimedia.org/wikipedia/commons/4/40/Sunflower_sky_backdrop.jpg'; // Default sunflower image URL

const WildcardApp = () => {
  const [uploadedImage, setUploadedImage] = useState(defaultImage);
  const [imageData, setImageData] = useState(defaultData);

  // Function to handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target.result); // Set uploaded image as base64
        // Simulate fetching new data from uploaded image (this will be dynamic later)
        const newData = {
          common_name: "Unknown Species",
          scientific_name: "Unknown",
          family: "Unknown",
          order: "Unknown",
          class: "Unknown",
          kingdom: "Unknown",
          details:
            "The details for this species are not available. Please try another image or contribute to the database by adding more information.",
        };
        setImageData(newData); // Update with mock data for now
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div 
      className="min-h-screen bg-fixed bg-cover bg-center flex flex-col items-center justify-center p-6"
      style={{ backgroundImage: `url(${bgi})` }}
    >
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-white mb-8 drop-shadow-lg">WILDCARD</h1>

      {/* Upload Box */}
      <div className="flex justify-center mb-8">
        <label htmlFor="file-upload" className="px-8 py-4 bg-gradient-to-r from-green-400 to-green-600 text-white font-semibold rounded-lg shadow-xl cursor-pointer hover:bg-green-500 transition-all duration-300 ease-in-out">
          Upload Image
        </label>
        <input
          id="file-upload"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageUpload}
        />
      </div>

      {/* Main Container (Image and Data Side by Side) */}
      <div className="bg-white bg-opacity-5 backdrop-blur-sm shadow-2xl rounded-xl p-10 flex justify-center items-center space-x-12 mb-10 w-full lg:w-3/4 transition-all duration-500 transform hover:scale-105">
        {/* Left: Uploaded Image */}
        <div className="w-1/2 flex justify-center">
          <img
            src={uploadedImage}
            alt="Uploaded Species"
            className="w-full max-h-96 object-cover rounded-lg shadow-lg hover:shadow-2xl transition duration-300 ease-in-out"
          />
        </div>

        {/* Right: Data in Bullet Points */}
        <div className="w-1/2 bg-white bg-opacity-60 backdrop-blur-lg p-6 rounded-lg">
          <ul className="list-disc pl-5 space-y-3 text-gray-700 text-lg">
            <li><strong>Common Name:</strong> {imageData.common_name}</li>
            <li><strong>Scientific Name:</strong> {imageData.scientific_name}</li>
            <li><strong>Family:</strong> {imageData.family}</li>
            <li><strong>Order:</strong> {imageData.order}</li>
            <li><strong>Class:</strong> {imageData.class}</li>
            <li><strong>Kingdom:</strong> {imageData.kingdom}</li>
          </ul>
        </div>
      </div>

      {/* Detailed Information Below Container */}
      <div className="bg-white bg-opacity-60 backdrop-blur-lg p-6 rounded-lg shadow-2xl text-gray-700 w-full lg:w-3/4">
        <h2 className="text-2xl font-bold mb-4 text-center lg:text-left">Detailed Information</h2>
        <p>{imageData.details}</p>
      </div>

      {/* Chatbot (Placeholder) */}
      <div className="fixed bottom-6 right-6">
        <button className="px-5 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-500 transition duration-300 ease-in-out">
          Chat with Bot
        </button>
      </div>
    </div>
  );
};

export default WildcardApp;
