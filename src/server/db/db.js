const Sequelize = require('sequelize');
const pkg = require('../../package.json');

// Make Database
const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  logging: false,
});


module.exports = db;