const Person = require('./models/person'); // Importer le modèle de personne

// Trouver une seule personne ayant un aliment spécifique dans les favoris avec Model.findOne()
const findPersonByFavoriteFood = (food) => {
  Person.findOne({ favoriteFoods: food })
    .then((person) => {
      console.log('Personne trouvée :', person);
    })
    .catch((error) => {
      console.error('Erreur lors de la recherche de la personne :', error);
    });
};

// Utilisation de la fonction pour trouver une personne par aliment favori
const foodToSearch = 'Poulet'; // Aliment à rechercher

findPersonByFavoriteFood(foodToSearch);
