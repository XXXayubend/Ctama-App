import React from 'react'
import styles from './Mortalité.module.css'
import Sidebar from '../../Sidebar Section/Sidebar';

// IMPORTED VIDEO 
import video from '../../../LoginAssets/morta0.mp4'
// IMPORTED ICON
import { GrValidate } from "react-icons/gr";

const Mortalité = () => {
    return (
        <div className={styles.MortalitePage}>
            <p className={styles.BigTitle}>
            Assurance mortalité du bétail
            </p>
            <div className={styles.container}>
                <div className={styles.videoDiv}>
                    <video src={video} autoPlay muted loop></video>
                </div>
            </div>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.Inscription}>
                <div className={styles.textDiv}>
                    <p className={styles.text}>
                        Créer votre contrat
                    </p>
                </div>
                <div className={styles.inputDivOne}>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Type de propriété * </label>
                        <select className={styles.iW} name="" id="">
                            <option value=""></option>
                            <option value="--Choisir votre type--">--Choisir votre type--</option>
                            <option value="Ferme">Ferme</option>
                            <option value="Ranch">Ranch</option>
                        </select>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Superficie de la propriété * </label>
                        <input type="number" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Localisation de la propriété * </label>
                        <input type="text" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Type d'élevage</label>
                        <input type="text" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Montant de la couverture souhaitée</label>
                        <input type="number" className={styles.iW} />
                    </div>
                </div>
                <div className={styles.inputDivTow}>
                    
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Durée de la couverture souhaitée </label>
                        <select name="" id="" className={styles.iW}>
                            <option value="1 ans" className={styles.iW}>1 ans</option>
                            <option value="2 ans" className={styles.iW}>2ans</option>
                            <option value="3ans" className={styles.iW}>3 ans</option>
                        </select>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Type de biens </label>
                        <select name="" id="" className={styles.iW}>
                            <option value="Vaches" className={styles.iW}>Vaches</option>
                            <option value="Chevaux" className={styles.iW}>Chevaux</option>
                            <option value="Autre" className={styles.iW}>Autre</option>
                        </select>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Valeur des biens</label>
                        <input type="number" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Âge des biens (si applicable)</label>
                        <input type="number" className={styles.iW} />
                    </div>
                </div>
                    
                <div className={styles.button}>
                    <button className={styles.btn} type="submit">Valider</button>
                </div>
            </div>
        </div>
    )
}

export default Mortalité