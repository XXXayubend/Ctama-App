
import React, { useState, useEffect  }from "react";
import styles from './Sidebar.module.css'
import { Link } from 'react-router-dom'
// Imported images 
// import logo from '../../LoginAssets/lk.png'
import logo from '../../LoginAssets/logof.png'

// const define 

// imported icons
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineLocationOn } from "react-icons/md";
import { LuPhoneIncoming } from "react-icons/lu";
// import { LiCalculator } from "react-icons/bi";
import { BiCalculator } from "react-icons/bi";
import { LuHelpCircle } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { GrAnalytics } from "react-icons/gr";

const Sidebar = () => {
    const [showProposals, setShowProposals] = useState(false);
    const [showProposals1, setShowProposals1] = useState(false);
    // const [selectedProposal, setSelectedProposal] = useState(null);
    // const [selectedProposal1, setSelectedProposal1] = useState(null);
  
    const handleMenuClick = () => {
      setShowMenu(false);
    };

    const handleToggleProposals = () => {
        setShowProposals(!showProposals);
    }; 

    const handleToggleProposals1 = () => {
        setShowProposals1(!showProposals1);
    }; 

    const handleClickOutside = (event) => {
        if (!event.target.closest('.icon-button-container')) {
        setShowProposals(false);
        }
    };

    const handleClickOutside1 = (event) => {
        if (!event.target.closest('.icon-button-container')) {
        setShowProposals1(false);
        }
    };

    const handleSelectProposal = (proposal) => {
            setSelectedProposal(proposal);
            setShowProposals(false);
        };

    const handleSelectProposal1 = (proposal) => {
            setSelectedProposal1(proposal);
            setShowProposals1(false);
        };    

    // useEffect(() => {
    //     document.addEventListener('click', handleClickOutside);
    //     return () => {
    //     document.removeEventListener('click', handleClickOutside);
    //     };
    // }, []);
    // useEffect(() => {
    //     document.addEventListener('click', handleClickOutside1);
    //     return () => {
    //     document.removeEventListener('click', handleClickOutside1);
    //     };
    // }, []);

    return (
        <div className={styles.sideBar}>
            <div className={styles.logoDiv}>
                <img src={logo} alt="Logo Image" className={styles.img} />
            </div>
            <div className={styles.menu} onClick={handleMenuClick}>
                <ul className={styles.navItem}>
                    <li className={styles.navList}>  
                        <Link to={'/'}>
                            <AiOutlineUser className={styles.icon}/>
                            <span className={styles.textList}>Login</span>
                        </Link> 
                    </li>
                   
                    <li className={styles.navList}>
                        <div className={styles.iconButtonContainer}>
                        <button className={styles.proposalButton} onClick={handleToggleProposals1}>
                            <IoIosArrowDown  className={styles.iconO}/>
                        </button> 
  
                            <BiCalculator className={styles.icon} />
                            <span className={styles.textList}>Devis</ span> 

                                {showProposals1 && (
                                    <ul  className={styles.menuList} >
                                        <Link to={'/automobile'}>
                                        <li className={styles.textList} onClick={() => handleSelectProposal1('Automobile')}>Automobile</li>
                                        </Link>
                                        <Link to={'/habitation'}>
                                        <li className={styles.textList} onClick={() => handleSelectProposal1('Multirisque Habitation')}>Multirisque Habitation</li>
                                        </Link>
                                        <Link to={'/agricolene'}>
                                        <li className={styles.textList} onClick={() => handleSelectProposal1('Assurance Agricole')}>Assurance Agricole</li>
                                        </Link>
                                        <Link to={'/profisionnelle'}>
                                        <li className={styles.textList} onClick={() => handleSelectProposal1('Multirisque Professionnelle')}>Multirisque Professionnelle</li>
                                        </Link>
                                        <Link to={'/accident'}>
                                        <li className={styles.textList} onClick={() => handleSelectProposal1('Assurance Individuelle Accident')}>Assurance Individuelle Accident</li>
                                        </Link>
                                    </ul>   
                                )}
                        </div>
                    </li>        
                    
                    <li className={styles.navList}>
                        <div className={styles.iconButtonContainer}>
                            <button className={styles.proposalButton} onClick={handleToggleProposals}>
                                <IoIosArrowDown  className={styles.iconO}/>
                            </button>
                            <GrAnalytics className={styles.icon} />
                            <span className={styles.textList}>Simulateurs</span>
                            
                            {showProposals && (
                                <ul className={styles.menuList}>
                                    <Link to={'/epargne'}>
                                    <li className={styles.textList} onClick={() => handleSelectProposal('Epargne Premlum')}>Epargne Premlum</li>
                                    </Link>
                                    <Link to={'/gain'}>
                                    <li className={styles.textList} onClick={() => handleSelectProposal('Gain d impoot')}>Gain d'impot</li>
                                    </Link>
                                </ul>
                            )}
                            
                        </div>   
                    </li>
                   
                    <li className={styles.navList}>
                        <Link to={'/agence'}>
                             <MdOutlineLocationOn className={styles.icon}/>
                             <span className={styles.textList}>Agences</span>
                        </Link>
                         
                    </li>
                    
                    <li className={styles.navList}> 
                        <Link to={''}>
                             <LuHelpCircle className={styles.icon} /> 
                             <span className={styles.textList}>Aide en ligne</span>
                        </Link> 
                        
                    </li>
                    
                    <li className={styles.navList}>
                        <Link to={'/contact'}>
                            <LuPhoneIncoming className={styles.icon}/>
                            <span className={styles.textList}>Contact nous</span>
                        </Link>
                         
                    </li> 
                    
                    
                </ul>
            </div>
        </div> 
    )
}

export default Sidebar
