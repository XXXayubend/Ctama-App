import React, {useState } from 'react'
import styles from './Serre.module.css'
import Sidebar from '../../Sidebar Section/Sidebar'
// IMPORTED VIDEO
import video from '../../../LoginAssets/video7.mp4'
// IMPORTED ICON
import { GrValidate } from "react-icons/gr";

const MultisqueSerre = () => {

    const [formData, setFormData] = useState({
        gouvernorat: '',
        codePostale: '',
        natureProduction: '',
        rendementAttendu: '',
        prixVente: '',
        risques: '',
        // risques: [],
      });

    return (
        <div className={styles.SerrePage}>
            <p className={styles.BigTiltle}>ASSURANCE MULTIRISQUES SERRES</p>
            <div className={styles.container}>
                <div className={styles.videoDiv}>
                    <video src={video} autoPlay muted loop></video>
                </div>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.textDiv}>
                    <h1 className={styles.title}>
                        Créer votre contrat 
                    </h1>
                    <p className={styles.textDi}>
                        Une Expertise préalable sera effectuée pour évaluer les serres.
                    </p>
                </div>
                <div className={styles.inputDivOne}>
                    <div className={styles.inputWrap}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Adresse de la serre * </label>
                        
                        <input type="text" className={styles.iW} />
                        
                        
                    </div>
                    <div className={styles.inputWrap}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Taille de la serre (m²) * </label>
                        <input type="text" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrap}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Type de serre * </label>
                        <select name="" id="" className={styles.iW}>
                            <option value="" className={styles.inputWrapLabel}>--Choisir le type--</option>
                            <option value="" className={styles.inputWrapLabel}>Verre</option>
                            <option value="" className={styles.inputWrapLabel}>Polycarbonate</option>
                        </select>
                    </div>
                    
                </div>
                <div className={styles.inputDivTow}>
                <div className={styles.inputWrap}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Année de construction * </label>
                        <input type="date" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrap}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Valeur de la serre * </label>
                        <input type="number" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrap}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Type de couverture * </label>
                        <select name="" id="" className={styles.iW}>
                            <option value="--Choisir votre choix--">--Choisir votre choix--</option>
                            <option value="Dommages">Dommages</option>
                            <option value="Vol">Vol</option>
                            <option value="Responsabilité">Responsabilité</option>
                            <option value="Civile">Civile</option>
                            <option value="Autre">Autre</option>
                        </select>
                    </div>
                    
                    
                    
                </div>
                <div className={styles.inputDivThree}>
                    <div className={styles.inputWrap}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Montant de la couverture souhaitée * </label>
                        <input type="number" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrap}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Date de début de la police souhaitée * </label>
                        <input type="date" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrap}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Date de fin de la police souhaitée * </label>
                        <input type="date" className={styles.iW} />
                    </div>
                    
                </div>
                <div className={styles.inputDivFour}>
                    <div className={styles.inputWrap}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Polices d'assurance existantes  </label>
                        <input type="date" className={styles.iW} />
                    </div>
                    <div className={styles.inputWrap}>
                        <label htmlFor="" className={styles.inputWrapLabel}>Antécédents en matière de sinistres</label>
                        <input type="date" className={styles.iW} />
                    </div>
                </div>
                <div className={styles.button}>
                    <button className={styles.btn} type="submit">Valider</button>
                </div>
            </div>
        </div>
    )
}

export default MultisqueSerre