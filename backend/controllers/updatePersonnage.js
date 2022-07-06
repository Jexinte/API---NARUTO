const { Personnages } = require('../db/sequelize')

exports.updatePersonnage = (req,res) => 
{
        const id = req.params.id
        
        Personnages.update({...req.body},
        {
            where : {id:id}
        })

        .then(_=> 
        {
            Personnages.findByPk(id).then(personnage =>  res.json(personnage))
        })
}