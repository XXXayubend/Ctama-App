import React, { useState } from 'react';
import styles from './Agricole-grele.module.css';
// import Sidebar from '../Sidebar Section/Sidebar'
// import Gouvernant from '../Agence/Gouvernant';
import Top from './Top'
import ButtonSubmit from './ButtonSubmit'

import { IoIosRadioButtonOff } from "react-icons/io";
const AssuranceGréle = () => {
    const [governorate, setGovernorate] = useState('');
    const handleGovernorateChange = (governorate) => {
        setGovernorate(governorate);
    };

    const [selectedRisques, setSelectedRisques] = useState([]);

    const handleRisqueChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
        setSelectedRisques([...selectedRisques, value]);
    } else {
        setSelectedRisques(selectedRisques.filter((risque) => risque !== value));
    }
{/* <p className={styles.bigTitle}>ASSURANCE GRÊLE </p> */}
    
    };
    // const terrain = useTerrain();
    return(
        <div className={styles.AssuranceGrélPage}>
                <p className={styles.bigTitle}>ASSURANCE GRÊLE </p>
            <div className={styles.container}>

                <Top className={styles.Top}/>    
                    <p className={styles.textDii}>
                        Créer votre contrat : 
                    </p>
                    <div className={styles.button}>
                        <ButtonSubmit />
                    </div>
                </div>
            </div>
    )
}

export default AssuranceGréle

