import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import studentImage from "./assets/adem.png";

function App() {
  // 1. Gérer la liste des étudiants avec useState[cite: 48]
  const [etudiants, setEtudiants] = useState([
    {
      prenom: "Slim",
      nom: "Boubaker",
      email: "slimboubaker@gmail.com",
      telephone: "+216 99 999 999",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 2",
      ville: "Mahdia",
      image: studentImage,
    },
    {
      prenom: "Sarra",
      nom: "Trabelsi",
      email: "sarra.trabelsi@gmail.com",
      telephone: "+216 22 345 678",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sousse",
      image: studentImage,
    }
  ]);

  const [recherche, setRecherche] = useState("");

  function ajouterEtudiant() {
    const nouvelEtudiant = {
      prenom: "Yassine",
      nom: "Ben Salem",
      email: "yassine.bensalem@gmail.com",
      telephone: "+216 44 444 444",
      filiere: "Génie Logiciel et Systèmes d'Information",
      anneeEtude: "2ème année",
      groupe: "GLSI 1",
      ville: "Sfax",
      image: studentImage,
    };
    setEtudiants([...etudiants, nouvelEtudiant]);
  }

  function supprimerEtudiant(email) {
    setEtudiants(etudiants.filter((etudiant) => etudiant.email !== email));
  }

  function modifierEtudiant(email) {
    const nouveauPrenom = prompt("Saisir le nouveau prénom :");
    if (nouveauPrenom && nouveauPrenom.trim() !== "") {
      setEtudiants(
        etudiants.map((etudiant) =>
          etudiant.email === email
            ? { ...etudiant, prenom: nouveauPrenom.trim() }
            : etudiant
        )
      );
    }
  }

  const etudiantsFiltres = etudiants.filter((etudiant) =>
    etudiant.prenom.toLowerCase().includes(recherche.toLowerCase()) ||
    etudiant.nom.toLowerCase().includes(recherche.toLowerCase()) ||
    etudiant.filiere.toLowerCase().includes(recherche.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <Navbar />
      
      <div className="actions" style={{ padding: "20px", textAlign: "center" }}>
        <button onClick={ajouterEtudiant} style={{ padding: "10px 20px", fontSize: "16px" }}>
          + Ajouter un étudiant
        </button>
        <br /><br />
        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou filière..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          style={{ padding: "8px", width: "300px", borderRadius: "5px" }}
        />
      </div>

      <div className="container">
        {/* Affichage du tableau filtré avec map()[cite: 61] */}
        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.email}
            prenom={etudiant.prenom}
            nom={etudiant.nom}
            email={etudiant.email}
            telephone={etudiant.telephone}
            filiere={etudiant.filiere}
            anneeEtude={etudiant.anneeEtude}
            groupe={etudiant.groupe}
            ville={etudiant.ville}
            image={etudiant.image}
            onSupprimer={supprimerEtudiant}
            onModifier={modifierEtudiant}
          />
        ))}
      </div>

      <Footer />
    </div>
  );
}

export default App;