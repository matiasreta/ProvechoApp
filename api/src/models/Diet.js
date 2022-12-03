const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('diet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    id:{
      type:DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
});
};


// ID
// Nombre