import React, { useState } from 'react';
import styles from '../Gouvernant/Gouvernant.module.css'

const governorates = [
  { value: 'Ariana', label: 'Ariana' },
  { value: 'Béja', label: 'Béja' },
  { value: 'Ben Arous', label: 'Ben Arous' },
  { value: 'Bizerte', label: 'Bizerte' },
  { value: 'Gabes', label: 'Gabes' },
  { value: 'Gafsa', label: 'Gafsa' },
  { value: 'Jendouba', label: 'Jendouba' },
  { value: 'Kairouane', label: 'Kairouane' },
  { value: 'Kasserine', label: 'Kasserine' },
  { value: 'Kebili', label: 'Kebili' },
  { value: 'Manouba', label: 'Manouba' },
  { value: 'Kef', label: 'Kef' },
  { value: 'Mahdia', label: 'Mahdia' },
  { value: 'Mednine', label: 'Mednine' },
  { value: 'Mahdia', label: 'Mahdia' },
  { value: 'Monastir', label: 'Monastir' },
  { value: 'Nabeul', label: 'Nabeul' },
  { value: 'Sfax', label: 'Sfax' },
  { value: 'Sidi Bouzide', label: 'Sidi Bouzide' },
  { value: 'Sousse', label: 'Sousse' },
  { value: 'Tataouine', label: 'Tataouine' },
  { value: 'Tozeur', label: 'Tozeur' },
  { value: 'Tunis', label: 'Tunis' },
  { value: 'Zaghouan', label: 'Zaghouan' },
  

];

 const handleGovernorateChange = (event) => {
  onGovernorateChange(event.target.value);
 };

//  const handleCityChange = (event) => {
//   onCityChange(event.target.value);
//  };

function Gouvernorates() {
  const [selectedGovernorate, setSelectedGovernorate] = useState('');
  const [cities, setCities] = useState([]);

  const handleGovernorateChange = (event) => {
    setSelectedGovernorate(event.target.value);
    switch (event.target.value) {
      case 'Manouba':
        setCities(manoubaCities);
        break;
      case 'Ben Arous':
        setCities(benArousCities);
        break;
      case 'Sousse':
        setCities(sousseCities);
        break;
      case 'Ariana':
        setCities(arianaCities);
        break;
        case 'Tunis':
        setCities(arianaCities);
        break;
      default:
        setCities([]);
    }
  };

  return (
    
      <div className={styles.inputContainer}>
        <div className={styles.gouvernantWrapper}>
        <label className={styles.gouvernantWrapperLabel} htmlFor="" id='gouvernant'>Gouvernant</label>
          <select onChange={handleGovernorateChange} className={styles.gouvernantWrapperInput} name="governorate" id="governorate">
            {governorates.map((governorate) => (
              <option value={governorate.value}>{governorate.label}</option>
            ))}
          </select>
        </div>
    </div>
    
  );
}

export default Gouvernorates;

           