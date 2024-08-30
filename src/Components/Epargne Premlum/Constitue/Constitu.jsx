import React from "react";
import style from './Constitu.module.css'
import Sidebar from '../../Sidebar Section/Sidebar'
// import video 
import video from '../../../LoginAssets/const.mp4'
const Constitue = () => {
    return (
        <div className={style.ConstituePage}>
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
                        <label htmlFor="" className={style.inputWrappLabel}>Périodicité de versement : *</label>
                        <select className={style.iW} name="" id="">
                            <option className={style.iW} value="Chaque mois">Chaque mois</option>
                            <option className={style.iW} value="Chaque trimestre">Chaque trimestre</option>
                            <option className={style.iW} value="Chaque semestre">Chaque semestre</option>
                            <option className={style.iW} value="Chaque année">Chaque année</option>
                        </select>
                    </div>
                </div>
                <div className={style.inputDivTow}>
                    <div className={style.inputWrapper}>
                        <label htmlFor="" className={style.inputWrappLabel}>Capital final: *</label>
                        <input className={style.iW} type="number" name="" id="" placeholder="en dinars tunisien"/>
                    </div>
                    <div className={style.inputWrapper}>
                        <label htmlFor="" className={style.inputWrappLabel}>Durée (par année): *</label>
                        <input className={style.iW} type="number" name="" id=""/>
                    </div>
                    <div className={style.button}>
                        <button className={style.btn}>Constitueer</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Constitue