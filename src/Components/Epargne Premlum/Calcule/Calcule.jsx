import React from "react";
import style from './Calcul.module.css'
import Sidebar from '../../Sidebar Section/Sidebar'
// import video 
import video from '../../../LoginAssets/calcul1.mp4'
const Calcul = () => {
    return (
        <div className={style.calculPage}>
            <div className={style.container}>
                <div className={style.videoDiv}>
                    <video src={video} autoPlay muted loop></video>
                </div>
                <div className={style.sidebar}>
                    <Sidebar />
                </div>
                <div className={style.textDiv}>
                    <h2 className={style.text}>Saisir les données de la simulation</h2>
                </div>
                <div className={style.inputDivOne}>
                    <div className={style.inputWrapper}>
                        <label htmlFor="" className={style.inputWrappLabel}>Date début effet : *</label>
                        <input className={style.iW} type="date" name="" id="" />
                    </div>
                    <div className={style.inputWrapper}>
                        <label htmlFor="" className={style.inputWrappLabel}>Salaire Imposable :</label>
                        <input className={style.iW} type="number" name="" id="" placeholder="en dinars tunisien"/>
                    </div>
                    <div className={style.inputWrapper}>
                        <label htmlFor="" className={style.inputWrappLabel}>Durée (par année): *</label>
                        <input className={style.iW} type="number" name="" id="" />
                    </div>
                </div>
                <div className={style.inputDivTow}>
                    <div className={style.inputWrapper}>
                        <label htmlFor="" className={style.inputWrappLabel}>Type : *</label>
                        <select className={style.iW} name="" id="">
                            <option className={style.iW} value="--choisir type versement--">--choisir type versement--</option>
                            <option className={style.iW} value="versement libre">versement libre</option>
                            <option className={style.iW} value="versement régulier">versement régulier</option>
                        </select>
                    </div>
                    <div className={style.inputWrapper}>
                        <label htmlFor="" className={style.inputWrappLabel}>Versement initial:</label>
                        <input className={style.iW} type="number" name="" id="" placeholder="en dinars tunisien"/>
                    </div>
                    <div className={style.inputWrapper}>
                        <label htmlFor="" className={style.inputWrappLabel}>Montant : *</label>
                        <input className={style.iW} type="number" name="" id=""/>
                    </div>
                    <div className={style.button}>
                        <button className={style.btn}>Calculer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Calcul