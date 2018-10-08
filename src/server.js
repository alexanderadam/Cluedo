let express = require('express')

let app = express()

app.set('view engine', 'twig');
app.set("views", "./src/views");

app.use('/assets', express.static('public'))

app.get('/', (request, response) => {
    response.render('index', { test: 'Salut' })
})

app.get('/cluedo', (request, response) => {
    response.render('cluedo')
})

app.listen(8080)