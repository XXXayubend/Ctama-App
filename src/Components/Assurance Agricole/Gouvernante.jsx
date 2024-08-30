import React, { useState } from 'react';
import styles from './Gouvernante.module.css'

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

const ArianaCities = [
  { value: 'ariana soghre', label: 'Manouba' },
  { value: 'Borj Lwzir', label: 'Borj Lwzir ' },
  { value: 'Sokra', label: 'Sokra' },
];
const BéjaCities = [
  { value: 'Béja', label: 'Béja' },
  { value: 'Nefza', label: 'Nefza ' },
];
const BizerteCities = [
  { value: 'Ras jbal', label: 'Ras jbal' },
  { value: 'Manzel bourguiba', label: 'Manzel bourguiba' },
];
const GabesCities = [
  { value: 'Sidi boulbeba', label: 'Sidi boulbeba' },
];
const GafsaCities = [
  { value: 'Metlaoui', label: 'Metlaoui' },
];
const JendoubaCities = [
  { value: 'Jendouba', label: 'Jendouba' },
];
const KairouaneCities = [
  { value: 'Chbika', label: 'Chbika' },
];
const KasserineCities = [
  { value: 'Thala', label: 'Thala' },
  { value: 'Feriana', label: 'Feriana' },
  { value: 'Foussena', label: 'Foussena' },
  { value: 'Sbitla', label: 'Sbitla' },
  { value: 'Sbiba', label: 'Sbiba' },
];
const KebiliCities = [
  { value: 'Kebili', label: 'Kbeli' },
];
const KefCities = [
  { value: 'Dahmeni', label: 'Dahmeni' },
  { value: 'Sraouertan', label: 'Sraouertan' },
  { value: 'Tajerouin', label: 'Tajerouin' },
  { value: 'Sidi Berouis', label: 'Sidi berouis' },
];
const MahdiaCities = [
  { value: 'Bkalta', label: 'Bkalta' },
  { value: 'Salakta', label: 'Salakta' },
  { value: 'Rjich', label: 'Rjich' },
  { value: 'Ksour Essef', label: 'Ksour Essaf' },
  { value: 'EL Jem', label: 'EL Jem ' },
];
const MedinineCities = [
  { value: 'Mednine', label: 'Mednine' },
];
const MonastirCities = [
  { value: 'Sahline', label: 'Sahline' },
  { value: 'Khnis', label: 'Khnis' },
  { value: 'Ouerdanin', label: 'OUerdanin' },
  { value: 'Ksar Hlel', label: 'Ksar Hlel' },
  { value: 'Manzel Kamel', label: 'Manzel Kamel' },
];
const NabeulCities = [
  { value: 'Beni Khiar', label: 'Beni Khiar' },
  { value: 'Al Maamoura', label: 'Al Maamoura' },
];
const SfaxCities = [
  { value: 'Thyna', label: 'Thyna' },
  { value: 'Mahares', label: 'Mahares' },
  { value: 'Jbeniana', label: 'Jbeniana' },
];
const SidiBouzideCities = [
  { value: 'Lessouda', label: 'Lessouda' },
];
const TataouineCities = [
  { value: 'Rmeda', label: 'Rmeda' },
];
const TozeurCities = [
  { value: 'Elhama', label: 'Elhama' },
];
const ZaghouanCities = [
  { value: 'Moghrane', label: 'Moghrane' },
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
      case 'Ariana':
        setCities(arianaCities);
        break;
      case 'Béja':
        setCities(BéjaCities);
        break;
      case 'Bizerte':
        setCities(BizerteCities);
        break;  
      case 'Ben Arous':
        setCities(benArousCities);
        break;
      case 'Sousse':
        setCities(sousseCities);
        break;
      case 'Gabes':
        setCities(GabesCities);
        break;
      case 'Gafsa':
        setCities(GafsaCities);
        break; 
      case 'Jendouba':
        setCities(JendoubaCities);
        break;
      case 'Kairouane':
        setCities(KairouaneCities);
        break;
      case 'Kasserine':
        setCities(KasserineCities);
        break;
      case 'Kebili':
        setCities(KebiliCities);
        break;
      case 'Kef':
        setCities(KefCities);
        break; 
      case 'Mahdia':
        setCities(MahdiaCities);
        break; 
      case 'Mednine':
        setCities(MedinineCities);
        break;
      case 'Monastir':
        setCities(MonastirCities);
        break;
      case 'Nabeul':
        setCities(NabeulCities);
        break; 
      case 'Sfax':
        setCities(SfaxCities);
        break;
      case 'Sidi Bouzide':
        setCities(SidiBouzideCities);
        break;
      case 'Tataouine':
        setCities(TataouineCities);
        break; 
      case 'Tozeur':
        setCities(TozeurCities);
        break;
      case 'Zaghouan':
          setCities(ZaghouanCities);
          break;
      case 'Tunis':
        setCities(tunisCities);
        break;
      default:
        setCities([]);
    }
  };

  return (
    
      <div className={styles.inputContainer}>
        <div className={styles.inputWrapper}>
        <label className={styles.inputWrapperLabel} htmlFor="" id='gouvernant'>Gouvernant</label>
          <select onChange={handleGovernorateChange} className={styles.iW} name="governorate" id="governorate">
            {governorates.map((governorate) => (
              <option value={governorate.value}>{governorate.label}</option>
            ))}
          </select>
        </div>

        <div className={styles.inputWrapper}>
          <label className={styles.inputWrapperLabel} htmlFor="" id='ville'>Ville</label>
          <select onChage={handleCityChange} className={styles. iW} name="city" id="city">
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


