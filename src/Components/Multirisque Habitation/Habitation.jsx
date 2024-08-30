import React from 'react';
import styles from './Habitation.module.css'
import Sidebar from '../Sidebar Section/Sidebar'
// import ToggleButton from '../Inscription/ToggleBottom/ToggleButton';
import ToggleButton from './ToggleButton/toggleButon'
// imported video   
import video from '../../LoginAssets/habitation1.mp4'

const Habitation = () => {
  return (
    <div className={styles.habitationPage}>
      <div className={styles.container}>
        <div className={styles.videoDiv}>
          <video src={video} autoPlay muted loop></video>
        </div>
        <div className={styles.side}>
          <Sidebar />
        </div>
        <div className={styles.textDiv}>
          <h2 className={styles.textD}>Demande de devis multirisque habitation</h2>
          </div>
          {/* <div className={styles.textDi}>
            <h2 className={styles.textD}>informations générales sur l'assuré</h2>
          </div> */}
          <div className={styles.inputDiv}>
            <p className={styles.text}>Etes vous client CTAMA * </p>

            <ToggleButton />
            
            
            
          </div>
          <div className={styles.inputWrapOne}>
            <div className={styles.inputWrapp}>
              <label htmlFor="" className={styles.inputWrappLabel}>Nom complet*</label>
              <input className={styles.iW} type="text" name="name" id="" />
            </div> 

            <div className={styles.inputWrapp} >
                                
              <label htmlFor="" className={styles.inputWrappLabel}>Type d'identifiant*</label>
              <select className={styles.iW} name="" id="">
                <option value="CIN">CIN</option>
                <option value="Passeport">Passeport</option>
                <option value="Matricule fiscale">Matricule fiscale</option>
              </select>
            </div>

            <div className={styles.inputWrapp}>
              <label htmlFor="" className={styles.inputWrappLabel}>Date de naissance*</label>
              <input className={styles.iW} type="date" name="date" id="" />
            </div>

            <div className={styles.inputWrapp}>
              <label htmlFor="" className={styles.inputWrappLabel}>Code postal*</label>
              <input className={styles.iW} type="text" name="code postal" id="" />
            </div>
          </div>
          <div className={styles.inputWrapTow}>
              <div className={styles.inputWrapp}>
                <label htmlFor="" className={styles.inputWrappLabel}>Identifiant*</label>
                <input className={styles.iW} type="text" name="identifiant" id="" />
              </div>
              <div className={styles.inputWrapp}>
                <label htmlFor="" className={styles.inputWrappLabel}>Téléphone*</label>
                <input className={styles.iW} type="text" name="téléphone" id="" />
              </div>
              <div className={styles.inputWrapp}>
                <label htmlFor="" className={styles.inputWrappLabel}>Email*</label>
                <input className={styles.iW} type="email" name="email" id="" />
              </div>

            <div className={styles.inputW}>
              <label htmlFor="" className={styles.inputWrappLabel}>Vous étes : </label>
              <button className={styles.btn}>Occupant</button>
              <button className={styles.btn}>Non occupant</button>
            </div>
          </div>
          <div className={styles.inputWrapThree}>
          <div className={styles.inputWrappp}>
            
            <div className={styles.inputW}>
              <label htmlFor="" className={styles.inputWrappLabel}>Nombre de piéces du bien immobilier:</label>
              <input className={styles.iW} type="number" />
            </div>
            <div className={styles.inputW}>
              <label htmlFor="" className={styles.inputWrappLabel}>Montant Mobilier:</label>
              <input className={styles.iW} type="number" />
            </div>
            <div className={styles.inputW}>
              <label htmlFor="" className={styles.inputWrappLabel}>Montant immobilier:</label>
              <input className={styles.iW} type="number" />
            </div>
            <div className={styles.inputW}>
              <label htmlFor="" className={styles.inputWrappLabel}>Type de couverture:</label>
              <button className={styles.btn}>Basique</button>
              <button className={styles.btn}>Confort</button>
            </div>
            
          </div>
          </div>
          
        </div>
      </div>
  );
};

export default Habitation;