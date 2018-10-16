let Cluedo = require('./controller/CluedoController');
let Grid = require('./controller/GridController');
let express = require('express')

let app = express()

app.set('view engine', 'twig');
app.set("views", "./src/views");

app.use('/assets', express.static('public'))

app.get('/', (request, response) => {
    response.render('index', { test: 'Salut' })
})

app.get('/cluedo', (request, response) => {
    var grille = new Grid().grille;
    response.render('cluedo', { grille });
})


app.listen(8080)