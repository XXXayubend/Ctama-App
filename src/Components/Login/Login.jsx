import React from 'react'
import styles from './Login.module.css'
import Sidebar from '../Sidebar Section/Sidebar'
import { Link } from 'react-router-dom'

// import images, videos
import video from '../../LoginAssets/video.mp4'
import logo from '../../LoginAssets/logo.png'
// import icons
import {FaUserShield} from 'react-icons/fa'
import { BsFillShieldLockFill } from "react-icons/bs"
import { AiOutlineSwapRight } from "react-icons/ai"

const Login = () => {
    return (
        <div className={styles.loginPage}>
            <div className={styles.container}>
                
                <div className={styles.videoDiv}>
                    <video className={styles.video} src={video} autoPlay muted loop></video>
                </div>  
                <div className={styles.side}>
                   <Sidebar />
                </div>
                    <div className={styles.textDiv}>
                        <h2 className={styles.title}>Bienvenue chez Ctama</h2>
                        <p className={styles.textO}>Assurance</p>
                    </div>

                    <div className={styles.FooterDiv}>
                        <span className={styles.text}>Vous avez un account?</span>
                        <Link to={'/register'}>
                        <button className={styles.btn}>Sing up</button>
                        </Link>
                    </div>
                </div>

                <div className={styles.formDiv}>
                    {/* <div className={styles.headerDiv}>
                        <img className={styles.img} src={logo} alt="Logo Image" />
                        
                    </div> */}

                    <form action="" className={styles.formGrid}>
                        {/* <span className={styles.showMessage}>L'état de connexion sera affiché ici</span> */}
                        <div className={styles.inputDiv}>
                            <label className={styles.label} htmlFor="username">Adersse Email</label>
                            <div className={styles.inputO}>
                                <FaUserShield className={styles.icon}/>
                                <input className={styles.input} type="text" id='username' placeholder='votre adresse' />
                            </div>  
                        </div>
                        <div className={styles.inputDiv}>
                            <label className={styles.label} htmlFor="password">Mot de passe </label>
                            <div className={styles.inputO}>
                                <BsFillShieldLockFill className={styles.icon}/>
                                <input className={styles.input} type="password" id='password' placeholder='votre mot de passe' />
                            </div>
                        </div>

                        <button type='submit' className={styles.btnFlex}>
                            <span>Login </span>
                            <AiOutlineSwapRight className={styles.icon}/>
                        </button> 
                        
                        <span className={styles.forgotPassword}>
                            Mot de passe oubliée ? <a href="">Cliquez ici</a>
                        </span>

                    </form>
                </div>
            </div>            
    )
}

export default Login