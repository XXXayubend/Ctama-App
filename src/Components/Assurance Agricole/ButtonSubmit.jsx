import React, { useState } from 'react';
import styles from './Agricole-grele.module.css';
import Gouvernant from './Gouvernante'

const ButtonSubmit = () => {

  const [governorate, setGovernorate] = useState('');
    // const handleGovernorateChange = (governorate) => {
    //     setGovernorate(governorate);
    // };
    const risquesPossibles = [
        "Lessivage",
        "Blessures et perforations ",
        "Formation d’une croûte de terre compacte ",
        "Contamination",
        "Pourriture",
      ];

    const [selectedRisques, setSelectedRisques] = useState([]);

    const handleRisqueChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
        setSelectedRisques([...selectedRisques, value]);
    } else {
        setSelectedRisques(selectedRisques.filter((risque) => risque !== value));
    }

    
    };
    
  const [formData, setFormData] = useState({
    gouvernorat: '',
    codePostale: '',
    natureProduction: '',
    rendementAttendu: '',
    prixVente: '',
    risques: '',
    // risques: [],
  });

  const handleGovernorateChange = (e) => {
    setFormData((prevFormData) => ({...prevFormData, gouvernorat: e.target.value }));
  };

  // const handleRisqueChange = (e) => {
  //   const risque = e.target.value;
  //   setFormData((prevFormData) => ({...prevFormData, risques: [...prevFormData.risques, risque] }));
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Valider les inputs
    if (!formData.gouvernorat ||!formData.codePostale ||!formData.natureProduction ||!formData.rendementAttendu ||!formData.prixVente || formData.risques.length === 0) {
      alert('Veuillez remplir tous les champs');
      return;
    }
    // Enregistrer les données dans la base de données
    try {
      const response = await fetch('/api/agricole', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert('Données enregistrées avec succès');
      } else {
        alert('Erreur lors de l\'enregistrement des données');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputDiv}>
        <div className={styles.inputWrapp}>
          <label htmlFor="" className={styles.inputWrapLabel}></label>
          <Gouvernant onGovernorateChange={handleGovernorateChange} />
        </div>
      </div>
      <div className={styles.inputDivOne}>
        <div className={styles.inputWrapp}>
          <label className={styles.inputWrapLabel} htmlFor="">La nature de la production :</label>
          <select className={styles.iW} value={formData.natureProduction} onChange={(e) => setFormData((prevFormData) => ({...prevFormData, natureProduction: e.target.value }))}>
            <option value=""></option>
            <option value="Arbres fruitiers">Arbres fruitiers</option>
            <option value=" Principales activités agricoles"> Principales activités agricoles</option>
          </select>
        </div>
        <div className={styles.inputWrapp}>
          <label htmlFor="" className={styles.inputWrapLabel}>Rendement attendu * :</label>
          <input type="number" className={styles.iW} value={formData.rendementAttendu} onChange={(e) => setFormData((prevFormData) => ({...prevFormData, rendementAttendu: e.target.value }))} />
        </div>
        <div className={styles.inputWrapp}>
          <label className={styles.inputWrapLabel} htmlFor="">Prix de vente * :</label>
          <input type="text" className={styles.iW} value={formData.prixVente} onChange={(e) => setFormData((prevFormData) => ({...prevFormData, prixVente: e.target.value }))} />
        </div>
        <div className={styles.inputWrap}>
        <label htmlFor="" className={styles.inputWrapLabel}>Saisir les risques possible * :</label>
        <select className={styles.iW} name="" id="">
          <option value=""></option>
          <option value="Lessivage">Lessivage</option>
          <option value="Blessures et perforations">Blessures et perforations</option>
          <option value="Formation d’une croûte de terre compacte">Formation d’une croûte de terre compacte</option>
          <option value="Contamination">Contamination</option>
          <option value="Pourriture">Pourriture</option>
        </select>
      </div>
      </div>
      <button className={styles.btn} type="submit">Enregistrer</button>
    </form>
  );
};
export default ButtonSubmit

// import React, { useState } from 'react';

// const ButtonSubmit = () => {
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [priority, setPriority] = useState('');
//   const [status, setStatus] = useState('');
//   const [startdate, setStartdate] = useState('');
//   const [enddate, setEnddate] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // Valider les inputs
//     if (name.trim() === '' || description.trim() === '' || priority.trim() === '' || status.trim() === '' || startdate === '' || enddate === '') {
//       alert('Veuillez remplir tous les champs');
//       return;
//     }
//     // Enregistrer les données dans la base de données
//     try {
//       const response = await fetch('/api/agricole', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             gouvernant,
//             ville,
//             codePostale,
//             production,
//             rendement,
//             prix,
//             risques,    
//         //   name,
//         //   description,
//         //   priority,
//         //   status,
//         //   startdate,
//         //   enddate,
//         }),
//       });
//       if (response.ok) {
//         alert('Données enregistrées avec succès');
//       } else {
//         alert('Erreur lors de l\'enregistrement des données');
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Nom :
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Description :
//         <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Priorité :
//         <select value={priority} onChange={(e) => setPriority(e.target.value)}>
//           <option value="">Sélectionnez une priorité</option>
//           <option value=" haute">Haute</option>
//           <option value="moyenne">Moyenne</option>
//           <option value="basse">Basse</option>
//         </select>
//       </label>
//       <br />
//       <label>
//         Statut :
//         <select value={status} onChange={(e) => setStatus(e.target.value)}>
//           <option value="">Sélectionnez un statut</option>
//           <option value="en cours">En cours</option>
//           <option value="terminé">Terminé</option>
//           <option value="annulé">Annulé</option>
//         </select>
//       </label>
//       <br />
//       <label>
//         Date de début :
//         <input type="date" value={startdate} onChange={(e) => setStartdate(e.target.value)} />
//       </label>
//       <br />
//       <label>
//         Date de fin :
//         <input type="date" value={enddate} onChange={(e) => setEnddate(e.target.value)} />
//       </label>
//       <br />
//       <button type="submit">Enregistrer</button>
//     </form>
//   );
// };

// export default ButtonSubmit;