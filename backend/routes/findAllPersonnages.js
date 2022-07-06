const {Personnages} = require('../db/sequelize')

// app = app.js
module.exports = (app) => {
    app.get('/api/personnages',(req,res) => {
        //Appel de la méthode pour récupérer l'ensemble des personnages
        Personnages.findAll()
        .then(personnages => {
            
            res.json(personnages)
        }) 
    })
}
