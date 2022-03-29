import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";

const position = [4.653, -74.109];

const Location = () => {
  return (
    <div>
      <MapContainer
        center={position}
        zoom={13}
        style={{
          width: "100vw",
          height: "100vh",
          border: "1px solid red",
          position: "static",
        }}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=x7WNBsgZXrBHLVt6nP31"
        />
        <Marker position={position}>
          <Popup>Sucursal EveryOnes Store</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Location;
