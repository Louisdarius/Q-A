require('dotenv').config();

 const express           = require('express'),
       app               = express(),
       ejs               = require('ejs'),
       bodyParser        = require('body-parser'),
       methodOverride    = require('method-override'),
       mongoose          = require('mongoose'),     
       Question          = require('./models/question');

       app.set('view engine', 'ejs');

       // Import Routes
       const indexRoutes     = require('./routes/index'),
             questionRoutes  = require('./routes/questions');


       // Utilities                     
       app.use(bodyParser.urlencoded({extended: true}));
       app.use(express.static(__dirname + "/public"));
       app.use(methodOverride('_method'));

       // Connect to Local Database
       mongoose.connect("mongodb://localhost/stackOverflow");

      app.use('/', indexRoutes);
      app.use('/questions', questionRoutes);


      app.listen(process.env.PORT, ()=>{
          console.log('STACKOVERFLOW APP HAS STARTED');
      });