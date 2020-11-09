const mongoose = require('mongoose');
      Schema   = mongoose.Schema;


// For testing purpose. To be remodeled

const QuestionSchema = new Schema({
    title: String,
    description: String
});

module.exports =  mongoose.model('Question', QuestionSchema);

