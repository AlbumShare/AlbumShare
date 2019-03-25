// import express from 'express';
// import path from 'path';
// import volleyball from 'volleyball';
// import bodyparser from 'bodyparser';

// import api from '.';

const express = require('express');
const path = require('path');
const volleyball = require('volleyball');
const bodyparser = require('body-parser');
// const api = require('../api');

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
// app.use('/api', api);

app.get('/', (req, res, next) => {
  res.send('hello you reached get/!');
})

// send index.html to ALL requests
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname + '/../../client/public'));
});

// error handling middleware
app.use((err, req, res, next) => {
  // console.err(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal Server Error.');
});


module.exports = app;
