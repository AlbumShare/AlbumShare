// import db from './server/db/db';
// import app from './server';
const db = require('./server/db/');
const app = require('./server/index.js');

require('babel-register')({
  presets: [ 'es2015' ]
});

require('./server');


const PORT = 5000;

const init = async () => {
  try {
    await db.sync({force: true}).then(() => {
      console.log("database sync complete!");
    });
    app.listen(PORT)
    console.log("Express server listening on port # " + PORT + " !");
  } catch (error) {
    console.log("THIS IS AN ERROR!!@@@@@@@@@@@@@@@@@@@@");
    console.log(error);
  }
}

init();