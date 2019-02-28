const Sequelize = require('sequelize');
const db = require('./../db');

const Albums = sequelized.define('Albums', 
{
	//albumId, auto increments
	albumId:
	{
		type: Sequelize.LONG,
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

    date_created:
    {
    	type: Sequelize.DATE,
    	defaultValue: Sequelize.NOW
    },

    date_edit:
    {
    	type: Sequelize.DATE,
    	
    }

});