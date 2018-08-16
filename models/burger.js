module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    // Giving the Burger model a name of type STRING
    burger_name: { 
      type: DataTypes.STRING,
  },

  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},

  devoured: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

});
  return Burger;

};
