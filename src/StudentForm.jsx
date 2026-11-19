
import { useState } from "react";
import "./StudentForm.css";

function StudentForm({ onAjouterEtudiant }) {

  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");
  const [filiere, setFiliere] = useState("");
  const [anneeEtude, setAnneeEtude] = useState("");
  const [groupe, setGroupe] = useState("");
  const [ville, setVille] = useState("");
  const [image, setImage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const nouvelEtudiant = {
      nom,
      prenom,
      email,
      telephone,
      filiere,
      anneeEtude,
      groupe,
      ville,
      image,
    };

    onAjouterEtudiant(nouvelEtudiant);

    // Vider les champs après l'ajout
    setNom("");
    setPrenom("");
    setEmail("");
    setTelephone("");
    setFiliere("");
    setAnneeEtude("");
    setGroupe("");
    setVille("");
    setImage("");
  }

  return (
    <div className="form-container">
      <h2>Ajouter un étudiant</h2>

      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label htmlFor="nom">Nom :</label>
          <input
            type="text"
            id="nom"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Votre nom"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="prenom">Prénom :</label>
          <input
            type="text"
            id="prenom"
            value={prenom}
            onChange={(e) => setPrenom(e.target.value)}
            placeholder="Votre prénom"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="exemple@email.com"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="telephone">Téléphone :</label>
          <input
            type="tel"
            id="telephone"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="Numéro de téléphone"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="filiere">Filière :</label>
          <select
            id="filiere"
            value={filiere}
            onChange={(e) => setFiliere(e.target.value)}
            required
          >
            <option value="">Choisir une filière</option>
            <option value="GLSI">GLSI</option>
            <option value="DSI">DSI</option>
            <option value="RSI">RSI</option>
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="anneeEtude">Année d'étude :</label>
          <input
            type="text"
            id="anneeEtude"
            value={anneeEtude}
            onChange={(e) => setAnneeEtude(e.target.value)}
            placeholder="Exemple : 2ème année"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="groupe">Groupe :</label>
          <input
            type="text"
            id="groupe"
            value={groupe}
            onChange={(e) => setGroupe(e.target.value)}
            placeholder="Votre groupe"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="ville">Ville :</label>
          <input
            type="text"
            id="ville"
            value={ville}
            onChange={(e) => setVille(e.target.value)}
            placeholder="Votre ville"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="image">Image :</label>
          <input
            type="file"
            id="image"
            accept="image/*"
            onChange={(e) => {
              const fichier = e.target.files[0];

              if (fichier) {
                setImage(URL.createObjectURL(fichier));
              }
            }}
          />
        </div>

        {image && (
          <img src={image} alt="Photo étudiant" width="100" />
        )}

        <button type="submit">Ajouter</button>

      </form>
    </div>
  );
}

export default StudentForm;
