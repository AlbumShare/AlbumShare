const Albums = require('./Albums')
const Comments = require('./Comments')
const Users = require('./Users')
const User_followers = require('./User_follower')
const Photos = require('./Photos')

Users.hasMany(Albums, {foreignKey: 'userName'});

Albums.belongsTo(Users, {foreignKey: 'userName',
	as: 'owner'
});

// Albums.hasMany(Photos)

Photos.belongsTo(Albums, {foreignKey:'albumId'});

User_followers.belongsToMany(Users, {through: 'userName'});

Comments.belongsTo(Albums, {foreignKey: 'albumId'});

Users.belongsToMany(Comments, {through: 'commentId'});

module.exports = {
    Albums,
    Comments,
    Users,
    User_followers,
    Photos
}

