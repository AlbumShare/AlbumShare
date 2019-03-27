// import express from 'express';
// import path from 'path';
// import volleyball from 'volleyball';
// import bodyparser from 'bodyparser';

// import api from '.';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyparser = require('body-parser');


// express instance
const app = express();

// logging middleware
app.use(volleyball);

// body parsing middleware
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ exteded: true }));


// middleware to serve static files
app.use(express.static(path.join(__dirname + '/../../client/public')));

// middleware for our express routes
app.use('/api', require('./api'));



app.get('/', (req, res, next) => {
  res.send('hello!')
});

// send index.html to ALL requests
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/../../client/public'));
});

// error handling middleware
app.use((err, req, res, next) => {
  // console.err(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error.');
});


<<<<<<< HEAD
module.exports = app
=======
module.exports = app;
<<<<<<< HEAD
=======



>>>>>>> 692c5ba87b249b523280a559a1b69f02b9fc31e8
>>>>>>> b3e49ab5dee93f155b94371b7c8cd7ee15f6449b
