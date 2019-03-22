// import db from './server/db/db';
// import app from './server';
const db = require('./server/db/index.js');
const app = require('./server/api/index.js');

require('babel-register')({
  presets: [ 'es2015' ]
});

require('./server/api');


const PORT = 8000;

db.sync()
  .then(() => {
    console.log("db synced!");
    app.listen(PORT, () => {
      console.log("Mixing it up on port # " + PORT + "!" );
    })
  })