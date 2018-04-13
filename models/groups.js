'use strict';
module.exports = (sequelize, DataTypes) => {
  var Groups = sequelize.define('Groups', {
    name: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  Groups.associate = function(models) {
    models.Groups.hasMany(models.Users);
    models.Groups.hasMany(models.Messangers);
  };
  return Groups;
};