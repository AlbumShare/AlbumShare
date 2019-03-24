const Sequelize = require('sequelize');
const pkg = require('../../../package.json');


// Make Database
// const db = new Sequelize(`postgres://localhost:5432/albumshare`, {
//   logging: false,
// });

const DB_Name = 'albumShare',
	DB_endpoint = 'awsdb.cxiesvd9xb7s.us-east-2.rds.amazonaws.com',
	DB_userName = 'adminUser',
	DB_password = 'db123456';

const db = new Sequelize(DB_Name,DB_userName,DB_password,{
	host:DB_endpoint,
	port: 5435,
	logging: false,
	dialect: "postgres",
	pool: {
		max: 30,
		min: 1,
		acquire: 20000,
		idle: 20000
	}
});

// Testing the connection
db.authenticate()
    .then(() => {
        console.log('Connected to database');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

db.sync().then(() =>{
	console.log('AWS RDS Postgres Connection Ready.');
})

module.exports = db;