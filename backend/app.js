const express = require('express')
const morgan = require('morgan')
const sequelize = require('./db/sequelize')
const findAllPersonnages = require('./routes/findAllPersonnages')
const findPersonnageByPk = require('./routes/findPersonnageByPk')
const createPersonnage = require('./routes/createPersonnage')
const updatePersonnage = require('./routes/updatePersonnage')
const deletePersonnage = require('./routes/deletePersonnage')
const app = express()
const port = 3000
app.use(morgan('dev'))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });

app.use(express.json())
app.use('/img',express.static('img'))

// Connexion bdd
sequelize.initialisationDeLaBaseDeDonnées()
// Routes
findAllPersonnages(app)
findPersonnageByPk(app)
createPersonnage(app)
updatePersonnage(app)
deletePersonnage(app)
app.listen(port,() => console.log(`L'application a bien démarrer sur le port ${port}`))
