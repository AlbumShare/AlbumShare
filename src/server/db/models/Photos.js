const Sequelize = require('sequelize');
const db = require('../db');

// import SequelizeFile from 'sequelize-file';

// export const picture = SequelizeFile({
// 	attribute: 'picture',
// 	mimetype: /^image/,
// 	crop: true,
// 	sizes: {
// 		small: 64, //width 64
// 		big: 150, //width 150
// 	}
// });

const Photos = db.define('Photos',
{
	photoId:
	{
		type: Sequelize.INTEGER,
		primaryKey: true,
		unique: true,
		autoIncrement: true
	},

	url:
		{
			type: Sequelize.STRING,
			unique: true
		}
}, {timestamps:false});

// picture.addTo(Photos);

module.exports = Photos;
