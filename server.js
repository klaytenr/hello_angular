var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tasks');
app.use(bodyParser.json());
app.use(express.static( __dirname + '/helloAngular/dist' ));

var Schema = mongoose.Schema;
var TaskSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true, default: ''},
    completed: {type: Boolean, required: true, default: false},
}, {timestamps: true});
var Task = mongoose.model('Task', TaskSchema);
mongoose.Promise = global.Promise;

app.get('/tasks', function(req, res){
    Task.find({}, function(err, tasks){
        if(err){
            res.json({message: 'Error', error: err});
        }else{
            res.json({message: 'Good job', data: tasks});
        }
    })
})

app.get('/tasks/:id', function(req, res){
    Task.findOne({id: req.params.id}, function(err, tasks){
        if(err){
            res.json({message: 'Error', error: err});
        }else{
            res.json({message: 'This is one task', data: tasks});
        }
    })
})

app.post('/tasks', function(req, res){
    var task = new Task({title:req.body.title, description:req.body.description, completed:req.body.completed});
    task.save(function(err){
        if(err){
            res.json({message: 'Error', error: err});
        }else{
            res.redirect('/tasks');
        }
    })
})

app.put('/tasks/:id', function(req, res){
    Task.findOne({id: req.params.id}, function(err, task){
        if(err){
            console.log('nope');
        }else{
            task.title = req.body.title;
            task.description = req.body.description;
            task.completed = req.body.completed;
            res.redirect('/tasks');
        }
    })
})

app.delete('/tasks/:id', function(req, res){
    Task.findOne({id: req.params.id}, function(err, task){
        if(err){
            console.log('nope');
        }else{
            task.remove();
            res.redirect('/tasks')
        }
    })
})

app.listen(8000, function(){
    console.log('Listening on port 8000')
});