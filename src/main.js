<<<<<<< HEAD

// import db from './server/db/db';
// import app from './server';
const db = require('./server/db/');
=======
// import db from './server/db/db';
// import app from './server';
const db = require('./server/db/index.js');
>>>>>>> 692c5ba87b249b523280a559a1b69f02b9fc31e8
const app = require('./server/index.js');

require('babel-register')({
  presets: [ 'es2015' ]
});

require('./server');


const PORT = 5000;

<<<<<<< HEAD
// db.sync()
//   .then((promise) => {
//     // console.log(promise);
//     console.log("db synced!");
//     app.listen(PORT, () => {
//       console.log("Express server listening on port # " + PORT + "!" );
//     })
//   })
// db.authenticate().then(() => {
//   console.log('connected to database');
// })

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
=======
db.sync()
  .then(() => {
    console.log("db synced!");
    app.listen(PORT, () => {
      console.log("Express server listening on port # " + PORT + "!" );
    })
  })
>>>>>>> 692c5ba87b249b523280a559a1b69f02b9fc31e8
