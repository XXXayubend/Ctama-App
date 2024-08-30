import React from 'react'
import styles from './Apicoles.module.css'
import Sidebar from '../../Sidebar Section/Sidebar'
// IMPORTED VIDEO
import video from '../../../LoginAssets/apicole.mp4'


const Apicoles = () => {
    return (
        <div className={styles.ApicolesPage}>
            <p className={styles.BigTitle}>ASSURANCE MULTIRISQUES APICOLES</p>
            <div className={styles.container}>
                <div className={styles.videoDiv}>
                    <video src={video} autoPlay muted loop></video>
                </div>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.textDiv}>
                    <h2 className={styles.title}>CTAMA innove et vous propose le produit « APICERTI »</h2>
                </div>
                <div className={styles.inputDiv}>
                    <div className={styles.textDi}>
                        <p className={styles.text}>
                            Créer votre contrat
                        </p>
                    </div>
                <div className={styles.inputDivOne}>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Type d'apiculture * </label>
                        <select name="" id="" className={styles.iW}>
                            <option value="Apiculture" className="iW">Apiculture</option>
                            <option value="Production de miel" className="iW">Production de miel</option>
                        </select>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Nombre de dyar nhal * </label>
                        <input type="number" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Emplacement du rucher  * </label>
                        <input type="text" className={styles.iW} />
                    </div>
                </div>
                <div className={styles.inputDivTow}>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Type de couverture d'assurance  * </label>
                        <select name="" id="" className={styles.iW}>
                            <option value="Saisir" className="iW">Saire votre choix</option>
                            <option value="Dommages aux ruches" className="iW">Dommages aux ruches</option>
                            <option value="Perte d'abeilles" className="iW">Perte d'abeilles</option>
                        </select>
                    </div>
                    <div className={styles.inputWrapper}>
                        <label htmlFor="" className={styles.inputLabel}>Montant de la couverture souhaitée  * </label>
                        <input type="number" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrapper}>
                       
                        <label htmlFor="" className={styles.inputLabel}>Type de couverture d'assurance  * </label>
                        <select name="" id="" className={styles.iW}>
                            <option value="1 ans" className="iW">1 ans</option>
                            <option value="2 ans" className="iW">2 ans</option>
                            <option value="3 ans" className="iW">3 ans</option>
                        </select>
                    </div>
                </div>
                    <div className={styles.btn}>
                            <button className={styles.btn} type="submit">Valider</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Apicoles