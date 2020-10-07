 require('dotenv').config();
 var   express           = require('express'),
       app               = express(),
       ejs               = require('ejs'),
       bodyParser        = require('body-parser'),
       mongoose          = require('mongoose'),     
       Question          = require('./models/question');

       app.set('view engine', 'ejs');

       // Import Routes
       const indexRoutes     = require('./routes/index'),
             questionRoutes  = require('./routes/questions');


       // Utilities                     
       app.use(bodyParser.urlencoded({extended: true}));
       app.use(express.static(__dirname + "/public"));

       // Connect to Local Database
       mongoose.connect("mongodb://localhost/stackOverflow");

      app.use('/', indexRoutes);
      app.use('/question', questionRoutes);


      app.listen(process.env.PORT, ()=>{
          console.log('STACKOVERFLOW APP HAS STARTED');
      });