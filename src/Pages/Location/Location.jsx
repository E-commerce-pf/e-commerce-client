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
import {Navbar} from '../../Components/Navbar/Navbar'
import mapa from './image/location.png';
import {GiShop} from 'react-icons/gi';
import { motion } from "framer-motion";

const cardVariants= {
  offscreen: {
    x: 10
  },
  onscreen: {
    scale: [1, 2, 2, 1, 1],
    x:10,
    y:[10,35,45,-45,-35,10],
    // rotate: [0, 0, 270, 270, 0],
    borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    transition: {
      type:'tween',
      bounce: 0,
      duration: 2
    }
  }
};

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
   {name:'Fernandez,Santiago del Estero',coordenadas:[-26.952, -61.790]},
   {name:'Cartagena,Bolivar,Colombia',coordenadas:[10.424,-75.551]},
   {name:'Sierra Grande,Rio Negro,Argentina',coordenadas:[-41.606, -65.355]},
   {name:'Bogota,Cundinamarca,Colombia',coordenadas:[4.710, -74.072]},
   {name:'Baranquilla,Atlantico,Colombia',coordenadas:[11.003, -74.811]},
   {name:'Tupungato,Mendoza,Argentina',coordenadas:[-33.372, -69.147]},
];

  console.log(storesLocations,'storeLocation')

  return (
    <div>
        <Navbar/>
        <h1 className={style.locationContainer__title}>Our branches</h1>
      <div className={style.locationContainer}>
        <div className={style.Cities}>

          <motion.img 
            variants={cardVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: false, amount: 0 }}
          className={style.img_mapa} src={mapa} alt='mapa_local' />
          <h2 className={style.title_cities}>Selling points</h2>
          <p className={style.segundo_title}>Find our nearest branch</p>
          {storesLocations &&
            storesLocations.map((location,index ) => (
           <div key={Math.random(index)}>
             <p className={style.segundo_title}><GiShop/>{' '} {location.name}</p>
           </div>
            ))}
        </div>
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
            storesLocations.map((location,index) => (
              <Marker key={Math.random(index)} position={location.coordenadas}>
                <Popup>
                  <h2>Sucursal Everyones Store</h2>
                  <h4>{location.name}</h4>
                </Popup>
              </Marker>
            ))} 
  
          {/* <Marker position={[4.653, -74.109]}>
            <Popup>Sucursal EveryOnes Store</Popup>
          </Marker>
            </div>*/}
       </MapContainer> 
      </div>
    </div>
    );
  };

export default Location;
