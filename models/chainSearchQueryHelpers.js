const Person = require('./models/person'); // Importer le modèle de personne

// Trouver les personnes qui aiment les burritos
const findPeopleWhoLikeBurritos = (done) => {
  const query = { favoriteFoods: 'burritos' };

  Person.find(query)
    .sort({ name: 1 })
    .limit(2)
    .select({ age: 0 })
    .exec((err, data) => {
      if (err) {
        done(err);
      } else {
        done(null, data);
      }
    });
};

// Utilisation de la fonction pour trouver les personnes qui aiment les burritos
findPeopleWhoLikeBurritos((err, data) => {
  if (err) {
    console.error('Erreur lors de la recherche des personnes :', err);
  } else {
    console.log('Personnes qui aiment les burritos :', data);
  }
});
