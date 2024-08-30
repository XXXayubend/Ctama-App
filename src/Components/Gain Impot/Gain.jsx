import React from "react";
import styles from './Gain.module.css'
import ToggleButton from "../Automobile/toggleButton"; 
import Sidebar from "../Sidebar Section/Sidebar";
// import video 
import video from '../../LoginAssets/gg.mp4'

const Gain = () => {
  return(
    <div className={styles.gainPage}>
      <div className={styles.container}>
        <div className={styles.videoDiv}>
          <video src={video} autoPlay muted loop></video>
        </div>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.textDiv}>
          <h2 className={styles.title}>Simulateur de gain d'impot</h2>
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
            <label htmlFor="" className={styles.inputWrappLabel}>Salaire Imposable * </label>
            <input className={styles.iW} type="number" />
          </div>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputWrappLabel}>Prime Assurance Vie  *</label>
            <input className={styles.iW} type="number" />
          </div>
          <div className={styles.button}>
              <button className={styles.btn}>Calculer</button>
          </div>
        </div>
      </from>
    </div>
  )
}

export default Gain

