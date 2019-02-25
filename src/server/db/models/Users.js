const Sequelize = require('sequelize');
const db = require('./../db');
const crypto = require('crypto');

const Users = db.define("users", {
  firstName: {
    type: Sequelize.STRING,
    AllowNull: false,
    notEmpty: true,
  },

  lastName: {
    type: Sequelize.STRING,
    AllowNull: false,
    notEmpty: true,
  },

  email: {
    type: Sequelize.STRING,
    isEmail: true,
    notEmpty: true,
  },
  // SECURITY
  salt: {
    type: Sequelize.STRING,
    //making .salt be a method hides it when serializing to JSON.
    //Sequelize lacks a private option and is a solution around it.
    get() {
      return () => this.getDataValue('salt');
    }
  },
  
  password: {
    type: Sequelize.STRING,
    //making .password be a method hides it when serializing to JSON.
    //Sequelize lacks a private option and is a solution around it.
    get() {
      return () => this.getDataValue('password');
    }
  }
});

/* 
 * Instance Methods
 */

Users.prototype.correctPassword = function() {

}

/*
 * Class Methods
 */

Users.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
}

Users.encryptPassword = function(password, salt) {
  return crypto
  .createHash('RSA-SHA256')
  .update(password)
  .update(salt)
  .digest('hex');
}

/*
 * Hooks
 */
const setSaltAndPassword = function (user) {
  if(user.changed('password')) {
    user.salt = Users.generateSalt();
    user.password = Users.encryptPassword(user.password(), user.salt());
  }
}

Users.beforeCreate(setSaltAndPassword());
Users.beforeUpdate(setSaltAndPassword());

module.exports = Users