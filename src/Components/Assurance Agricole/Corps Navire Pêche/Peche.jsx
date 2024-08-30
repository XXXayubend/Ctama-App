import React from "react";
import styles from './Peche.module.css'
import Sidebar from "../../Sidebar Section/Sidebar";
// IMPORTED VIDEO 
import video from '../../../LoginAssets/peche1.mp4'

// IMPORTED ICON
// import { GrValidate } from "react-icons/gr";

const Peche = () => {
    return (
        <div className={styles.PechPage}>
            <p className={styles.BigTitle}>
                Corps navire de pêche
            </p>
            <div className={styles.container}>
                <div className={styles.videoDiv}>
                    <video src={video} autoPlay muted loop></video>
                </div>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.textDiv}>
                    <p className={styles.textD}>
                        Créer votre contart 
                    </p>
                </div>
                <div className={styles.inputDivOne}>
                    <div className={styles.inputWrapper}>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Nom du navir</label>
                            <input type="text" className={styles.iW} />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Type de navire</label>
                            <select className={styles.iW} name="" id="">
                                <option value="--choisir le type--">--choisir le type--</option>
                                <option value="Voilier">Voilier</option>
                                <option value="Bateau à moteur">Bateau à moteur</option>
                            </select>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Longueur du navire</label>
                            <input type="number" className={styles.iW} />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Largeur du navire</label>
                            <input type="number" className={styles.iW} />
                        </div>
                        {/* <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Année de construction</label>
                            <input type="number" className={styles.iW} />
                        </div> */}
                    </div>
                </div>
                <div className={styles.inputDivTow}>
                    <div className={styles.inputWrapper}>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Année de construction</label>
                            <input type="number" className={styles.iW} />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Type d'assurance</label>
                            <select className={styles.iW} name="" id="">
                                <option value="--choisir le type--">--choisir le type--</option>
                                <option value="Assurance corps">Assurance corps</option>
                                <option value="Assurance navire">Assurance navire</option>
                            </select>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Montant de l'assurance</label>
                            <input type="number" className={styles.iW} />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Durée de l'assurance</label>
                            <select className={styles.iW} name="" id="">
                                <option value="1 ans">1 ans</option>
                                <option value="2 ans">2 ans</option>
                                <option value="3 ans">3 ans</option>
                                <option value="4 ans">4 ans</option>
                                <option value="5 ans">5 ans</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className={styles.inputDivThree}>
                    <div className={styles.inputWrapper}>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Date de début de l'assurance </label>
                            <input className={styles.iW} type="date" />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Date de fin de l'assurance</label>
                            <input type="date" className={styles.iW} />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Conditions particulières</label>
                            <input className={styles.iW} type="textarea" />
                        </div>
                    </div>
                </div>
                <div className={styles.button}>
                    <button className={styles.btn} type="submit">Confirmer</button>
                </div>
            </div>
        </div>
    )
}

export default Peche