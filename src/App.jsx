
import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import StudentCard from "./components/StudentCard.jsx";
import Footer from "./components/Footer.jsx";
import studentImage from "./assets/adem.png";
import StudentForm from "./StudentForm";

function App() {
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

  // Ajouter un étudiant avec les données du formulaire
  function ajouterEtudiant(nouvelEtudiant) {
    const etudiantAvecId = {
      ...nouvelEtudiant,
      id: Date.now(),
    };

    setEtudiants([...etudiants, etudiantAvecId]);
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

      {/* Formulaire d'ajout d'un étudiant */}
      <StudentForm onAjouterEtudiant={ajouterEtudiant} />

      <div className="actions" style={{ padding: "20px", textAlign: "center" }}>

        <input
          type="text"
          placeholder="Rechercher par nom, prénom ou filière..."
          value={recherche}
          onChange={(e) => setRecherche(e.target.value)}
          style={{ padding: "8px", width: "300px", borderRadius: "5px" }}
        />

      </div>

      <div className="container">

        {etudiantsFiltres.map((etudiant) => (
          <StudentCard
            key={etudiant.id || etudiant.email}
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
