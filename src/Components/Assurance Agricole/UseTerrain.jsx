// import { useState, useEffect } from 'react';
// import axios from 'axios';

// const useTerrain = () => {
//   const [terrain, setTerrain] = useState({});

//   useEffect(() => {
//     axios.get('/api/terrain')
//      .then(response => {
//         setTerrain(response.data);
//       })
//      .catch(error => {
//         console.error(error);
//       });
//   }, []);

//   return useTerrain;
// };