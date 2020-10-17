const router = require('express').Router();
let Todo = require('../models/todo.model');

router.route('/').get((req, res)=>{
    Todo.find()
    .then(todos=>res.json(todos))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/add').post((req,res)=>{
    const title = req.body.title;
    const completed = Boolean(req.body.completed);

    const newTodo = new Todo({
        title,
        completed,
    });

    newTodo.save()
    .then(()=>res.json(newTodo))
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').post((req, res)=>{
    Todo.findById(req.params.id)
    .then(todo=>{
        todo.completed = !todo.completed;

        todo.save()
        .then(()=>res.json('Marked completed!'))
        .catch(err => res.status(400).json('Error:' + err));
    })
    .catch(err => res.status(400).json('Error:' + err));
});

router.route('/:id').delete((req, res)=>{
    Todo.findByIdAndDelete(req.params.id)
    .then(()=>res.json("Deleted!"))
    .catch(err => res.status(400).json('Error:' + err));
});


module.exports = router;