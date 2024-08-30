import React, { useState } from 'react';
import styles from './Agricole.module.css'
import { useNavigate } from 'react-router-dom';

const ButtonNavigation = () => {
  const navigate = useNavigate();
  const [selectedAssurance, setSelectedAssurance] = useState('');

  const handleSelectChange = (event) => {
    setSelectedAssurance(event.target.value);
  };

  const handleNavigation = () => {

    switch (selectedAssurance) {
      case '':
        navigate('/agricole-gréle'); 
        break;
      case 'Assurance incendie':
        navigate('/agricole-incendie');
        break;
      case 'Mutirisques serres':
        navigate('/agricole-serre');
        break;
      case 'Assurance mortalité du bétail':
        navigate('/agricole-mortalité');
        break;
      case 'Responsabilité civile agriculteurs':
        navigate('/responsabilité-agricole-civile');
        break;
      case 'Assurance multirisques apicole':
        navigate('/assurance-multirisques-apicole');
        break;
      case 'Chambres frigorifiques':
        navigate('/assurance-chambres-frigorifiques');
        break;
      case 'Corp navire de pêche':
        navigate('/assurance-corps-navire-peche');
        break;    
      default:
        navigate('/erreur');
        break;
    }
  };

  return (
    <div>
      <select className={styles.iW} value={selectedAssurance} onChange={handleSelectChange}>
        <option value="Assurance grêle">Assurance grêle</option>
        <option value="Assurance incendie">Assurance incendie</option>
        <option value="Mutirisques serres">Mutirisques serres</option>
        <option value="Assurance mortalité du bétail">Assurance mortalité du bétail</option>
        <option value="Responsabilité civile agriculteurs">Responsabilité civile agriculteurs</option>
        <option value="Assurance multirisques apicole">Assurance multirisques apicole</option>
        <option value="Chambres frigorifiques">Chambres frigorifiques</option>
        <option value="Corp navire de pêche">Corp navire de pêche</option>
      </select>
      <button className={styles.btn} onClick={handleNavigation}>Demander un devis</button>
    </div>
  );
};

export default ButtonNavigation;
