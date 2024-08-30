import React from 'react'
import styles from './top.module.css'
import Sidebar from '../../Sidebar Section/Sidebar'
import { Link } from 'react-router-dom'
// IMPORTED VIDEO 
import video from '../../../LoginAssets/contact.mp4'
 
const Top = () => {
    return (
        <div className={styles.topPage}>
            <div className={styles.container}>
                <div className={styles.videoDiv}>
                    <video src={video} autoPlay muted loop className={styles.video}></video>
                    <div className={styles.side}>
                        <Sidebar />
                    </div>         
                    <div className={styles.textDiv}>
                        
                        <h2 className={styles.title}>Bienvenue chez CTAMA  </h2>
                        <p className={styles.text}>
                            CTAMA Assurances vous offre un espace personnalisé 
                            avec plusieurs 
                        </p>
                        <p className={styles.textO}>
                            services en ligne pour consulter et gérer vos contrats    
                        </p> 
                        <p className={styles.textT}>
                            d'assurance en toute autonomie   
                        </p>    
                    </div>
                    <div className={styles.FooterDiv}>
                        <span className={styles.textOne}>Nouveau chez CTAMA?</span>
                        <Link to={'/register'}>
                        <button className={styles.btn}>Créer votre compte CTAMA</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Top