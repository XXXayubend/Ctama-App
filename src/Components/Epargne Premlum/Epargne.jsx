import React from "react";
import styles from './Epargne.module.css'
import ToggleButton from "../Automobile/toggleButton";
import { useNavigate } from "react-router-dom";
import Sidebar from '../Sidebar Section/Sidebar'
// import video 
import video from '../../LoginAssets/epa1.mp4'

const Epargne = () => {
  const navigate = useNavigate();

  const handleCalculateClick = () => {
    navigate('/calcul', { replace: true }); // navigate to a new page
  };
  const handleConstituéClick = () => {
    navigate('/constitu', { replace: true }); // navigate to a new page
  };
  return(
    
    <div className={styles.epargnePage}> 
      <div className={styles.container}>
        <div className={styles.videoDiv}>
          <video src={video} autoPlay muted loop></video>
        </div>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.textDiv}>
          <h2 className={styles.title}>Simulation de votre épargne</h2>
        </div>
      </div>
      <div className={styles.input}>
        <p className={styles.textDiii}>Etes vous client CTAMA:*</p>
        <ToggleButton />
      </div>
      <from className={styles.formDiv}>
        <div className={styles.inputDivOne}>
          <div className={styles.inputWrapp}>
              <label htmlFor="" className={styles.inputWrappLabel}>Nom complet*</label>
              <input className={styles.iW} type="text" name="name" id="" />
          </div>
            <div className={styles.inputWrapp}>
              <label htmlFor="" className={styles.inputWrappLabel}>Type d'identifiant*</label>
              <select className={styles.iW} name="" id="">
                <option className={styles.iW} value="CIN">CIN</option>
                <option className={styles.iW} value="Passeport">Passeport</option>
                <option className={styles.iW} value="Matricule fiscale">Matricule fiscale</option>
              </select>
            </div>
            <div className={styles.inputWrapp}>
              <label htmlFor="" className={styles.inputWrappLabel}>Date de naissance*</label>
              <input className={styles.iW} type="date" name="date" id="" />
            </div>
        </div>
        <div className={styles.inputDivTow}>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputWrappLabel}>Identifiant*</label>
            <input className={styles.iW} type="text" name="identifiant" id="" />
          </div>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputWrappLabel}>Téléphone*</label>
            <input className={styles.iW} type="number" name="téléphone" id="" />
          </div>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputWrappLabel}>Email*</label>
            <input className={styles.iW} type="email" name="email" id="" />
          </div>
        </div>
        <div className={styles.inputDivThree}>
          <div className={styles.inputWrapp}>
              <label htmlFor="" className={styles.inputWrappLabel}>Code postal*</label>
              <input className={styles.iW} type="number" name="code postal" id="" />
            </div>
            <div className={styles.inputWrapp}>
              <p className={styles.text}>
                Calculer les montants des versements
              </p>
              <div className={styles.buttonWrapper}>
                <button className={styles.butn} onClick={handleCalculateClick}>Calculer les montants</button>
              </div>
              <p className={styles.text}>
                Constituer un capital pendant une période donnée
              </p>
              <div className={styles.buttonWrapper}>
                <button className={styles.butn} onClick={handleConstituéClick}>Constituer un capital</button>
              </div>
            </div>
          {/* <div className={styles.button}>
              <button className={styles.btn}>Calculer</button>
          </div> */}
        </div>
      </from>
    </div>
  )
}

export default Epargne