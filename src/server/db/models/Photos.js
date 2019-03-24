const Sequelize = require('sequelize');
const db = require('../db');

const Photos = db.define('Photos',
{
	photoId:
	{
		type: Sequelize.BIGINT,
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},

	//the albumId where the photo belong
	albumId:
	{
	    type: Sequelize.BIGINT,
	    AllowNull: false,
	    notEmpty: true,
	    references: 
    	{
	    	model: "Albums",
	    	key: 'albumId',
	    	deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    	}
    }
	//TODO: we need to figure out how to store the actual photo in the db
	//create a column for the photo storage
});

Photos.sync({force:false});

module.exports = Photos;
