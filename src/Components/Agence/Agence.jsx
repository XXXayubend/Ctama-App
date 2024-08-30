import React, { useState } from "react";
import styles from './Agence.module.css';
import Sidebar from '../Sidebar Section/Sidebar';
import Gouvernant from './Gouvernant';
import Map from './map';

const Agence = () => {
  const [showForm, setShowForm] = useState(true);
  const [governorate, setGovernorate] = useState('');
  const [city, setCity] = useState('');
  const [mapCenter, setMapCenter] = useState({ lat: 33.886917, lng: 9.537499 });

  const handleGovernorateChange = (governorate) => {
    setGovernorate(governorate);
  };
  const [showMap, setShowMap] = useState(true);


  const handleValidate = () => {
      switch (governorate) {
        case 'Sousse':
          setMapCenter({ lat: 35.825278, lng: 10.633333 });
          break;
        case 'Tunis':
          setMapCenter({ lat: 36.8, lng: 10.183333 });
      }      
    }
    const handleCityChange = (city) => {
      setCity(city);
    };
  
    const handleNomAgenceChange = (event) => {
      setNomAgence(event.target.value);
    };
  return (
    <div className={styles.AgencePage}>
      <div className={styles.container}>
      <div className={styles.sidebar}>
          <Sidebar />
        </div>
       
        <div className={styles.textDiv}>
          <h2 className={styles.text}>RESEAU DES AGENCES</h2>
        </div>
        
      </div>
      <form action="" className={styles.formGrid}>
        <div className={styles.inputContainer}>
          <div className={styles.inputWrapper}>
            <label className={styles.inputWrapperLabel} htmlFor="Nom de l'agence">Nom de l'agence</label>
            <input className={styles.inputWrapperInput} type="text" id="Nom" placeholder="Nom de l'agence " />
          </div>

          <div className={styles.inputWrapper}>
            <Gouvernant onGovernorateChange={handleGovernorateChange} onCityChange={handleCityChange} />
          </div>

          <div className={styles.inputWrapper}>
            <label className={styles.inputWrapperLabel} htmlFor="Agence">Agence</label>
            <select className={styles.inputWrapperInput} name="" id="">
              <option  value="Sélectionner une agence">Sélectionner une agence</option>
            </select> 
          </div>
        </div>
        <div className={styles.button}>
            <div className={styles.buttonContainer1}>
                <button className={styles.btn1} onClick={() => setShowMap(false)}>Annuler</button>
            </div>
        </div>

        <div className={styles.button1}>
            <div className={styles.buttonContainer2}>
                <button className={styles.btn2} onClick={handleValidate}>Valider</button>
            </div>
        </div>
        {showMap && (
        <div className={styles.map}>
          <Map governorate={governorate} city={city} />
        </div>
      )}
      </form>
      {/* {showMap && (
        <div className={styles.map}>
          <Map governorate={governorate} city={city} />
        </div>
      )}  */}
    </div>
  )
}

export default Agence