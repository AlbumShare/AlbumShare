const Sequelize = require('sequelize');
const db = require('./../db');

const Albums = sequelized.define('Albums', 
{
	timestamps: true,
	createdAt: 'albumCreateTime',
	updatedAt: 'albumsUpdateTime',

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

    //privacy field: wheather the album is public or private
    privacy:
    {
    	type: Sequelize.INTEGER,
    	AllowNull: false,
    	defaultValue: 1
    },

    //number of likes the album gets
    likes:
    {
    	type: Sequelize.INTEGER,
    	defaultValue: 0
    },
    //array of comments ids
    comments:
    {
    	type: Sequelize.ARRAY(Sequelize.BIGINT(11))
    },
    //User description about the album
    description:
    {
    	type: Sequelize.TEXT
    }

});

module.exports = Albums;