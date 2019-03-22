const Sequelize = require('sequelize');
const pkg = require('../../../package.json');

// Make Database
const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  force: true,
  logging: false,
});

// Test Database
db.authenticate()
  .then(() => {
    console.log('Database authenticated successfully.');
  })
  .catch(err => {
    console.log('Error: ' + err);
  })
  .then(() => {
    db.sync();
  })
  
module.exports = db;