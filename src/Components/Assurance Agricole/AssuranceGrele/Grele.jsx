import React from "react";
import styles from './Grele.module.css'
import Sidebar from '../../Sidebar Section/Sidebar'
// imported video
import video from '../../../LoginAssets/grele2.mp4'

const Grele = () => {
    return (
        <div className={styles.grelePage}>
          <p className={styles.bigTitle}>ASSURANCE GRÊLE </p> 
          <div className={styles.container}>
            <div className={styles.videoDiv}>
                <video src={video} autoPlay muted loop></video>
            </div>
            <div className={styles.sidebar}>
                <Sidebar />
            </div>
            <div className={styles.textDiv}>
                <p className={styles.textD}>
                    Créer ton contart 
                </p>
            </div>
            <div className={styles.inputDivOne}>
                    <div className={styles.inputWrapper}>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>La nature de la production :</label>
                            <select className={styles.iW} name="" id="">
                                <option value="--Choisir le type--">--Choisir le type--</option>
                                <option value="Arbres fruitiers">Arbres fruitiers</option>
                                <option value="Principales activités agricoles">Principales activités agricoles</option>
                            </select>
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Rendement attendu * </label>
                            <input type="number" className={styles.iW} />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Prix de vente * </label>
                            <input type="number" className={styles.iW} />
                        </div>
                        
                    </div>
                </div>
                <div className={styles.inputDivTow}>
                    <div className={styles.inputWrapper}>
                        
                    <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Gouvernant * </label>
                            <input type="text" className={styles.iW} />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Code postale * </label>
                            <input type="number" className={styles.iW} />
                        </div>
                        <div className={styles.input}>
                            <label htmlFor="" className={styles.inputLabel}>Saisir les risques possible * :</label>
                            <select className={styles.iW} name="" id="">
                                <option value="--choisir le type--">--choisir le type--</option>
                                <option value="Lessivage">Lessivage</option>
                                <option value="Blessures et perforations">Blessures et perforations</option>
                                <option value="Formation d’une croûte de terre compacte">Formation d’une croûte de terre compacte</option>
                                <option value="Contamination">Contamination</option>
                                <option value="Pourriture">Pourriture</option>
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
                    <button className={styles.btn} type="submit">Enregistrer</button>
                </div>
          </div> 
        </div>
    )
}

export default Grele