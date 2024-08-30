import React from "react";
import styles from './AgricoleIncendie.module.css'
import Sidebar from '../../Sidebar Section/Sidebar'
import Gouvernantee from './Gouvernantee'
// IMPORTED VIDEO
import video from '../../../LoginAssets/incendie1.mp4'

const AssurenceIncendie = () => {
    return(
        <div className={styles.IncendiePage}>
            <p className={styles.bigTitle}>ASSURANCE INCENDIE</p>
            <div className={styles.container}>
                <div className={styles.videoDiv}>
                    <video src={video} autoPlay muted loop></video>
                </div>
                <div className={styles.sidebar}>
                    <Sidebar />
                </div>
                <div className={styles.textDiv}>
                    <p className={styles.title}>
                        Protégez votre production contre l’incendie :
                    </p> 
                    <p className={styles.text}>
                        Créer votre contrat :
                    </p>
                </div>
                <form className={styles.formDiv}>
                    <div className={styles.inputOne}>
                        <div className={styles.inputWrapp}>
                            <label className={styles.inputWrapLabel} htmlFor="">La nature de la production </label>
                            <select className={styles.iW}>
                                <option className={styles.iW} value=""></option>
                                <option className={styles.iW} value="Arbres fruitiers">Arbres fruitiers</option>
                                <option className={styles.iW} value=" Principales activités agricoles"> Principales activités agricoles</option>
                            </select>
                        </div>
                        <div className={styles.inputWrapp}>
                            <label htmlFor="" className={styles.inputWrapLabel}>Rendement attendu * </label>
                            <input type="number" className={styles.iW}  />
                        </div>
                        <div className={styles.inputWrapp}>
                                <label className={styles.inputWrapLabel} htmlFor="">Prix de vente * </label>
                                <input type="number" className={styles.iW}  />
                        </div>
                    </div>
                        
                    <div className={styles.inputTow}>
                            
                        <div className={styles.inputWrapp}>
                            <label htmlFor="" className={styles.inputWrapLabel}>Saisir les risques possible * </label>
                            <select className={styles.iW} >
                                <option value=""></option>
                                <option value="Lessivage">Lessivage</option>
                                <option value="Blessures et perforations">Blessures et perforations</option>
                                <option value="Formation d’une croûte de terre compacte">Formation d’une croûte de terre compacte</option>                                    <option value="Contamination">Contamination</option>
                                <option value="Pourriture">Pourriture</option>
                            </select>
                        </div>
                        <div className={styles.inputWrapp}>
                                <label className={styles.inputWrapLabel} htmlFor="">Gouvernant * </label>
                                <input type="text" className={styles.iW}  />
                        </div>
                        <div className={styles.inputWrapp}>
                                <label className={styles.inputWrapLabel} htmlFor="">Code postale * </label>
                                <input type="number" className={styles.iW}  />
                        </div>
                    </div>
                        
                    <button className={styles.btn} type="submit">Enregistrer</button>
                </form>
            </div>
        </div>
    )
}

export default AssurenceIncendie