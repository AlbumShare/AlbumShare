const Sequelize = require('sequelize');
const db = require('./../db');

const Comments = sequelize.define('Comments',
{
	timestamp: true,
	createdAt: 'commentCreateTime',
	updatedAt: false,
	
	commentId:
	{
		type: Sequelize.BIGINT(11),
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},

	//the albumId where the comment belong
	albumId:
	{
	    type: Sequelize.BIGINT(11),
	    AllowNull: false,
	    notEmpty: true,
	    references: 
    	{
	    	model: Albums,
	    	key: 'albumId',
	    	deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    	}
    },

    // person who wrote the comment
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

    // the actual comment
    comment:
    {
    	type: Sequelize.TEXT,
    	notEmpty: ture,
    	AllowNull: false
    }
});


module.exports = Photos;