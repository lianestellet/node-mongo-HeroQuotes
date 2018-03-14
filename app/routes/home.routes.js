module.exports = function(app) {
    const faker = require('faker')
    const quotes = require('../controllers/quote.controller');
    const axios = require('axios');

    app.get('/home', (req, resz) => {

        var x;
        axios.get('http://localhost:3000/api/quotes')
            .then(function(res){
                x = res.data;
                console.log(x[0].hero)
                resz.render('pages/home', {
                    result:  x
                })
            })
            .catch(function (error){
                console.log(error)
            });
            

    });

    app.get('/about', (req, res) => {
        var users = [{
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: 'http://placebear.com/300/300'
        }, {
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: 'http://placebear.com/400/300'
        }, {
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: 'http://placebear.com/500/300'
        }]
    
        res.render('pages/about', {
            usuarios: users
        })
    })
    
    app.get('/contact', (req, res) => {
        res.render('pages/contact')
    })
    
    app.post('/contact', (req, res) => {
        res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
    })
  }