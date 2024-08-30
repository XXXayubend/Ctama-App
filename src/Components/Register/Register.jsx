import React from 'react'
import { useForm } from 'react-hook-form';
import styles from './Register.module.css'
import Sidebar from '../Sidebar Section/Sidebar'
import Gouvernant from './Gouvernant/Gouvernant'
import { Link } from 'react-router-dom'

// import images, videos
import video1 from '../../LoginAssets/video10.mp4'
// import icons
import {FaUserShield} from 'react-icons/fa'
// import { BsFillShieldLockFill } from "react-icons/bs"
import { MdEmail } from "react-icons/md";
import { AiOutlineSwapRight } from "react-icons/ai";
// import { FaPhone } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { FaTransgender } from "react-icons/fa";

const Register = () => {
    // const { register, handleSubmit, errors } = useForm();
  
    // const onSubmit = async (data) => {
    //   Envoi des données au serveur
    // };
    return (
        <div className={styles.registerPage}>
            <div className={styles.container}>
                
                <div className={styles.videoDiv}>
                    <video className={styles.video} src={video1} autoPlay muted loop></video>
                </div>    
                <div className={styles.side}>
                    <Sidebar />
                </div> 
                    <div className={styles.textDiv}>
                        <h2 className={styles.title}>Bienvenue chez Ctama</h2>
                        <p className={styles.textDii}>Assurance</p>
                    </div>
                    <div className={styles.FooterDiv}>
                        <Link to={'/'}>
                        <button className={styles.btn}>Sing up</button>
                        </Link>
                    </div>
                </div>

                <div className={styles.formDiv}>
                    <form  className={styles.formGrid}>  
                        <div className={styles.inputDivOne}>
                        <div className={styles.inputDiv}>
                            <label className={styles.inputLabel} htmlFor="Nom complet">Nom complet * </label>
                            <div className={styles.inputFlex}>
                                <FaUserShield className={styles.icon} />
                                <input
                                    className={styles.inputWrapper}
                                    type="text"
                                    id="Nom complet"
                                    // {...register('nomComplet', {
                                    //     required: true,
                                    //     minLength: 2,
                                    //     maxLength: 50,
                                    // })}
                                />
                                {/* {errors.nomComplet && <div className={styles.error}>{errors.nomComplet.message}</div>} */}
                            </div>
                        </div>

                        <div className={styles.inputDiv}>
                            <label className={styles.inputLabel} htmlFor="adresse email"> Adresse email * </label>
                            <div className={styles.inputFlex}>
                                <MdEmail className={styles.icon} />
                                <input
                                    className={styles.inputWrapper}
                                    type="email"
                                    id="email"
                                    // {...register('email', {
                                    //     required: true,
                                    //     pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    // })}
                            />
                            {/* {errors.email && <div className={styles.error}>{errors.email.message}</div>} */}
                            </div>
                        </div>

                        <div className={styles.inputDiv}>
                            <label className={styles.inputLabel} htmlFor="password"> Mot de passe pour votre compte CTAMA * </label>
                            <div className={styles.inputFlex}>
                                <RiLockPasswordFill className={styles.icon} />
                                <input
                                    className={styles.inputWrapper}
                                    type="password"
                                    id="password"
                                    // {...register('password', {
                                    //     required: true,
                                    //     minLength: 8,
                                    //     maxLength: 50,
                                    // })}
                                />
                                {/* {errors.password && <div className={styles.error}>{errors.password.message}</div>} */}
                            </div>
                        </div>    
                        </div> 
                        
                        <div className={styles.inputDivTow}>
                        <div className={styles.inputDiv}>
                            <label className={styles.inputLabel} htmlFor="password" autocomplete="new-password"> Confirme votre mot de passe * </label>
                            <div className={styles.inputFlex}>
                                <RiLockPasswordFill className={styles.icon} />
                                <input className={styles.inputWrapp} type="password" id='password' placeholder='' />
                            </div>
                        </div>

                        <div className={styles.inputDiv}>
                            <label className={styles.inputLabel} htmlFor="date">Date de naissance * </label>
                            <div className={styles.inputFlex}>
                                <BsFillCalendarDateFill className={styles.icon}/>
                                <input className={styles.inputWrapp} type="date" id='date' placeholder='' />
                            </div>
                        </div>

                        <div className={styles.inputDiv}>
                            <label className={styles.inputLabel} htmlFor="genre">Genre * </label>
                            <div className={styles.inputFlex}>
                                <FaTransgender className={styles.icon} />
                                <select className={styles.inputWrapp} name="" id="">
                                    <option value=""> Mr </option>
                                    <option value=""> Mme</option>
                                </select>
                            </div>
                        </div>
                        </div>
                        


                        <div className={styles.inputDiv}>
                            <div className={styles.inputFlex}>
                                
                                <Gouvernant />
                            </div>
                        </div>

                        <button type='submit' className={styles.btnn} >
                            <span className={styles.spa}>Register </span>
                            <AiOutlineSwapRight className={styles.icon} />
                        </button> 
                    </form>
                </div>
            </div>            
      
    )
}

export default Register

// const Register = () => {
//     const { register, handleSubmit, errors } = useForm();
  
//     const onSubmit = async (data) => {
//       // Envoi des données au serveur
//     };
  
//     return (
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <div className={styles.inputDiv}>
//           <label className={styles.inputLabel} htmlFor="Nom complet">Nom complet * </label>
//           <div className={styles.inputFlex}>
//             <FaUserShield className={styles.icon} />
//             <input
//               className={styles.inputWrapper}
//               type="text"
//               id="Nom complet"
//               {...register('nomComplet', {
//                 required: true,
//                 minLength: 2,
//                 maxLength: 50,
//               })}
//             />
//             {errors.nomComplet && <div className={styles.error}>{errors.nomComplet.message}</div>}
//           </div>
//         </div>
  
//         <div className={styles.inputDiv}>
//           <label className={styles.inputLabel} htmlFor="adresse email"> Adresse email * </label>
//           <div className={styles.inputFlex}>
//             <MdEmail className={styles.icon} />
//             <input
//               className={styles.inputWrapper}
//               type="email"
//               id="email"
//               {...register('email', {
//                 required: true,
//                 pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
//               })}
//             />
//             {errors.email && <div className={styles.error}>{errors.email.message}</div>}
//           </div>
//         </div>
  
//         <div className={styles.inputDiv}>
//           <label className={styles.inputLabel} htmlFor="password"> Mot de passe pour votre compte CTAMA * </label>
//           <div className={styles.inputFlex}>
//             <RiLockPasswordFill className={styles.icon} />
//             <input
//               className={styles.inputWrapper}
//               type="password"
//               id="password"
//               {...register('password', {
//                 required: true,
//                 minLength: 8,
//                 maxLength: 50,
//               })}
//             />
//             {errors.password && <div className={styles.error}>{errors.password.message}</div>}
//           </div>
//         </div>
  
//         <button type="submit" className={styles.btnn}>
//           <span className={styles.spa}>Register </span>
//           <AiOutlineSwapRight className={styles.icon} />
//         </button>
//       </form>
//     );
//   };