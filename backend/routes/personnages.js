const express = require('express')
const router = express.Router()

const createPersonnageController = require('../controllers/createPersonnage')
const deletePersonnageController = require('../controllers/deletePersonnage')
const displayPersonnagesController = require('../controllers/findAllPersonnages')
const findOnePersonnageController = require('../controllers/findPersonnageByPk')
const updatePersonnageController = require('../controllers/updatePersonnage')

router.use(express.json())

router.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next()
  });

  router.get('/personnages',displayPersonnagesController.displayAllPersonnages)
  router.get('/personnages/:id',findOnePersonnageController.findOnePersonnage)
  router.post('/personnages',createPersonnageController.CreatePersonnage)
  router.put('/personnages/:id',updatePersonnageController.updatePersonnage)
  router.delete('/personnages/:id',deletePersonnageController.deletePersonnage)
  module.exports = router