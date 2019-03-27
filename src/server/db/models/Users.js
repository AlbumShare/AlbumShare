const Sequelize = require('sequelize');
const db = require('../db');
const crypto = require('crypto');

const Users = db.define("Users", {
  userName:{
    type: Sequelize.STRING,
    AllowNull: false,
    unique: 'compositeIndex',
    notEmpty: true,
    primaryKey: true
  },

  firstName: {
    type: Sequelize.STRING,
    AllowNull: false,
    notEmpty: true
  },

  lastName: {
    type: Sequelize.STRING,
    AllowNull: false,
    notEmpty: true
  },

  email: {
    type: Sequelize.STRING,
    isEmail: true,
    notEmpty: true
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
},{
  timestamps: false
});

// INSTANCE METHODS

/**
 * Checks that input password is correct.
 * Will check the input password against password 'stored' in our database.
 * 
 * @param {string} inputPassword   Password that user tries to log in with.
 * 
 * @return {bool}                  Password is correct(T) or incorrect(F).
 */
Users.prototype.passwordIsCorrect = function(inputPassword) {
    return Users.encryptPassword(inputPassword, this.salt()) === this.password();
}

// CLASS METHODS
Users.generateSalt = function() {
  return crypto.randomBytes(16).toString('base64');
}

/**
 * Encrypts password using a randomly generated salt.
 * 
 * @param {string} password      Password that user set/logs-in with
 * @param {string} salt          Cryptographically generated salt
 * 
 * @return {string}              Retruns 'digested' password. A 'digest' is the output of a hash function.
 */

Users.encryptPassword = function(password, salt) {
  return crypto
  .createHash('RSA-SHA256')	
  .update(password)
  .update(salt)
  .digest('hex');
}

// HOOKS
/**
 * Sets salt and password before user is created or updated. 
 * @param {*} user       
 * 
 * @returns {null}  returns nothing
 */
const setSaltAndPassword = function (user) {
  if(user.changed('password')) {
    user.salt = Users.generateSalt();
    user.password = Users.encryptPassword(user.password(), user.salt());
  }
}

Users.beforeCreate(setSaltAndPassword);
Users.beforeUpdate(setSaltAndPassword);

Users.associate = models => {
    Users.hasMany(models.Albums, {onDelete: 'CASCADE'});
  };

module.exports = Users;