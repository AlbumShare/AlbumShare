const Sequelize = require('sequelize');
const db = require('../db');
// const Users = require('./Users');

const User_follows = db.define("userFollowers", {
	//autoincremented follower id
	fId:
	{
		type:Sequelize.INTEGER,
		primaryKey: true,
		unique: true,
		autoIncrement: true
	}
	// user that is being followed
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
    // // user that is following ppl
    // followerName:
    // {
    // 	type: Sequelize.STRING,
    // 	AllowNull: false,
    // 	notEmpty: true,
    // 	references:
    // 	{
    // 		model:Users,
    // 		key: 'userName',
    // 		deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
    // 	}
    // }
},{timestamps:false})

// Users.hasMany(User_follows);
module.exports = User_follows;
