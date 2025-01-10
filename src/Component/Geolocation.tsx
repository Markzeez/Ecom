import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useGeolocation } from "react-geolocation";

// Fix Leaflet's marker icon issue in React apps
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

// Marker Component
const LocationMarker: React.FC<{ position: { lat: number; lng: number } }> = ({ position }) => (
  <Marker position={[position.lat, position.lng]}>
    <Popup>You are here!</Popup>
  </Marker>
);

// Main Component
const GeoLocation: React.FC = () => {
  const { position, error } = useGeolocation();

  // Check if the geolocation data is available
  const location = position?.coords
    ? { lat: position.coords.latitude, lng: position.coords.longitude }
    : null;

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 p-4">
      {/* Display error if geolocation fails */}
      {error && <p className="text-red-500 font-medium">Error: {error.message}</p>}

      {/* Show map if location is available */}
      {location ? (
        <MapContainer
          center={[location.lat, location.lng]}
          zoom={13}
          scrollWheelZoom={false}
          style={{ height: "400px", width: "100%", borderRadius: "8px" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <LocationMarker position={location} />
        </MapContainer>
      ) : (
        // Loading message while fetching location
        <p className="mt-4 text-gray-700">Fetching your location...</p>
      )}
    </div>
  );
};

export default GeoLocation;
