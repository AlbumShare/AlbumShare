// const Sequelize = require('sequelize');
//
// const albumsharedb = new Sequelize('albumsharedb', 'adminUser', process.env.dbPassword, {
//     host: 'albumsharedb.cxiesvd9xb7s.us-east-2.rds.amazonaws.com',
//     dialect: 'postgres',
//     logging: false,
//     pool: {
//         max: 5,
//         min: 0,
//         idle: 10000
//     },
// });
//
// albumsharedb.authenticate()
//     .then(() => {
//         console.log('Connected to database');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });
//
//
// module.exports = albumsharedb

const db = require('./db')

// register models
require('./models')

module.exports = db