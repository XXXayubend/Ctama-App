import React from 'react'
import styles from './Top.module.css'
//imported video
import grele1 from '../../LoginAssets/grele2.mp4'

const Top = () => {
    return (
    <div className={styles.TopPage}>
        <div className={styles.container}>
            <div className={styles.videoDiv}>
                <video src={grele1} autoPlay muted loop></video>
            </div>  
            <div className={styles.textDiv}>
                <h1 className={styles.title}>
                    Protégez votre exploitation agricole et sécurisez vos revenus contre la gréle
                </h1>
            </div>
        </div>

    </div>

    )              
}

export default Top