const { default: Person } = require("./models/Person.js");

// Trouver toutes les personnes ayant un nom donné avec Model.find()
const findPeopleByName = (name) => {
    Person.find({ name })
      .then((people) => {
        console.log('Personnes trouvées :', people);
      })
      .catch((error) => {
        console.error('Erreur lors de la recherche des personnes :', error);
      });
  };
  
  // Utilisation de la fonction pour trouver les personnes par nom
  const nameToSearch = 'John'; // Nom à rechercher
  
  findPeopleByName(nameToSearch);