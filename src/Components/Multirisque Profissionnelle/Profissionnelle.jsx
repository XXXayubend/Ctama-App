import React from 'react';
import styles from './Profissionnelle.module.css'
import Sidebar from '../Sidebar Section/Sidebar'
import TogggleButton from '../Inscription/ToggleBottom/ToggleButton'
// imported video 
import video from '../../LoginAssets/pro.mp4'


const Profissionnelle = () => {
  return (
    <div className={styles.profissionnellePage}>
      <div className={styles.container}>
        <div className={styles.videoDiv}>
          <video src={video} autoPlay muted loop></video>
        </div> 
        <div className={styles.sideba}>
          <Sidebar />
        </div>
        <div className={styles.textDiv}>
          <h2 className={styles.title}>
            Demande de devis profesionnelle
          </h2>  
        </div> 
        <div className={styles.inputDiv}>
          <p className={styles.text}>
            Etes vous client CTAMA
          </p>
          <TogggleButton />
        </div>
        <div className={styles.inputWrapOne}>
          <div className={styles.inputWrapp}>
            <label className={styles.inputLabel} htmlFor="">Nom * </label>
            <input type="text" className={styles.iW} />
          </div>
          <div className={styles.inputWrapp}>
            <label className={styles.inputLabel} htmlFor="">Prénom * </label>
            <input type="text" className={styles.iW} />
          </div>
          <div className={styles.inputWrapp}>
            <label className={styles.inputLabel} htmlFor="">Email * </label>
            <input type="text" className={styles.iW} />
            <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputLabel}>Votre métier * </label>
            <select name="" id="" className={styles.iW}>
              <option value="Ingénieur">Ingénieur</option>
              <option value="Pharmacien">Phramacien</option>
              <option value="Technicien">Technicien</option>
              <option value="Professeur">Professeure</option>
              <option value="Docteur">Docteur</option>
              <option value="Dentiste">Dentiste</option>
              <option value="Directeur">Directeur</option>
              <option value="Infermier">Inférmier</option>
            </select>
          </div>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputLabel}>Nom de l'entreprise * </label>
            <input type="text" className={styles.iW} />
          </div>
          </div>
          
        </div>
        <div className={styles.inputWrapTow}>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputLabel}>Adress de l'entreprise * </label>
            <input type="text" className={styles.iW} />
          </div>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputLabel}>Années d'expérience * </label>
            <input type="number" className={styles.iW} />
          </div>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputLabel}>Numéro de licence professionnelle * </label>
            <input type="number" className={styles.iW}  />
          </div>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputLabel}>Type d'assurance</label>
            <select name="" id="" className={styles.iW}>
              <option value="idk">idk</option>
              <option value="idk">idk</option>
              <option value="idk">idk</option>
              <option value="idk">idk</option>
            </select>
          </div>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputLabel}>Montant de la couverture * </label>
            <input type="number" className={styles.iW} />
          </div>
        </div>
        <div className={styles.inputWrapThree}>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputLabel}>Date d'effet * </label>
            <input type="date" className={styles.iW} />
          </div>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputLabel}>Durée de la police * </label>
            <input type="text" className={styles.iW} />
          </div>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputLabel}>Antécédents médicaux * </label>
            <input type="text" className={styles.iW} />
          </div>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputLabel}>Assurance précédente * </label>
            <input type="text" className={styles.iW} />
          </div>
          <div className={styles.inputWrapp}>
            <label htmlFor="" className={styles.inputLabel}>Historique des réclamations * </label>
            <input type="text" className={styles.iW} />
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.btn}>Demande</button>
        </div>
        
      </div>
    </div>
  );
};

export default Profissionnelle;