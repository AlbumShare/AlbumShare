const Sequelize = require('sequelize');
const db = require('../db');
const validate = require('validator')

const Albums = db.define('Albums', 
{
	//albumId, auto increments
	albumId: {
		type: Sequelize.INTEGER,
		validate: {
			isNumeric: true
		},
		AllowNull: false,
		notEmpty: true,
		primaryKey: true,
		autoIncrement: true
	},


    //privacy field: whether the album is public or private
    privacy: {
    	type: Sequelize.INTEGER,
    	defaultValue: 1
    },

    //number of likes the album gets
    likes: {
    	type: Sequelize.INTEGER,
    	defaultValue: 0
    },
    //array of comments ids
    comments: {
    	type: Sequelize.ARRAY(Sequelize.BIGINT)
    },
    //User description about the album
    description: {
    	type: Sequelize.TEXT
    },
},{
		timestamps: true,
		createdAt: 'albumCreateTime',
		updatedAt: 'albumsUpdateTime',
	});
module.exports = Albums;