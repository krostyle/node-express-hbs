require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;



app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials')

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Diego Bustamante',
    });
})

app.get('/generic', (req, res) => {
    res.render('generic', {
        nombre: 'Diego Bustamante',
    });
})

app.get('/elements', (req, res) => {
    res.render('elements', {
        nombre: 'Diego Bustamante',
    });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});