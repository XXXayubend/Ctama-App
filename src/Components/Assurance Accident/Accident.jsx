import React, { useState } from 'react';
import styles from './Accident.module.css';
import Sidebar from '../Sidebar Section/Sidebar'
// imported video 
import video from '../../LoginAssets/accident.mp4'
// imported Icons
// import { MdOutlineDateRange } from "react-icons/md";
// import { MdWork } from "react-icons/md";
// import { PiUserListFill } from "react-icons/pi";
// import { MdWorkHistory } from "react-icons/md";
// import { FaUserAlt } from "react-icons/fa";

const Accident = () => {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <div className={styles.AccidentPage}>
      <div className={styles.container}>
        <div className={styles.videoDiv}>
          <video src={video} autoPlay muted loop></video>
        </div>
        <div className={styles.sideba}>
          <Sidebar />
        </div>
        <div className={styles.textDiv}>
          <h2 className={styles.title}>Demande de devis individuel accident</h2>
          <p className={styles.text}>
            Nous offrons un rembourssement des frais de soins ainsi que des indemnités journalières suite 
            à un accident de la vie .
          </p>
          <div className={styles.button}>
            <button className={styles.btn} onClick={handleButtonClick}>Demander un devis</button>
          </div>
        </div>  
          <br /><br /><br /><br /><br />
          {showForm && (
            <from className={styles.formDiv}>
            <div className={styles.inputDivOne}>
              <div className={styles.input}>
                  <label htmlFor="" className={styles.inputWrappLabel}>date de naissance * </label>
                  <input className={styles.iW} type="date" id="date" placeholder='' />
              </div>
              <div className={styles.input} >
                  <label htmlFor="" className={styles.inputWrappLabel}>Votre activité</label>
                    {/* <MdWork className={styles.icon} /> */}
                    <select className={styles.iW} name="" id="">
                      <option value="Ingénieur">Ingénieur</option>
                      <option value="Ingénieur">Ingénieur</option>
                      <option value="Ingénieur">Ingénieur</option>
                      <option value="Ingénieur">Ingénieur</option>
                      <option value="Ingénieur">Ingénieur</option>
                      <option value="Ingénieur">Ingénieur</option>
                      <option value="Ingénieur">Ingénieur</option>
                    </select>
                </div>
                <div className={styles.input} >
                  <label htmlFor="" className={styles.inputWrappLabel}>Choisir le capital </label>
                  {/* <PiUserListFill className={styles.icon}/> */}
                  <select className={styles.iW} name="" id="">
                    <option value="10000">10000</option>
                    <option value="20000">20000</option>
                    <option value="30000">30000</option>
                    <option value="40000">40000</option>
                  </select>
                </div>
            </div>
            <div className={styles.inputDivTow}>
              <div className={styles.inputO} >
                <label htmlFor="" className={styles.inputWrappLabel}>Voudriez-vous avoir une indemnité journalière </label>
                <select className={styles.iW} name="" id="">
                  <option value="Choisissez une option">Choisissez une option</option>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
              </div>
              <div className={styles.inputO} >
                <label htmlFor="" className={styles.inputWrappLabel}>Saisir le montant journaliére souhaitée</label>
                <input className={styles.iW} type="number" />
              </div>
              <div className={styles.inputO} >
                <label htmlFor="" className={styles.inputWrappLabel}>Saisir la Franchise:</label>
                <select className={styles.iW} name="" id="">
                  <option value="Veuillez selectionner nombre de jour">Selectionner nombre de jour</option>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
              </div>
            </div>
            <div className={styles.inputDivThree}>
              
              <div className={styles.inputT} >
                <label htmlFor="" className={styles.inputWrappLabel}>Voudriez-vous que les frais médicaux soient remboursés?</label>
                <select className={styles.iW} name="" id="">
                  <option value="Choisir une option">Choisir une option</option>
                  <option value="Oui">Oui</option>
                  <option value="Non">Non</option>
                </select>
              </div>
              <div className={styles.inputT}>
                <label htmlFor="" className={styles.inputWrappLabel}>Le plafond des frais médicaux à rembourser:</label>
                <select className={styles.iW} name="" id="">
                  <option value="0">0</option>
                    <option value="200">200</option>
                </select>
              </div>  
              {/* <div className={styles.inputWrapp}>
                <label htmlFor="" className={styles.inputWrappLabel}>Prime Assurance Vie  *</label>
                <input className={styles.iW} type="number" />
              </div>
              <div className={styles.button}>
                  <button className={styles.btn}>Calculer</button>
              </div> */}
            </div>
          </from>
                          
          )}  
        
      </div>
    </div>
  );
};

export default Accident;