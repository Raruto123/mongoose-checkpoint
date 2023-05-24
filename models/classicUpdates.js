const Person = require('./models/person'); // Importer le modèle de personne

// Trouver une personne par _id et mettre à jour la liste favoriteFoods
const addFavoriteFood = (personId) => {
  Person.findById(personId)
    .then((person) => {
      if (person) {
        person.favoriteFoods.push("hamburger"); // Ajouter "hamburger" à la liste favoriteFoods

        // Sauvegarder la personne mise à jour
        person.save()
          .then((updatedPerson) => {
            console.log('Personne mise à jour :', updatedPerson);
          })
          .catch((error) => {
            console.error('Erreur lors de la sauvegarde de la personne :', error);
          });
      } else {
        console.log('Personne non trouvée');
      }
    })
    .catch((error) => {
      console.error('Erreur lors de la recherche de la personne :', error);
    });
};

// Utilisation de la fonction pour trouver une personne par _id et ajouter "hamburger"
const personIdToSearch = '60b6782e6e8d552d48a88e8e'; // _id à rechercher

addFavoriteFood(personIdToSearch);
