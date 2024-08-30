import React from 'react'
import styles from './Responsabilité.module.css'
import Sidebar from '../../Sidebar Section/Sidebar';
// IMPORTED VIDEO 
import video from '../../../LoginAssets/responsabilité.mp4'
// IMPORTED ICON
import { GrValidate } from "react-icons/gr";

const Responsabilité = () => {
    return (
        <div className={styles.responsabilitePage}>
            <p className={styles.BigTitle}>RESPONSABILTE CIVILE AGRICOLE</p>
            <div className={styles.container}>
                <div className={styles.videoDiv}>
                    <video src={video} autoPlay muted loop></video>
                </div>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.textDiv}>
                    <h2 className={styles.title}>
                    Nous vous proposons des assurances spécifiques pour vous permettre d’exercer votre métier en toute sérénité.
                    </h2>
                </div>
                <div className={styles.inputDivOne}>
                    <div className={styles.inputDii}>
                        <label htmlFor="" className={styles.inputLabel}>Nom de travailleur</label>
                        <input type="text" className={styles.iW} />
                    </div>
                    <div className={styles.inputDii}>
                        <label htmlFor="" className={styles.inputLabel}>Adress de travailleur</label>
                        <input type="text" className={styles.iW} />
                    </div>
                    <div className={styles.inputDii}>
                        <label htmlFor="" className={styles.inputLabel}>Date de naissance de travailleur</label>
                        <input type="date" className={styles.iW} />
                    </div>
                    <div className={styles.inputDii}>
                        <label htmlFor="" className={styles.inputLabel}>Montant de la couverture souhaitée</label>
                        <select name="" id="" className={styles.iW}>
                            <option value="100" className={styles.iW}>100</option>
                            <option value="200" className={styles.iW}>200</option>
                            <option value="300" className={styles.iW}>300</option>                                <option value="400" className={styles.iW}>400</option>
                        </select>
                    </div>
                        
                </div>
                <div className={styles.inputDivTow}>
                    <div className={styles.inputDii}>
                        <label htmlFor="" className={styles.inputLabel}>Numéro de téléphone</label>
                        <input type="number" className={styles.iW} />
                    </div>
                    <div className={styles.inputDii}>
                        <label htmlFor="" className={styles.inputLabel}>Date de debut</label>
                        <input type="date" className={styles.iW} />
                    </div>
                    <div className={styles.inputDii}>
                        <label htmlFor="" className={styles.inputLabel}>Date de fin</label>
                        <input type="date" className={styles.iW} />
                    </div>
                </div>
                <div className={styles.btn}>
                    <button className={styles.btn} type="submit">Créer votre contrat</button>
                </div>
            </div>
        </div>

    )
}

export default Responsabilité