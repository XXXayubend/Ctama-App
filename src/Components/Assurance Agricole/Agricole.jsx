import React, {useState } from 'react';
import styles from './Agricole.module.css';
import ButtonNavigation from './ButtonNavigation';

import ToggleButton from '../Inscription/ToggleBottom/ToggleButton';

// imported Icons
import { MdOutlineDateRange } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";
import { MdWorkHistory } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const Agricole = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(1);

  const handleButtonClick = () => {
    setShowForm(true);
  }

  const handleNextClick = () => {
    setCurrentStep(currentStep + 1);
  }

  const handlePreviousClick = () => {
    setCurrentStep(currentStep - 1);
  }

  // const renderButtons = () => {
  //   if (currentIndex === 1) {
  //     return (
  //       <div className={styles.buttonContainer}>
  //         <button className={styles.btn} onClick={handleNextClick}>Next</button>
  //       </div>
  //     );
  //   } else if (currentStep > 1 && currentStep < 6) {
  //     return (
  //       <div className={styles.buttonContainer}>
  //         <button className={styles.btn} onClick={handlePreviousClick}>Previous</button>
  //         <button className={styles.btn} onClick={handleNextClick}>Next</button>
  //       </div>
  //     );
  //   } else if (currentStep === 6) {
  //     return (
  //       <div className={styles.buttonContainer}>
  //         <button className={styles.btn} onClick={handlePreviousClick}>Previous</button>
  //         <button className={styles.btn} onClick={handleSubmit}>Next</button>
  //       </div>
  //     );
  //   }
  // };
  
  return (
    <div className={styles.AgricolePage}>
      <div className={styles.container}>
        <div className={styles.textDi}>
          <h2 className={styles.textDii}>Demande de devis agricole</h2>
          <p className={styles.textDiii}>
            Nous offrons un rembourssement des frais de soins ainsi que des indemnités journalières suite 
            à un accident de la vie 
          </p>
          <div className={styles.button}>
          <button className={styles.btn} onClick={handleButtonClick}>Demander un devis</button>
          </div>
        </div>
        <br /> <br /> <br /> <br /> <br />
        {showForm && (
          <form action="" className={styles.formGrid}>
            {currentIndex === 1 && (
            <div className={styles.inputDiii}>
              <label htmlFor="" className={styles.inputWrappLabel}>Veuillez saisir votre date de naissance:</label>
              <MdOutlineDateRange className={styles.icon}/>
              <input className={styles.iW} type="date" id="date" placeholder='' />
            </div>
            )}
            <ButtonNavigation 
              onNext={handleNextClick}
              onPrevious={handlePreviousClick}
              // currentIndex={currentIndex}
              // sections={sections}
            /> 
             {currentIndex === 2 && (
              <div className={styles.inputWrapp} >
                <label htmlFor="" className={styles.inputWrappLabel}>Veuillez saisir votre activité</label>
                <MdWork className={styles.icon} />
                <select className={styles.iW} name="" id="">
                  <option value="">Ingénieur</option>
                  <option value="">Medecien</option>
                  <option value="">Pharmacien</option>
                  <option value="">Technicien</option>
                  <option value="">Professeur</option>
                  <option value=""></option>
                  <option value=""></option>
                </select>
              </div>
              
             )}

            <div className={styles.buttonContainer}>
              {currentIndex > 1 && (
                <button className={styles.btn} onClick={handlePreviousClick}>Previous</button>
              )}
              {currentIndex < 2 && (
                <button className={styles.btn} onClick={handleNextClick}>Next</button>
              )}
            </div>

            {currentIndex === 3 && (
              <div className={styles.inputWrapp} >
                <label htmlFor="" className={styles.inputWrappLabel}>Veuillez choisir le capital qui sera servi aux ayants droit coisir par vos soins suite à un évènement Agricoleel de la vie </label>
                <PiUserListFill className={styles.icon}/>
                <select className={styles.iW} name="" id="">
                  <option value="">10000</option>
                  <option value="">20000</option>
                  <option value="">30000</option>
                  <option value="">40000</option>
                  <option value="">50000</option>
                </select>
                <br />
                <label htmlFor="" className={styles.inputWrappLabel}>Veuillez saisir la capital souhaité, qui vous versé en cas d'incapacité parmanente </label>
                <MdWorkHistory className={styles.icon}/>
                <input className={styles.iW} type="number" />
              </div>
             
            )}
            <div className={styles.buttonContainer}>
              {currentIndex > 2 && (
                <button className={styles.btn} onClick={handlePreviousClick}>Previous</button>
              )}
              {currentIndex < 3 && (
                <button className={styles.btn} onClick={handleNextClick}>Next</button>
              )}
            </div>

            {currentIndex === 4 && (
              <div className={styles.inputWrapp} >
                <label htmlFor="" className={styles.inputWrappLabel}>Voudriez-vous avoir une indemnité journalière en cas d'incapacité temporaire</label>
                <select className={styles.iW} name="" id="">
                  <option value="">Choisissez une option</option>
                  <option value="">Oui</option>
                  <option value="">Non</option>
                </select>
              </div>
              
            )}
            <div className={styles.buttonContainer}>
              {currentIndex > 3 && (
                <button className={styles.btn} onClick={handlePreviousClick}>Previous</button>
              )}
              {currentIndex < 4 && (
                <button className={styles.btn} onClick={handleNextClick}>Next</button>
              )}
            </div>

            {currentIndex === 5 && (
              <div className={styles.inputWrapp} >
                <label htmlFor="" className={styles.inputWrappLabel}>Veuillez saisir le montant de l'indemnité journaliére souhaitée, qui vous sera versée en cas d'incapacité temporaire</label>
                <input className={styles.iW} type="number" />
              </div>
              
            )}
            <div className={styles.buttonContainer}>
              {currentIndex > 4 && (
                <button className={styles.btn} onClick={handlePreviousClick}>Previous</button>
              )}
              {currentIndex < 5 && (
                <button className={styles.btn} onClick={handleNextClick}>Next</button>
              )}
            </div>
          {currentIndex === 6 && (
              <div className={styles.inputWrapp} >
                <label htmlFor="" className={styles.inputWrappLabel}>Veuillez saisir le montant de l'indemnité journaliére souhaitée, qui vous sera versée en cas d'incapacité temporaire</label>
                <input className={styles.iW} type="number" />
              </div>
          )}
          <div className={styles.buttonContainer}>
            {currentIndex > 5 && (
              <button className={styles.btn} onClick={handlePreviousClick}>Previous</button>
            )}
            {currentIndex < 6 && (
              <button className={styles.btn} onClick={handleNextClick}>Next</button>
            )}
          </div>  
          </form>
        )}
      </div>
    </div>
  )
}

export default Agricole;


// import React from 'eact';
// import styles from './Agricole.module.css';

// const ButtonNavigation = ({
//   onNext,
//   onPrevious,
//   currentIndex,
//   sections,
//   nextButtonText = 'Next',
//   previousButtonText = 'Previous',
// }) => {
//   return (
//     <div className={styles.buttonContainer}>
//       {currentIndex > 0 && (
//         <button
//           className={styles.btn}
//           onClick={onPrevious}
//           aria-label={previousButtonText}
//         >
//           {previousButtonText}
//         </button>
//       )}
//       {currentIndex < sections.length - 1 && (
//         <button
//           className={styles.btn}
//           onClick={onNext}
//           aria-label={nextButtonText}
//         >
//           {nextButtonText}
//         </button>
//       )}
//     </div>
//   );
// };

// export default ButtonNavigation;

{/* <ButtonNavigation
  onNext={handleNextClick}
  onPrevious={handlePreviousClick}
  currentIndex={currentIndex}
  sections={sections}
  nextButtonText="Suivant"
  previousButtonText="Précédent"
/> */}

// {
//   title: 'Section 3',
//   content: (
//     <div className={styles.inputWrapp} >
//       <label htmlFor="" className={styles.inputWrappLabel}>Veuillez choisir le capital qui sera servi aux ayants droit coisir par vos soins suite à un évènement Agricoleel de la vie </label>
//       <PiUserListFill className={styles.icon}/>
//       <select className={styles.iW} name="" id="">
//         <option value="">10000</option>
//         <option value="">20000</option>
//         <option value="">30000</option>
//         <option value="">40000</option>
//         <option value="">50000</option>
//       </select>
//       <label htmlFor="" className={styles.inputWrappLabel}>Veuillez saisir la capital souhaité, qui vous versé en cas d'incapacité parmanente </label>
//       <MdWorkHistory className={styles.icon}/>
//       <input className={styles.iW} type="number" />
//     </div>
//   ),
// },

// import React, { useState } from 'react';
// import ButtonNavigation from './ButtonNavigation';

// const Agricole = () => {
//   const [sections, setSections] = useState([
//     {
//       title: 'Section 1',
//       content: <div>Section 1 content</div>,
//     },
//     {
//       title: 'Section 2',
//       content: <div>Section 2 content</div>,
//     },
//     // Add new sections here
//     {
//       title: 'Section 3',
//       content: (
//         <div>
//           <label>Veuillez choisir le capital qui sera servi aux ayants droit coisir par vos soins suite à un évènement Agricoleel de la vie </label>
//           <select>
//             <option value="">10000</option>
//             <option value="">20000</option>
//             <option value="">30000</option>
//             <option value="">40000</option>
//             <option value="">50000</option>
//           </select>
//           <label>Veuillez saisir la capital souhaité, qui vous versé en cas d'incapacité parmanente </label>
//           <input type="number" />
//         </div>
//       ),
//     },
//     {
//       title: 'Section 4',
//       content: <div>Section 4 content</div>,
//     },
//     {
//       title: 'Section 5',
//       content: <div>Section 5 content</div>,
//     },
//     {
//       title: 'Section 6',
//       content: <div>Section 6 content</div>,
//     },
//   ]);

//   const [currentIndex, setCurrentIndex] = useState(0);

//   const handleNextClick = () => {
//     setCurrentIndex(currentIndex + 1);
//   };

//   const handlePreviousClick = () => {
//     setCurrentIndex(currentIndex - 1);
//   };

//   return (
//     <div>
//       {sections[currentIndex].content}
//       <ButtonNavigation
//         onNext={handleNextClick}
//         onPrevious={handlePreviousClick}
//         currentIndex={currentIndex}
//         sections={sections}
//       />
//     </div>
//   );
// };

// export default Agricole;

// const ButtonNavigation = ({ onNext, onPrevious, currentIndex, sections}) => {
//   return (
//     <div className={styles.buttonContainer}>
//       {currentIndex > 0 && (
//         <button className={styles.btn} onClick={onPrevious} >Previous</button>
//       )}
//       {currentIndex < 5 && ( // Update this line to check if currentIndex is less than 5
//         <button className={styles.btn} onClick={onNext} >Next</button>
//       )}
//     </div>
//   );
// };

// to MAP 

// import { Map } from '@googlemaps/react';

// const App = () => {
//   return (
//     <Map
//       defaultZoom={13}
//       defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
//       mapId='DEMO_MAP_ID'
//       onCameraChanged={(ev: MapCameraChangedEvent) => {
//         console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom);
//       }}
//     >
//       {/* Add markers here */}
//     </Map>
//   );
// };
// type Poi = { key: string, location: google.maps.LatLngLiteral };
// const locations: Poi[] = [
//   { key: 'companyLocation', location: { lat: -33.8567844, lng: 151.213108 } },
//   // Add more locations here
// ];

// const PoiMarkers = (props: { pois: Poi[] }) => {
//   const map = useMap();
//   const [markers, setMarkers] = useState<{ [key: string]: Marker }>({});
//   const clusterer = useRef<MarkerClusterer | null>(null);

//   useEffect(() => {
//     if (!map) return;
//     if (!clusterer.current) {
//       clusterer.current = new MarkerClusterer({ map });
//     }
//   }, [map]);

//   useEffect(() => {
//     clusterer.current?.clearMarkers();
//     clusterer.current?.addMarkers(Object.values(markers));
//   }, [markers]);

//   const setMarkerRef = (marker: Marker | null, key: string) => {
//     if (marker && markers[key]) return;
//     if (!marker && !markers[key]) return;

//     setMarkers((prev) => {
//       if (marker) {
//         return { ...prev, [key]: marker };
//       } else {
//         const newMarkers = { ...prev };
//         delete newMarkers[key];
//         return newMarkers;
//       }
//     });
//   };

//   return (
//     <>
//       {props.pois.map((poi: Poi) => (
//         <AdvancedMarker
//           key={poi.key}
//           position={poi.location}
//           ref={(marker) => setMarkerRef(marker, poi.key)}
//         >
//           <Pin background={'#FBBC04'} glyphColor={'#000'} borderColor={'#000'} />
//         </AdvancedMarker>
//       ))}
//     </>
//   );
// };

// const App = () => {
//   return (
//     <Map
//       defaultZoom={13}
//       defaultCenter={{ lat: -33.860664, lng: 151.208138 }}
//       mapId='DEMO_MAP_ID'
//       onCameraChanged={(ev: MapCameraChangedEvent) => {
//         console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom);
//       }}
//     >
//       <PoiMarkers pois={locations} />
//     </Map>
//   );
// };

// tsx