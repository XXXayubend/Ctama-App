import React from "react";
import styles from './contact.module.css'
import Sidebar from '../Sidebar Section/Sidebar'
// import videos
import video from '../../LoginAssets/home1.mp4'

const Contact = () => {
    return (
        <div className={styles.ContactPage}>
            <p className={styles.bigTitle}>
                Contact
            </p>
            <div className={styles.container}>
                <div className={styles.videoDiv}>
                    <video  src={video} autoPlay muted loop></video>
                </div>
                <div className={styles.sidebare}>
                    <Sidebar />
                </div>
                <div className={styles.textDiv}>
                    <p className={styles.text}>
                        Veuillez remplir le formulaire ci-dessous, le service client 
                        vous répondront dans les plus brefs délais.
                    </p>
                </div>
                <div className={styles.formDiv}>
                    <form action="" className={styles.formGrid}>
                        <div className={styles.inputDiv}>
                            <label htmlFor="Nom" className={styles.inputLabel}> Nom * </label>
                            <input className={styles.inputWrapper} type="text" id='Nom ' placeholder='Votre nom ' />
                        </div>
                        <div className={styles.inputDiv}>
                            <label htmlFor="Prénom" className={styles.inputLabel}> Prénom * </label>
                            <input className={styles.inputWrapper} type="text" id='prenomom ' placeholder='Votre prénom' />
                        </div>
                        <div className={styles.inputDiv}>
                            <label htmlFor="email" className={styles.inputLabel}> Email * </label>
                            <input className={styles.inputWrapper} type="email" id='email ' placeholder='Votre email' />
                        </div>
                        <div className={styles.inputDiv}>
                            <label htmlFor="" className={styles.inputLabe} > Objet * </label>
                            <input type="text" className={styles.inW} placeholder="objet" />
                        </div>
                        <div className={styles.inputMessage} >
                            <label htmlFor="" className={styles.inputLab}> Message  </label>
                            <input type="text" className={styles.InpW} placeholder="message" />
                        </div>  
                        <div className={styles.FooterDiv}>
                        {/* <span className='text'>Have an account?</span> */}
                        {/* <Link to={'/inscription'}> */}
                        <button className={styles.btn}>Envoyer</button>
                        {/* </Link> */}
                    </div>                      
                    </form>
                </div>
                <div className={styles.formDi}>
                    <form action="" className={styles.formGri}>
                    <div className={styles.inputDiv}>
                            <label htmlFor="Nom" className={styles.inputLabel}> votre téléphone * </label>
                            <input className={styles.inputWrapper} type="text" id='telephone' placeholder=' votre numéro téléphone' />
                        </div>
                        <div className={styles.inputDiv}>
                            <label htmlFor="Entreprie" className={styles.inputLabel}> Entreprise * </label>
                            <input className={styles.inputWrapper} type="text" id='entreprise ' placeholder=' Entreprise' />
                        </div>
                        <div className={styles.inputDiv}>
                            <label htmlFor="" className={styles.inputLabel}>Département</label>
                            <select name="" id="" className={styles.iW} >
                                <option value=""></option>
                                <option value="Automobile">Automobile</option>
                                <option value="Agricole">Agricole</option>
                                <option value="Accident">Accident</option>
                                <option value="Habitation">Habitation</option>
                                <option value="Proficionnelle">Proficionnelle</option>
                            </select>
                        </div>
                        
                    </form>
                    
                </div>
                
            </div>
            
        </div>
    )
}

export default Contact
