
// import db from './server/db/db';
// import app from './server';
const db = require('./server/db/index.js');
const app = require('./server/index.js');

require('babel-register')({
  presets: [ 'es2015' ]
});

require('./server');


const PORT = 5000;

db.sync()
  .then(() => {
    console.log("db synced!");
    app.listen(PORT, () => {
      console.log("Express server listening on port # " + PORT + "!" );
    })
  })