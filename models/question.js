const mongoose = require('mongoose');
      Schema   = mongoose.Schema;


// For testing purpose. To be remodeled

const questionSchema = new Schema({
    title: String,
    description: String
});

module.exports =  mongoose.model('Question', questionSchema);

