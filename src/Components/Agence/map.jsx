import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

const MapComponent = ({ google }) => {
  const locations = [
    { lat: 36.8667, lng: 10.1833, name: 'Ariana' },
    { lat: 36.7333, lng: 9.1833, name: 'Béja' },
    { lat: 36.7333, lng: 10.2333, name: 'Ben Arous' },
    { lat: 37.2833, lng: 9.8667, name: 'Bizerte' },
    { lat: 33.8833, lng: 10.0833, name: 'Gabes' },
    { lat: 34.4333, lng: 8.7833, name: 'Gafsa' },
    { lat: 36.5, lng: 8.7833, name: 'Jandouba' },
    { lat: 35.6667, lng: 10.0833, name: 'Kairouane' },
    { lat: 35.1667, lng: 8.8333, name: 'Kasserine'},
    { lat: 33.7, lng: 8.9667, name: 'Kebili' },
    { lat: 36.8, lng: 10.0833, name: 'Manouba' },
    { lat: 36.1833, lng: 8.7, name: 'Kef' },
    { lat: 35.5, lng: 11.0667, name: 'Mahdia' },
    { lat: 33.35, lng: 10.4667, name: 'Mednine' },
    { lat: 35.7833, lng: 10.8333, name: 'Monastir' },
    { lat: 36.45, lng: 10.7333, name: 'Nabeul' },
    { lat: 34.7333, lng: 10.7667, name: 'Sfax' },
    { lat: 35.0333, lng: 9.4833, name: 'Sidi Bouzide' },
    { lat: 35.8253, lng: 10.6383, name: 'Sousse' },
    { lat: 32.9333, lng: 10.45, name: 'Tataouine' },
    { lat: 33.9167, lng: 8.1333, name: 'Tozeur' },
    { lat: 36.8065, lng: 10.1815, name: 'Tunis' },
    { lat: 36.4, lng: 10.15, name: 'Zaghouan' },

  ]
  return (
    <Map
      google={google}
      style={{ width: "150vh", height: "80vh" }}
      zoom={3}
      initialCenter={{
        lat: 33.886917,
        lng: 9.537499
      }}
    >
      {locations.map((location, index) => (
        <Marker
          key={index}
          position={{ lat: location.lat, lng: location.lng }}
          title={location.name}
        />
      ))}
    </Map>
  );  
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyC3mZg6P7r2AzeOdm4XiQTmHora9Zs3fGQ"
})(MapComponent);

// import React from 'react';
// import {Map, GoogleApiWrapper } from 'google-maps-react'

// const map = () => {
//   return (
    
//     <Map
//       google = {this.props.google}
//       style = {{whidth:"100%", height:"100%"}}
//       zoom = {10}
//       initialCenter = {
//         {
//           lat: 33.886917,
//           lng: 9.537499
//         }
//       }
//     />
//   )
// }

// export default GoogleApiWrapper({
//   apiKey:"AIzaSyC3mZg6P7r2AzeOdm4XiQTmHora9Zs3fGQ"
// })(map)


// import React from 'react';
// import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

// const MapComponent = ({ google }) => {
//   const agences = [
//     { lat: 33.886917, lng: 9.537499, nom: "Agence 1" },
//     { lat: 33.895917, lng: 9.545499, nom: "Agence 2" },
//     { lat: 33.905917, lng: 9.555499, nom: "Agence 3" },
//   ];

//   return (
//     <Map
//       google={google}
//       style={{ width: "150vh", height: "90vh" }}
//       zoom={10}
//       initialCenter={{
//         lat: 33.886917,
//         lng: 9.537499
//       }}
//     >
//       {agences.map((agence, index) => (
//         <Marker
//           key={index}
//           position={{ lat: agence.lat, lng: agence.lng }}
//           title={agence.nom}
//         />
//       ))}
//     </Map>
//   );
// };

// export default GoogleApiWrapper({
//   apiKey: "AIzaSyC3mZg6P7r2AzeOdm4XiQTmHora9Zs3fGQ"
// })(MapComponent);