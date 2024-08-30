import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker } from 'leaflet';

function MapComponent() {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const mapElement = document.getElementById('map');
    const mapInstance = new Map(mapElement, {
      center: [37.7749, -122.4194],
      zoom: 13,
    });

    setMap(mapInstance);

    const tileLayer = new TileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>',
      subdomains: ['a', 'b', 'c'],
    });

    mapInstance.addLayer(tileLayer);

    const marker = new Marker([37.7749, -122.4194]);
    mapInstance.addLayer(marker);

    mapInstance.on('click', (e) => {
      console.log(`Click on map at ${e.latlng}`);
    });
  }, []);

  return (
    <div id="map" style={{ height: 400, width: 800 }} />
  );
}

export default MapComponent;