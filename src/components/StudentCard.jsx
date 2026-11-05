import React, { useState } from "react";

function StudentCard(props) {
  const [coordonneesVisibles, setCoordonneesVisibles] = useState(false);

  function basculerCoordonnees() {
    setCoordonneesVisibles(!coordonneesVisibles);
  }

  const ville = props.ville || "Non renseignée";

  return (
    <div className="card">
      <img src={props.image} alt="Photo de l'étudiant" />
      <h1>Fiche étudiant</h1>
      <p>
        <strong>Nom & Prénom:</strong> {props.prenom} {props.nom}
      </p>
      <p><strong>Filière:</strong> {props.filiere}</p>
      <p><strong>Année:</strong> {props.anneeEtude}</p>
      <p><strong>Groupe:</strong> {props.groupe}</p>
      <p><strong>Ville:</strong> {ville}</p>

      {coordonneesVisibles && (
        <>
          <p><strong>Email:</strong> {props.email}</p>
          <p><strong>Téléphone:</strong> {props.telephone}</p>
        </>
      )}

      <button onClick={basculerCoordonnees}>
        {coordonneesVisibles ? "Masquer les coordonnées" : "Afficher les coordonnées"}
      </button>

      <button onClick={() => props.onSupprimer(props.email)} style={{ marginLeft: "5px", backgroundColor: "#ff4d4d", color: "white" }}>
        Supprimer
      </button>

      <button onClick={() => props.onModifier(props.email)} style={{ marginLeft: "5px" }}>
        Modifier
      </button>
    </div>
  );
}

export default StudentCard;