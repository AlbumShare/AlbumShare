const Sequelize = require('sequelize');
const db = require('../db');
// const Albums = require('../db/models');
// const Users = require('../db/models');

const Comments = db.define('Comments',
{

	commentId:
	{
		type: Sequelize.INTEGER,
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},

	//the albumId where the comment belong
	// albumId:
	// {
	//     type: Sequelize.BIGINT,
	//     AllowNull: false,
	//     notEmpty: true,
	//     references:
    // 	{
	//     	model: Albums,
	//     	key: 'albumId',
	//     	deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    // 	}
    // },

    // person who wrote the comment
	// userName:
	// {
	//     type: Sequelize.STRING,
	//     AllowNull: false,
	//     notEmpty: true,
	//     references:
    // 	{
	//     	model: Users,
	//     	key: 'userName',
	//     	deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    // 	}
    // },

    // the actual comment
    comment:
    {
    	type: Sequelize.TEXT,
    	notEmpty: true,
    	AllowNull: false
    }
},{timestamp: true,
		createdAt: 'commentCreateTime',
		updatedAt: false
});

// Albums.hasMany(Comments);
// Users.hasMany(Comments);

module.exports = Comments;