const sequelize = require ("../db/connection");
const { DataTypes } = require ('sequelize')

const Film = sequelize.define('Supermovies', {
    name: {
        type: DataTypes.STRING,
        allowNull : false
    },
    actor: {
        type: DataTypes.STRING,
        allowNull : false,
        defaultValue: "empty string"
    },
    genre: {
        type: DataTypes.STRING,
        allowNull : false
        
    },

    rating: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultvalue: 0

}

});


module.exports = Film;
