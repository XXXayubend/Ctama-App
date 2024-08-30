import React, { useState } from 'react';
import styles from './Agricole.module.css';
import ButtonNavigation from './ButtonNavigation';
import Sidebar from '../Sidebar Section/Sidebar'
// import video
import video from '../../LoginAssets/video11.mp4'
// imported pages d'assurance les devis

const Agricolene = () => {
  // const [selectedAssurance, setSelectedAssurance] = useState('');
  // const [currentIndex, setCurrentIndex] = useState(0);
  const [showProposals, setShowProposals] = useState('')
  const sections = [
      {
        title: 'Section 1',
        content: (
          <div >
              <label htmlFor="" className={styles.inputWrappLabel}>Veuillez choisir votre assurance :</label>
              {showProposals && (
              <select className={styles.iW} name="" id="Assurance">
                  <option value="Assurance grêle">Assurance grêle</option>
                  <option value="Assurance incendie">Assurance incendie</option>
                  <option value="Mutirisques serres">Mutirisques serres</option>
                  <option value="Assurance mortalité du bétail">Assurance mortalité du bétail</option>
                  <option value="Responsabilité civile agriculteurs">Responsabilité civile agriculteurs</option>
                  <option value="Assurance multirisques apicole">Assurance multirisques apicole</option>
                  <option value="Chambres frigorifiques">Chambres frigorifiques</option>
                  <option value="Corp navire de pêche">Corp navire de pêche</option>
              </select>
            )}  
          </div>
        ),
      },

    
];


  return (
    <div className={styles.AgricolePage}>
      <div className={styles.container}>
        <div className={styles.videoDiv}>
          <video className={styles.video} src={video} autoPlay muted loop></video>
          <div className={styles.sidebar}>
            <Sidebar />
          </div>
        <div className={styles.textDi}>
          <h2 className={styles.textDii}>Demande de devis individuel Agricole</h2>
          <p className={styles.textDiii}>
            Nous offrons un rembourssement des frais de soins ainsi que des indemnités journalières suite 
            à un Agricole de la vie.
          </p>
        </div>  
          <br /><br /><br /><br /><br />

          <div className={styles.divText} >
            <label htmlFor="" className={styles.inputWrappLabel}>Veuillez choisir votre assurance :</label>
          </div>

        <ButtonNavigation
          // currentIndex={currentIndex}
          // sections={sections}
          // selectedAssurance={selectedAssurance}
          // handleNavigation={handleNavigation}
        />
        {/* <button onClick={handleNavigation} className={styles.btn}>Demander un devis</button> */}
        
      </div>

  </div>
</div>
  );
};

export default Agricolene;