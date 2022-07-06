const { Personnages } = require('../db/sequelize')

exports.CreatePersonnage = (req,res)  => {
        const message = 'Le personnage suivant a été crée :'
        Personnages.create({...req.body})
        .then(personnage => res.json({message:message, data : personnage}))
}