const Sequelize = require('sequelize');
const db = require('../../db');

var Book = db.define('book', {
    title: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false,
    },
    price: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    urlImage: {
        type: Sequelize.STRING,
        allowNull: true,
    },
});

module.exports = Book