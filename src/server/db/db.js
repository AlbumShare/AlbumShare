const Sequelize = require('sequelize');
const pkg = require('../../../package.json');

// Make Database
<<<<<<< HEAD
const db = new Sequelize(`postgres://localhost:5432/albumshare`, {
  logging: false,
});



=======
const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  force: true,
  logging: true,
});

>>>>>>> 692c5ba87b249b523280a559a1b69f02b9fc31e8
module.exports = db;