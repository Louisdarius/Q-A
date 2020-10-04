 require('dotenv').config();
 const express           = require('express'),
       app               = express(),
       ejs               = require('ejs'),
       bodyParser        = require('body-parser');




      // ROUTES
      app.get('/', (req, res)=>{
          res.send('<h1> Hey there</h1>');
      });



      app.listen(process.env.PORT, ()=>{
          console.log('STACKOVERFLOW APP HAS STARTED');
      });