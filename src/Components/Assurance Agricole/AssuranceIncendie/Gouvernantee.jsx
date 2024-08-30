import React, { useState } from 'react';
import styles from './Gouvernanteee.module.css'

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

const manoubaCities = [
  { value: 'Manouba', label: 'Manouba' },
  { value: 'Mornag', label: 'Mornag' },
  { value: 'Douar Hicher', label: 'Douar Hicher' },
];

const benArousCities = [
  { value: 'Ben Arous', label: 'Ben Arous' },
  { value: 'Mohamedia', label: 'Mohamedia' },
  { value: 'Radès', label: 'Radès' },
];

const sousseCities = [
  { value: 'Sousse', label: 'Sousse' },
  { value: 'Sidi Bou Ali', label: 'Sidi Bou Ali' },
  { value: 'Messaadine', label: 'Messaadine' },
  { value: 'Sahloul', label: 'Sahloul' },
  { value: 'Khzema', label: 'Khzema' },
];

const arianaCities = [
  { value: 'Ariana', label: 'Ariana' },
  { value: 'Raoued', label: 'Raoued' },
  { value: 'Soukra', label: 'Soukra' },
];

const tunisCities = [
  { value: 'Ariana', label: 'Ariana' },
  { value: 'Raoued', label: 'Raoued' },
  { value: 'Soukra', label: 'Soukra' },
];

 const handleGovernorateChange = (event) => {
  onGovernorateChange(event.target.value);
 };

 const handleCityChange = (event) => {
  onCityChange(event.target.value);
 };

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
        <div className={styles.inputWrapper}>
        <label className={styles.inputWrapperLabel} htmlFor="" id='gouvernant'>Gouvernant</label>
          <select onChange={handleGovernorateChange} className={styles.inputWrapperInput} name="governorate" id="governorate">
            {governorates.map((governorate) => (
              <option value={governorate.value}>{governorate.label}</option>
            ))}
          </select>
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.inputWrapperLabel} htmlFor="" id='ville'>Ville</label>
          <select onChage={handleCityChange} className={styles.inputWrapperInput} name="city" id="city">
            {cities.map((city) => (
             <option value={city.value}>{city.label}</option>
            ))}
          </select>
        </div>
        <div className={styles.inputDiv}>
          <div className={styles.inputWrapp}>
            <label className={styles.inputWrapLabel} htmlFor="">Code postale * </label>
            <input className={styles.iW} type="number" />
          </div>
        </div>
    </div>
    
  );
}

export default Gouvernorates;
