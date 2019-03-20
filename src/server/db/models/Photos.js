const Sequelize = require('sequelize');
const db = require('./../db');

const Photos = db.define('Photos',
{
	photoId:
	{
		type: Sequelize.BIGINT(11),
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},

	//the albumId where the photo belong
	albumId:
	{
	    type: Sequelize.BIGINT(11),
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

module.exports = Photos;
