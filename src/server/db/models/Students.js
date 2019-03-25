const Sequelize = require("sequelize");
const db = require("../db");

const Students = db.define("students", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
    notEmpty: true
  },
  email: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://image.shutterstock.com/image-vector/facebook-profile-icon-gray-person-260nw-465585245.jpg"
  },
  gpa: {
    type: Sequelize.FLOAT,
    validate: {
      max: 4.0,
      min: 0.0
    }
  }
});

module.exports = Students;