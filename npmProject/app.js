const express = require('express');

const app = express();

app.get('/', (req, res) => {
    // res.send('<h1>express</h1>'); //instead of res.end for correct headers

    res.json({title: 'express'}); // we can use res.json() instead of res.send if we sure we senging json
})

app.listen(5000, () => console.log('server is working'));