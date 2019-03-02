const Sequelize = require('sequelize');
const db = require('./../db');

const Albums = sequelized.define('Albums', 
{
	//albumId, auto increments
	albumId:
	{
		type: Sequelize.BIGINT(11),
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},

	// owner of the album
	userName:
	{
	    type: Sequelize.STRING,
	    AllowNull: false,
	    notEmpty: true,
	    references: 
    	{
	    	model: Users,
	    	key: 'userName',
	    	deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    	}
    },



});

module.exports = {up(queryInterface, )}