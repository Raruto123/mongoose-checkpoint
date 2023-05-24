const Person = require('./models/person'); // Importer le modèle de personne

const findPersonByName = (personName) => {
    Person.findOneAndUpdate({name : personName}, {age : 20}, {new : true})
    .then(function(updatedPerson) {
        if (updatedPerson) {
            console.log("personne trouvée et mise à jour : ", {updatedPerson})
        } else {
            console.log("personne non trouvée")
        }
    })
    .catch(function(error) {
        console.log("Erreur lors de la recherche de la personne et de la mise de celle-ci : ", {error})
    });
};

const personByNameToSearch = "John Dee";

findPersonByName(personByNameToSearch);