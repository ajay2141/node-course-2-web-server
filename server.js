const express = require('express');
const hbs = require('hbs');
var app = express();
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.use((req,res,next)=>{
    var now = new Date().toString();
    console.log(`${now} ${req.method} ${req.url}`);
});

hbs.registerHelper('getCurrentYear', () => {
    return new Date().getFullYear()
});
hbs.registerHelper('screamIt', (text) => {
    return text.toUpperCase();
});

app.get('/', (request, response) => {
    //response.send('<h1>Hello Express !!</h1>');
    response.send({
        name: 'Ajay',
        likes: [
            'biking',
            'Cricket'
        ],
        address: '75 Hammell pl'
    });
});

app.get('/home', (req, res) => {
    res.render('home.hbs', {
        pageTitle: 'Home Page',
        welcomeMessage: 'Welcome to home page...'
    })
});

app.get('/about', (req, res) => {
    //res.send('<h1>About page<h1>');
    res.render('about.hbs', {
        pageTitle: 'About Page',
    });
});

app.get('/bad', (req, res) => {
    res.send({
        page: 'page not found',
        reasons: ['wrong url', 'incorrect URL'],
        message: 'try with correct url'
    });
});

app.listen(3000);