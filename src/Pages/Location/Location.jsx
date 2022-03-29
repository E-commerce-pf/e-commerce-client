import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css"; // Re-uses images from ~leaflet package
import "leaflet-defaulticon-compatibility";
import style from "./Location.module.css";

// const position = [4.653, -74.109];

const LocationMarker = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click() {
      map.locate();
    },
    locationfound(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

const Location = ({ storeLocations }) => {
  const storesLocations = storeLocations || [
    [4.653, -74.109],
    [6.241, -75.587],
    [3.476, -76.527],
    [-34.598, -58.372],
    [-31.412, -64.204],
    [-32.926, -60.668],
  ];

  return (
    <div className={style.locationContainer}>
      <h1 className={style.locationContainer__title}>Our branches</h1>
      <MapContainer
        center={[-17.836, -63.135]}
        zoom={4}
        className={style.mapContainer}
      >
        <TileLayer
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
          url="https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=x7WNBsgZXrBHLVt6nP31"
        />

        <LocationMarker />

        {storesLocations &&
          storesLocations.map((location) => (
            <Marker key={location} position={location}>
              <Popup>Sucursal EveryOnes Store</Popup>
            </Marker>
          ))}

        {/* <Marker position={[4.653, -74.109]}>
          <Popup>Sucursal EveryOnes Store</Popup>
        </Marker> */}
      </MapContainer>
    </div>
  );
};

export default Location;
