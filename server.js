'use strict';

const express = require('express');
const errorHandler = require('./handlers/500.js');
const notFoundHandler = require('./handlers/404.js');

const app = experss();

// routes

app.get('/', (req, res) => {
    res.status(200).send('Hello world');
});

app.get('/info', (req, res) => {
    res.status(200).json({
        name: 'Malak',
        age: 24
    });
});

app.get('/bad-request-2', (req, res) => {
    let arr;
    arr.push(2);
});

// Middlewares
app.use('*', notFoundHandler);
app.use(errorHandler);

function start(port) {
    app.listen(port, () => console.log(`Listening to ${port}`));
}

module.exports = {
    app: app,
    start: start
}