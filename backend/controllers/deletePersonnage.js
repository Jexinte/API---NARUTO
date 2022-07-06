const { Personnages } = require('../db/sequelize')


exports.deletePersonnage =(req,res) => {

        Personnages.findByPk(req.params.id).then(personnage => { 
            Personnages.destroy({
                where : {id:personnage.id}
            }).then(_ => {
                const message = `Le personnage ayant l'identifiant n°${personnage.id}  a bien été supprimé : `
                res.json({message, data:personnage})
            })
        })
}