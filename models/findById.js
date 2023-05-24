const Person = require('./models/person'); // Importer le modèle de personne

// Trouver la seule personne ayant un _id spécifique avec Model.findById()
const findPersonById = (personId) => {
  Person.findById(personId)
    .then((person) => {
      console.log('Personne trouvée :', person);
    })
    .catch((error) => {
      console.error('Erreur lors de la recherche de la personne :', error);
    });
};

// Utilisation de la fonction pour trouver une personne par _id
const personIdToSearch = '60b6782e6e8d552d48a88e8e'; // _id à rechercher

findPersonById(personIdToSearch);

