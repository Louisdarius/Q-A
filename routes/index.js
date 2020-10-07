const express     = require('express'),
      Router       = express.Router();

Router.get('/', (req, res)=>{
    res.render('landing');
});

module.exports   = Router;