import React, { useState } from 'react';
import styles from './ToggleButton.module.css'

function ToggleButton() {
  const [isChecked, setIsChecked] = useState(false);
  const [inscriptionNumber, setInscriptionNumber] = useState('');
  const [showInscriptionField, setShowInscriptionField] = useState(false);

  const handleToggle = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setShowInscriptionField(false);
    } else {
      setShowInscriptionField(true);
    }
  };

  const handleInscriptionNumberChange = (e) => {
    setInscriptionNumber(e.target.value);
  };

  return (
    <div className={styles.toggleButton}>
      <button className={isChecked ? 'active' : ''} onClick={handleToggle}>
        <span className={styles.toggleButtonLabel}>{isChecked ? 'Oui' : 'Non'}</span>
        <span className={styles.toggleButtonSlider} />
      </button>
      {showInscriptionField && (
        <div className={styles.inscriptionField}>
          <label className={styles.inputLabel}>Numéro d'inscription :</label>
          <input className={styles.inputWrapper} type="text" value={inscriptionNumber} onChange={handleInscriptionNumberChange} />
        </div>
      )}
    </div>
  );
}

export default ToggleButton;