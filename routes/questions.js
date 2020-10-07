const express     = require('express'),
      Router      = express.Router();


Router.get('/', (req, res)=>{
    res.render('questions/index');
});

Router.get('/new', (req, res)=>{
    res.render('questions/new');
});

Router.post('/', (req, res)=>{

});

module.exports = Router;