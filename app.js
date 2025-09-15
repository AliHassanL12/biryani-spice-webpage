const express = require('express');
const app = express();

app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.listen(3000);

app.get('/', (req, res) => {
    res.render('index.ejs', {title: 'Biryani Spice'})
})

app.get('/menu', (req, res) => {
    res.render('menu.ejs', {title: 'Menu | Biryani Spice'})
})