const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
    title:{ type: String, required: true, minlength:10},
    completed:{ type: Boolean, required: true},
},
{
    timestamps:true
});

const Todo = mongoose.model('Todo',todoSchema);

module.exports = Todo;