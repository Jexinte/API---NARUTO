const { Personnages } = require('../db/sequelize')

module.exports = (app) => {
    app.get('/api/personnages/:id',(req,res) => {
        Personnages.findByPk(req.params.id)
        .then(personnage => res.json(personnage))
    })
}