const { default: Person } = require("./models/Person.js");

const createPeople = (arrayOfPeople) => {
    Person.create(arrayOfPeople)
      .then((createdPeople) => {
        console.log('Personnes créées :', createdPeople);
      })
      .catch((error) => {
        console.error('Erreur lors de la création des personnes :', error);
      });
  };
  
  // Utilisation de la fonction pour créer plusieurs personnes
  const peopleToCreate = [
    { name: 'John', age: 25, favoriteFoods: ['Pizza', 'Burger'] },
    { name: 'Jane', age: 30, favoriteFoods: ['Sushi', 'Pasta'] },
    // ... Ajoutez d'autres objets de personnes selon vos besoins
  ];
  
  createPeople(peopleToCreate);
