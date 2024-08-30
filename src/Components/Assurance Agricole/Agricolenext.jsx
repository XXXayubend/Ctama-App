import React, { useState } from 'react';
import styles from './Agricole.module.css';
import { Link } from 'react-router-dom'
import Agricolee from './Agricolee'


import ToggleButton from '../Inscription/ToggleBottom/ToggleButton'
import Footer from '../Footer Section/Footer'
import Sidebar from '../Sidebar Section/Sidebar'

// imported Icons
import { MdOutlineDateRange } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { PiUserListFill } from "react-icons/pi";
import { MdWorkHistory } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const Agricole = () => {
  const [showForm, setShowForm] = useState(false);
  const [currenPage, setCurrentPage] = useState(1);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  // const handleButtonClick1 = (direction) => {
  //   if (direction === 'next') {
  //       setCurrentPage(currentPage + 1);
  //   } else if (direction === 'prev') {
  //       setCurrentPage(currentPage -1 );
  //   }
  // };

  return (
    <div className={styles.AgricolePage}>
      <div className={styles.container}>
        <div className={styles.textDi}>
          <h2 className={styles.textDii}>Demande de devis individuel Agricole</h2>
          <p className={styles.textDiii}>
            Nous offrons un rembourssement des frais de soins ainsi que des indemnités journalières suite 
            à un Agricole de la vie.
          </p>
          <div className={styles.butto}>
            <button className={styles.btn} onClick={handleButtonClick}>Demander un devis</button>
          </div>
          <br /><br /><br /><br /><br />
          {showForm && (
                          <form action="" className={styles.formGrid}>
                            
                            <div className={styles.inputDiii}>
                                <div className={styles.inputWrapp} >
                                    <label htmlFor="" className={styles.inputWrappLabel}>Veuillez saisir votre date de naissance:</label>
                                    <MdOutlineDateRange className={styles.icon}/>
                                    <input className={styles.iW} type="date" id="date" placeholder='' />
                                </div>

                                {/* <div className={styles.buttonContainer}>
                                    <button className={styles.btn} onClick={handleButtonClick1}>Previous</button>                        
                                    <button className={styles.btn} onClick={handleButtonClick1}>Next</button>                                  
                                </div> */}

                                <div className={styles.inputWrapp} >
                                    <label htmlFor="" className={styles.inputWrappLabel}>Veuillez saisir votre activité</label>
                                    <MdWork className={styles.icon} />
                                    <select className={styles.iW} name="" id="">
                                      <option value="">Ingénieur</option>
                                      <option value="">Ingénieur</option>
                                      <option value="">Ingénieur</option>
                                      <option value="">Ingénieur</option>
                                      <option value="">Ingénieur</option>
                                      <option value="">Ingénieur</option>
                                      <option value="">Ingénieur</option>
                                    </select>
                                </div>

                                <div className={styles.buttonContainer}>
                                    <button className={styles.btn} onClick={handleButtonClick1}>Previous</button>
                                    <button className={styles.btn} onClick={handleButtonClick1}>Next</button>
                                </div>

                                <div className={styles.inputWrapp} >
                                    <label htmlFor="" className={styles.inputWrappLabel}>Veuillez choisir le capital qui sera servi aux ayants droit coisir par vos soins suite à un évènement Agricoleel de la vie </label>
                                    <PiUserListFill className={styles.icon}/>
                                    <select className={styles.iW} name="" id="">
                                      <option value="">10000</option>
                                      <option value="">20000</option>
                                      <option value="">30000</option>
                                      <option value="">40000</option>
                                      <option value="">50000</option>
                                    </select>
                                    <br />
                                    <label htmlFor="" className={styles.inputWrappLabel}>Veuillez saisir la capital souhaité, qui vous versé en cas d'incapacité parmanente </label>
                                    <MdWorkHistory className={styles.icon}/>
                                    <input className={styles.iW} type="number" />
                                </div>

                                <div className={styles.buttonContainer}>
                                    <button className={styles.btn} onClick={handleButtonClick1}>Previous</button>
                                    <button className={styles.btn} onClick={handleButtonClick1}>Next</button>
                                </div>

                                <div className={styles.inputWrapp} >
                                    <label htmlFor="" className={styles.inputWrappLabel}>Voudriez-vous avoir une indemnité journalière en cas d'incapacité temporaire</label>
                                    <select className={styles.iW} name="" id="">
                                      <option value="">Choisissez une option</option>
                                      <option value="">Oui</option>
                                      <option value="">Non</option>
                                    </select>
                                </div>

                                <div className={styles.buttonContainer}>
                                    <button className={styles.btn} onClick={handleButtonClick}>Previous</button>
                                    <button className={styles.btn} onClick={handleButtonClick}>Next</button>
                                </div>
                                <div className={styles.inputWrapp} >
                                    <label htmlFor="" className={styles.inputWrappLabel}>Veuillez saisir le montant de l'indemnité journaliére souhaitée, qui vous sera versée en cas d'incapacité temporaire</label>
                                    <input className={styles.iW} type="number" />
                                </div>

                                <div className={styles.buttonContainer}>
                                    <button className={styles.btn} onClick={handleButtonClick}>Previous</button>
                                    <button className={styles.btn} onClick={handleButtonClick}>Next</button>
                                </div>

                                <div className={styles.inputWrapp} >
                                    <label htmlFor="" className={styles.inputWrappLabel}>Veuillez saisir la Franchise:</label>
                                    <select className={styles.iW} name="" id="">
                                      <option value="">Veuillez selectionner nombre de jour</option>
                                      <option value="">Oui</option>
                                      <option value="">Non</option>
                                    </select>
                                </div>

                                <div className={styles.buttonContainer}>
                                    <button className={styles.btn} onClick={handleButtonClick}>Previous</button>
                                    <button className={styles.btn} onClick={handleButtonClick}>Next</button>
                                </div>

                                <div className={styles.inputWrapp} >
                                    <label htmlFor="" className={styles.inputWrappLabel}>Voudriez-vous que les frais médicaux soient remboursés?</label>
                                    <select className={styles.iW} name="" id="">
                                      <option value="">Choisir une option</option>
                                      <option value="">Oui</option>
                                      <option value="">Non</option>
                                    </select>

                                    <label htmlFor="" className={styles.inputWrappLabel}>Le plafond des frais médicaux à rembourser:</label>
                                    <select className={styles.iW} name="" id="">
                                      <option value="">0</option>
                                      <option value="">200</option>

                                    </select>
                                </div>

                                <div className={styles.buttonContainer}>
                                    <button className={styles.btn} onClick={handleButtonClick}>Previous</button>
                                    <button className={styles.btn} onClick={handleButtonClick}>Next</button>
                                </div>
                              <div className={styles.inputWrapp1}>
                              <FaUserAlt className={styles.icon1}/>
                                <div className={styles.inputWrapp}>
                                  <label htmlFor="" className={styles.inputWrappLabel}>Nom complet*</label>
                                  <input className={styles.iW} type="text" name="name" id="" />
                                </div> 

                                <div className={styles.inputWrapp} >
                                
                                    <label htmlFor="" className={styles.inputWrappLabel}>Type d'identifiant*</label>
                                    <select className={styles.iW} name="" id="">
                                      <option value="CIN">CIN</option>
                                      <option value="Passeport">Passeport</option>
                                      <option value="Matricule fiscale">Matricule fiscale</option>
                                    </select>
                                </div>

                                <div className={styles.inputWrapp}>
                                  <label htmlFor="" className={styles.inputWrappLabel}>Date de naissance*</label>
                                  <input className={styles.iW} type="date" name="date" id="" />
                                </div>

                                <div className={styles.inputWrapp}>
                                  <label htmlFor="" className={styles.inputWrappLabel}>Code postal*</label>
                                  <input className={styles.iW} type="text" name="code postal" id="" />
                                </div>
                              </div>

                              <div className={styles.inputWrapp2}>
                                <div className={styles.inputWrapp}>
                                  <label htmlFor="" className={styles.inputWrappLabel}>Identifiant*</label>
                                  <input className={styles.iW} type="text" name="identifiant" id="" />
                                </div>
                                <div className={styles.inputWrapp}>
                                  <label htmlFor="" className={styles.inputWrappLabel}>Téléphone*</label>
                                  <input className={styles.iW} type="text" name="téléphone" id="" />
                                </div>
                                <div className={styles.inputWrapp}>
                                  <label htmlFor="" className={styles.inputWrappLabel}>Email*</label>
                                  <input className={styles.iW} type="email" name="email" id="" />
                                </div>
                              </div>
                               
                            </div>
    
                          </form>
                          
          )}      
        </div>

      </div>
    </div>
  );
};

export default Agricole;
