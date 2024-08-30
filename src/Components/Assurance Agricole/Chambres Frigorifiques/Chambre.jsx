import React from "react";
import styles from './chambre.module.css'
import Sidebar from "../../Sidebar Section/Sidebar";
// IMPORTED VIDEO
import video from '../../../LoginAssets/fregi.mp4'

const Chambre = () => {
    return (
        <div className={styles.ChambrePage}>
            <p className={styles.BigTitle}>CHAMBRES FRIGORIFIQUES</p>
            <div className={styles.container}>
                <div className={styles.videoDiv} >
                    <video src={video} autoPlay muted loop></video>
                </div>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.textDiv}>
                    <p className={styles.textDi}>
                        Créer votre contrat 
                    </p>
                </div>    
                <div className={styles.inputDivOne}>
                            
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Nom de l'entreprise</label>
                        <input type="text" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Adresse de l'entreprise</label>
                        <input type="text" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Numéro de téléphone de l'entreprise</label>
                        <input type="number" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Type de chambre frigorifique</label>
                        <select name="" id="" className={styles.iW}>
                            <option value="Chambre froide">Chambre froide</option>
                            <option value="Chambre congelée">Chambre congelée</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                </div>
                <div className={styles.inputDivTow}>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Taille de la chambre frigorifique (en mètres)</label>
                        <input type="number" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Température de stockage souhaitée</label>
                        <input type="number" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Type de produits stockés</label>
                        <select name="" id="" className={styles.iW}>
                            <option value="Fruits">Fruits</option>
                            <option value="Légumes">Légumes</option>
                            <option value="Viandes">Viandes</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Type d'assurance souhaitée</label>
                        <select name="" id="" className={styles.iW}>
                            <option value="Contre les dommages">Contre les dommages</option>
                            <option value="Contre les pertes">Contre les pertes</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                </div>
                <div className={styles.inputDivThree}>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Montant de la valeur assurée (dinars)</label>
                        <input type="number" className={styles.iW} placeholder="En dinars tunisien"/>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Période de couverture</label>
                        <select name="" id="" className={styles.iW}>
                            <option value="1 ans">1 ans</option>
                            <option value="2 ans">2 ans</option>
                            <option value="3 ans">3 ans</option>
                            <option value="4 ans">4 ans</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Date de début</label>
                        <input type="date" className={styles.iW} placeholder="En dinars tunisien"/>
                    </div>
                </div>
                <div className={styles.button}>
                    <button className={styles.btn} type="submit">Confirmer</button>
                </div>
            </div>    
        </div>
    )
}

export default Chambre