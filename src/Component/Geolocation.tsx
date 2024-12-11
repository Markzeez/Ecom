import React, { useState } from 'react';

const GeoLocation: React.FC = () => {
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGetLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ lat: latitude, lng: longitude });
        setError(null);
      },
      (err) => {
        setError("Unable to retrieve your location. Please try again.");
        console.error(err.message);
      }
    );
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Company Location Finder</h1>
      <button
        onClick={handleGetLocation}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
      >
        Get My Location
      </button>

      {location && (
        <div className="mt-6 p-4 bg-white shadow-md rounded-md">
          <h2 className="text-xl font-semibold">Your Location:</h2>
          <p className="text-gray-700">Latitude: {location.lat}</p>
          <p className="text-gray-700">Longitude: {location.lng}</p>
        </div>
      )}

      {error && (
        <p className="mt-4 text-red-500 font-medium">{error}</p>
      )}
    </div>
  );
};

export default GeoLocation;