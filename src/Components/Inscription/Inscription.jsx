import React, { useState } from 'react'
import styles from './Inscription.module.css'
// Imported video
import video1 from '../../LoginAssets/video1.mp4'
// imported button
import ToggleButton from './ToggleBottom/ToggleButton'
// imported Icons
import { FaFileAlt } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { HiOutlineCheck } from "react-icons/hi";
import { IoIosRadioButtonOff } from "react-icons/io";

const Inscription = () => {
        const [isChecked, setIsChecked] = useState([false, false]);
      
        const handleCheckboxChange = (index) => (event) => {
          const newStates = [...isChecked];
          newStates[index] = event.target.checked;
          setIsChecked(newStates);
        };
    return (
        <div className={styles.inscriptionPage}>
            <div className={styles.container}>
                <div className={styles.videoDiv}>
                    <video src={video1} autoPlay muted loop></video>
                    <div className={styles.textDiv}>
                        <h2 className={styles.title} >Inscription</h2>
                    </div>
                    {/* <div className={styles.menu}>
                        <ul className={styles.navItem1}>
                            <li className={styles.navList1}>
                                <FaFileAlt />
                            </li>

                            <li className={styles.navList1}>
                                <HiOutlineCheck />
                            </li>

                            <li className={styles.navList1}>
                                <FaRegUser />
                            </li>
                        </ul>
                    </div> */}
                    <div className={styles.textDiv}>
                        <span className={styles.iconWrapper} >
                            <IoIosRadioButtonOff />
                            <p className={styles.iconBeforeBlueBorderSmallText} >Si vous étes un souscripteur Santé veuillez contacter votre agence pour activer un accés</p>
                        </span>
                        <span className={styles.iconWrapper} >
                            <IoIosRadioButtonOff />
                            <p className={styles.iconBeforeBlueBorderSmallText} >Sauf numéro de téléphone et adresse email,les informations saisie ne pourront pas étre modifiées</p>
                        </span>
                    </div>

                    <form action="" className={styles.formGrid}>

                        <div className={styles.inputDiv1}>
                            
                                <div className={styles.inputWrapper} >
                                {/* http://localhost:5173/agricolene */}
                                </div>
                                <div className={styles.inputWrapper} >
                                    <label className={styles.inputWrapperLabel} htmlFor="Prénom">Prénom*</label>
                                    <input className={styles.inputWrapperInput}  type="text" id="Prénom" placeholder='Prénom' />
                                </div>
                                <div className={styles.inputWrapper} >
                                    <label className={styles.inputWrapperLabel} htmlFor="N° pièce d'identité">N° pièce d'identité*</label>
                                    <input className={styles.inputWrapperInput} type="text" id="N° pièce d'identité" placeholder="N° pièce d'identité" />
                                </div>
                            
                            
                        </div>

                        <div className={styles.inputDiv2}>
                            <div className={styles.inputWrapper} >
                                <label className={styles.inputWrapperLabel} htmlFor="Adresse email">Adresse email*</label>
                                <input className={styles.inputWrapperInput} type="email" id="email" placeholder='exemple@mail.com' />
                            </div>
                            <div className={styles.inputWrapper} >
                                <label className={styles.inputWrapperLabel} htmlFor="N°téléphone">N°téléphone*</label>
                                <input className={styles.inputWrapperInput} type="text" id="N°téléphone" placeholder='+216 | N°téléphone' />
                            </div>
                        </div>

                    </form>
                    <div className={styles.textDiv}>
                        <p>Vous étes CTAMA client ? </p>
                        <ToggleButton />
                    </div>

                    <form action="" className={styles.formGrid}>

                            <div className={styles.inputDiv3}>
                            <div className={styles.inputWraper}>
                                <label className={styles.inputWrapperLabel} htmlFor="Nationalité">Nationalité*</label>
                                <select className={styles.inputWrapperInput} id="Nationalité" required>
                                    <option value="">Nationalité</option>
                                    <option value="AFGHANE">AFGHANE</option>
                                    <option value="ALBANAISE">ALBANAISE</option>
                                    <option value="ALGERIENNE">ALGERIENNE</option>
                                    <option value="ALLEMANDE">ALLEMANDE</option>
                                    <option value="AMERICAINE">AMERICAINE</option>
                                    <option value="ANORRANE">ANORRANE</option>
                                    <option value="ANTILLAISE">ANTILLAISE</option>
                                    <option value="ARGENTINE">ARGENTINE</option>
                                    <option value="ARMINIENE">ARMINIENE</option>
                                    <option value="AUSTRALIENNE">AUSTRALIENNE</option>
                                    <option value="BAHAMAS">BAHAMAS</option>
                                    <option value="BELGE">BELGE</option>
                                    <option value="BELIZOISE">BELIZOISE</option>
                                    <option value="CANADIENNE">CANADIENNE</option>
                                    <option value="COLOMBIENNE">COLOMBIENNE</option>
                                    <option value="EGYPTIENNE">EGYPTIENNE</option>
                                    <option value="MALIENNE">MALIENNE</option>
                                    <option value="MAROCAINE">MAROCAINE</option>
                                    <option value="TUNISIENNE">TUNISIENNE</option>
                                </select>
                            </div>
                            <div className={styles.inputWrapper}>
                                <label className={styles.inputWrapperLabel} htmlFor="Civilité">Civilité*</label>
                                <select className={styles.inputWrapperInput} id="Civilité" required>
                                    <option value="">Civilité</option>
                                    <option value="Mr">Mr</option>
                                    <option value="Mme">Mme</option>
                                </select>
                            </div>
                             <div className={styles.inputWrapper}>
                                <label className={styles.inputWrapperLabel} htmlFor="Date de naissance">Date de naissance*</label>
                                <input className={styles.inputWrapperInput} type="date" id="Date de naissance" placeholder="Date de naissance" />
                            </div>
                            </div>
                           
                    </form>
                    <div className={styles.textDiv}>
                        <label htmlFor="">
                            <div>
                                <span className={styles.chackboxCircleCustom}>
                                    <input
                                        className={styles.checkboxCircle}
                                        type="checkbox"
                                        checked={isChecked[0]}
                                        onChange={handleCheckboxChange(0)}
                                        
                                    />
                                </span>
                                <p className={styles.iconBeforeBlueBorder} style={{ display: 'inline-block' , fontSize : '0.9rem'  }}>J'accepte la politique de gestion des données personnelles</p>
                            </div>
                            <div>
                            <span className={styles.checkboxCircleCustom}>
                                <input
                                    className={styles.checkboxCircle}
                                    type="checkbox"
                                    checked={isChecked[1]}
                                    onChange={handleCheckboxChange(1)}
                                />
                            </span>    
                            <p className={styles.iconBeforeBlueBorder} style={{ display: 'inline-block' , fontSize : '0.9rem'  }}>Je ne souhaite pas l'utilisation de mes données de contact (numéro du portable, mail, adresse postale...) dans le cadre de conseil commercial ou évènementiel</p>
                            </div>
                        </label>
                    </div>
                </div>
            </div>
            {/* <Footer/> */}
        </div>
    )
}

export default Inscription 


{/* <div className={styles.inputDiv}>
          <div className={styles.inputWrapper} >
            <label className={styles.inputWrapperLabel} htmlFor="Nom de l'agence">Nom de l'agence</label>
            <input className={styles.inputWrapperInput} type="text" id="Nom" placeholder="Nom de l'agence " />
          </div>
        </div>
        <div className={styles.inputDiv}>
          <div className={styles.inputWrapper}>
            <label className={styles.inputWrapperLabel} htmlFor="Gouvernant">Gouvernant</label>
            <Gouvernant  />
          </div>
        </div>  
        <div className={styles.inputDiv}>
          <div className={styles.inputWrapper} >
            <label className={styles.inputWrapperLabel} htmlFor="Agence">Agence</label>
            <select className={styles.inputWrapperInput} name="" id="">
              <option  value="Sélectionner une agence">Sélectionner une agence</option>
            </select>
          </div>
        </div> */}