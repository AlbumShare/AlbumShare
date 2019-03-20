const Sequelize = require('sequelize');
const db = require('./../db');

const User_follows = db.define("userFollowers", {
	//autoincremented follower id
	fId:
	{
		type:Sequelize.BIGINT(11),
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},
	// user that is being followered
	userName:
	{
	    type: Sequelize.STRING,
	    AllowNull: false,
	    notEmpty: true,
	    references: 
    	{
	    	model: "Users",
	    	key: 'userName',
	    	deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    	}
    },
    // user that is following ppl
    followerName:
    {
    	type: Sequelize.STRING,
    	AllowNull: false,
    	notEmpty: true,
    	references:
    	{
    		model:"Users",
    		key: 'userName',
    		deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    	}
    }
});

module.exports = User_follows
