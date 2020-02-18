const express = require('express');
const todos = require('./todos');
const morgan = require('morgan')

const app = express();

/* app.use('/log', (req, res, next) => {
    let date = new Date(Date.now());

    console.log(`${date} - ${req.method} - ${req.url}`);

    next();
}); */

app.set('view engine', 'pug');

app.use(morgan('dev'));

// app.use(morgan('combined'));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    // res.send('<h1>express</h1>'); //instead of res.end for correct headers
    // res.json({title: 'express'}); // we can use res.json() instead of res.send if we sure we senging json

    //res.send('express Todo');

    res.render('index', {
        title: 'Express Todo!',
        todos
    });
});

app.get('/todos', (req, res) => {
    // console.log(req.query);

    if(req.query.completed) {
        return res.json(todos.filter(todo => todo.completed.toString() === req.query.completed));
    }

    res.json(todos);
});

app.get('/todos/:id', (req, res) => {
    // console.log(req.params);

    let todo = todos.find(todo => todo.id == req.params.id);

    // if(!todo) res.sendStatus(404); //automatic response text

    if (!todo) res.status(404).send('todo not found');

    res.json(todo);
})

app.listen(5000, () => console.log('server is working'));