import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

interface MapProps {
  center: [number, number]; // Ensure center is a tuple with latitude and longitude
  zoom: number;
  markerPosition: [number, number];
  markerPopupText: string;
}

const Location: React.FC<MapProps> = ({
  center = [51.505, -0.09], // Default center if not provided
  zoom = 13,
  markerPosition = [51.505, -0.09], // Default marker position if not provided
  markerPopupText = "Default Popup Text",
}) => {
  return (
    <div className="w-full h-96">
      <MapContainer center={center} zoom={zoom} className="w-full h-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={markerPosition}>
          <Popup>{markerPopupText}</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Location;
