const express = require('express')
const morgan = require('morgan')
const listesPersonnages = require('./models/personnages_data')

const app = express()
const port = 3000
app.use(morgan('dev'))

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });


app.use('/img',express.static('img'))

app.get('/api/personnages',(req,res) => {
  res.json(listesPersonnages)
})



app.listen(port,() => console.log(`L'application a bien démarrer sur le port ${port}`))
