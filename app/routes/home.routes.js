module.exports = function(app) {
    const faker = require('faker')

    app.get('/home', function(req, res){        
        res.render('pages/home')
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