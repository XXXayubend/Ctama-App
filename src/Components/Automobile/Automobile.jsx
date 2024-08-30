import React, { useState } from "react";
import styles from './Automobile.module.css'
import Sidebar from '../Sidebar Section/Sidebar'
import ToggleButton from './toggleButton'
import Separator from '../Separator Section/Separator'
// imported video
import video from '../../LoginAssets/auto0.mp4'
// imported Icons
import { TbCircleNumber1 } from "react-icons/tb";
import { TbCircleNumber2 } from "react-icons/tb";
import { TbCircleNumber3 } from "react-icons/tb";
import { IoIosRadioButtonOff } from "react-icons/io";
// imported
const icon = document.getElementById('icon');
const wra = document.getElementById('wra');
const grid = document.getElementById('grid');
const label = document.getElementById('label');
const gri = document.getElementById('gri');
const container = document.getElementById('container');
const prev = document.getElementById('prev');

const Automobile = () => {
  const [numForms, setNumForms] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  // const [totalPages, setTotalPages] = useState(Math.ceil(numForms / 3));

  const handleNextClick = () => {
    if (currentPage < numForms) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className={styles.AutomobilePage}>
      <div className={styles.container}>
        <div className={styles.videoDiv}>
          <video src={video} autoPlay muted loop></video>
        </div>
        <div className={styles.sideba}>
          <Sidebar />
        </div>
        <div className={styles.textDiv}>
          <h2 className={styles.text}>
            Demande de devis automobile
          </h2>
        </div>
        <div className={styles.menu}>
          <ul className={styles.navItem}>
            <li className={styles.navList}>
              <div className={styles.separator}>
                <Separator />
              </div>
              <TbCircleNumber1 />
              <p className={styles.sousIcon}>Véhicule</p>
            </li>
            <li className={styles.navList}>
            <div className={styles.separatore}>
                <Separator />
              </div>
              <TbCircleNumber2 />
              <p className={styles.sousIcon}>Couverture</p>
            </li>
            <li className={styles.navList}>
              <TbCircleNumber3 />
              <p className={styles.sousIcon}>Conducteur</p>
            </li>
          </ul>
        </div>
          <div className={styles.butn}>
            <ToggleButton />
          </div>
       
      </div>
       
      {currentPage === 1 && (
        <form action="" className={styles.formGrid}>
        <div className={styles.inputD}>
          <div className={styles.inputWra} >
            <label htmlFor="Type d'identifiant" className={styles.inputLabel}>Type d'identifiant*</label>
            <select className={styles.inputWrapper} id="" required>
              <option className={styles.inputWrapper} value="CIN">CIN</option>
              <option className={styles.inputWrapper} value="Matricule facial">Matricule fasical</option>
            </select>
          </div>
          
          <div className={styles.inputWra}>
            <label className={styles.inputLabel} htmlFor="Identifiant">Identifiant*</label>
            <input className={styles.inputWrapper} type="text" id="Identifiant" placeholder="" />
          </div>
          
          <div className={styles.inputWra}>
            <label className={styles.inputLabel} htmlFor="Immatriculation" >Immatriculation*</label>
            <input className={styles.inputWrapper} type="text" id="Immatriculation" placeholder="" />
          </div>
        </div>
                </form>
            )}
            {[...Array(numForms)].slice(currentPage -1, currentPage).map((_, index) => (
              <form key={index} action="" className={styles.formGri}>
                <div className={styles.inputD}>
                  <div className={styles.inputWra} >
                    <label htmlFor="" className={styles.inputLabel}>Année de la premiére circulation*</label>
                    <select className={styles.inputWrapper} id="" required>
                      {Array.from(Array(124).keys()).map((year) => (
                      <option value={year + 1900}>{year + 1900}</option>
                      ))}
                    </select>
                  </div>
                <div className={styles.inputDivOne}>
                  <div className={styles.inputWra}>
                    <label htmlFor="" className={styles.inputLabel}>Usage</label>
                    <select className={styles.inputWrapper} id="" required>
                      <option value="">Usage privé et promenade</option>
                      <option value="">Autre</option>
                    </select>
                  </div>
                  <div className={styles.inputWra} >
                    <label htmlFor="Type d'identifiant" className={styles.inputLabel}>Energie*</label>
                    <select className={styles.inputWrapper} id="" required>
                      <option value="ESSENCE" className={styles.inputWraLabel}>ESSENCE</option>
                      <option value="GASOIL" className={styles.inputWraLabel}>GASOIL</option>
                      <option value="DIESEL" className={styles.inputWraLabel}>DIESEL</option>
                      <option value="AUTRE" className={styles.inputWraLabel}>AUTRE</option>
                    </select>
                  </div>
                  <div className={styles.inputWra}>
                    <label htmlFor="Puissance fiscale" className={styles.inputLabel}>Puissance fiscale*</label>
                    <input className={styles.inputWrapper} type="text" id="Puissance fiscale" placeholder="" />
                  </div>
                  <div className={styles.inputWra}>
                    <label className={styles.inputLabel} htmlFor="Nombre de places">Nombre de places*</label>
                    <input className={styles.inputWrapper} type="text" id="Nombre de places" placeholder="" />
                  </div>
                </div>
                </div> 
              </form>
    
            ))}

            <div className={styles.button}>
              <div className={styles.buttonContainer}>
                <button className={styles.btnPrev} onClick={handleNextClick}>Précédent</button>
              </div>
              <div className={styles.buttonContainer}>
                <button className={styles.btnNext} onClick={handlePrevClick}>Suivant</button>
              </div>
            </div>

    </div>
  )
}

export default Automobile 