const Alubms = require('./Albums')
const Comments = require('./Comments')
const Users = require('./Users')
const User_followers = require('./User_follower')
const Photos = require('./Photos')

Users.hasMany(Alubms)
Alubms.belongsTo(Users, {through: 'userName'})

Users.hasMany(User_followers)
User_followers.belongsTo(Users)

Alubms.hasMany(Photos)
Photos.belongsTo(Alubms, {through: 'albumId'})

Alubms.hasMany(Comments)
Comments.belongsTo(Alubms, {through: 'albumId'})

module.exports = {
    Alubms,
    Comments,
    Users,
    User_followers,
    Photos
}

