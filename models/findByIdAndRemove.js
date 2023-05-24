const Person = require('./models/person'); // Importer le modèle de personne

// Supprimer une personne par son ID
const deletePersonById = (personId) => {
  Person.findByIdAndRemove(personId)
    .then((removedPerson) => {
      if (removedPerson) {
        console.log('Personne supprimée :', removedPerson);
      } else {
        console.log('Personne non trouvée');
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la suppression de la personne :', error);
    });
};

// Utilisation de la fonction pour supprimer une personne par son ID
const personIdToDelete = '123456789'; // ID de la personne à supprimer

deletePersonById(personIdToDelete);
