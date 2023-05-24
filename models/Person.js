const { default: mongoose, model } = require("mongoose");

// voici un schema de la collection Person
// ça definit la structure du document de la collection Person
// il faut ensuite créer un model pour réprésenter la structure
const personSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    age : {
        type : Number
    },
    favoriteFoods : {
        type : Array,
        of : String
    }
})

module.exports = mongoose.model("Person", personSchema)

// ça c'est le model
const Person = mongoose.model("Person", personSchema)

// ça c'est le document
const newPerson = new Person({
    name : "John Dee",
    age : 19,
    favoriteFoods : ["Garba", "Poulet"]
})

newPerson.save().then(function() {
    console.log("Document créé avec succès");
}).catch(function(error) {
    console.log("Erreur lors de la création du document : ", {error})
})

// // api model.create()
// Person.create([{name : "Will Riker"}, {name : "Geordi LaForge"}, {age : 18}])

// // api model.find() trouve tout le document
// Person.find({})

// Person.findOne({favoriteFoods : "Garba"})