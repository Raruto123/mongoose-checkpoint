const { default: mongoose } = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Checkpoint", {
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(function() {
    console.log("Connexion à la base de données réussie");
}).catch(function(error) {
    console.log("Erreur de connexion à la base de données : ", {error});
})