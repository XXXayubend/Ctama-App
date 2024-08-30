import React from 'react';
import './Footer.css';
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className='footerPage'>
      <div className="container">
        <div className="textDiv">
          <p>Mention légales</p>
          <p>Politique de protection de données</p>
          <p>Charte de protéction de donnée</p>
          <p>Demande d'exercice de droits</p>
          <p>
            <FaPhone />
            71000100
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;