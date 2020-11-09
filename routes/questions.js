const express     = require('express'),
      Router      = express.Router(),
      Question    = require('../models/question');


Router.get('/', (req, res)=>{
    Question.find({}, (err, questions) => {
        if(err) {
            console.log(err);
        }else{
             res.render('questions/index', {questions: questions});
        }
    });
});

Router.get('/new', (req, res)=>{
    res.render('questions/new');
});

Router.post('/', (req, res)=>{
    var title = req.body.title;
    var description = req.body.description;

    Question.create({
        title: title,
        description: description
    }, (err, newQuestion) => {
        if(err) { 
            console.log(err);
        }else{
            console.log(newQuestion);
            res.redirect('/questions');
        }
    });

});

Router.get('/:id', (req, res) => {
    Question.findById(req.params.id, (err, question) => {
        if(err){
            console.log(err);
        }else{
            res.render('questions/show', {question: question});
        }
    });

});

Router.get('/:id/edit', (req, res) => {
    Question.findById(req.params.id, (err, foundQuestion) => {
        if(err){
            console.log(err);
        } else{
            res.render('questions/edit', {foundQuestion, foundQuestion});
        }

    });
});

Router.put('/:id', (req, res) => {
    var question = {
        title: req.body.title,
        description: req.body.description
    };
    Question.findByIdAndUpdate(req.params.id, question, (err, updatedQuestion) => {
        if(err) {
            console.log(err);
        } else {
            res.redirect('/questions/' + req.params.id);
        }
    });
    
});

Router.delete('/:id', (req, res) => {
    const {id} = req.params;
    Question.findByIdAndRemove(id, (err, deletedQuestion) => {
        if(err) {
            console.log(err);
        } else {
            console.log(`Deleted item: ${deletedQuestion}`);
            res.redirect('/questions');
        }
    });
});


module.exports = Router;