const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo

  sequelize.define('recipe', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      notEmpty: true,
    },
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    summary:{
      type:DataTypes.TEXT,
      allowNull: false,
    },
    score:{
      type:DataTypes.INTEGER,
    },
    instructions:{
      type:DataTypes.TEXT,
    },
});
};

//     ID: *
// Nombre *
// Resumen del plato *
// Nivel de "comida saludable" (health score)
// Paso a paso