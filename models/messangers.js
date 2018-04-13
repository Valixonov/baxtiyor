'use strict';
module.exports = (sequelize, DataTypes) => {
  var Messangers = sequelize.define('Messangers', {
    text: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  Messangers.associate = function(models) {

    models.Messangers.belongsTo(models.Messangers, {
      onDelete: "CASCADE",
      foreignKey:"RetryId"
    });
    models.Messangers.belongsTo(models.Users, {
      onDelete: "CASCADE",
      foreignKey:"From_User",
    });
    models.Messangers.belongsTo(models.Groups, {
      onDelete: "CASCADE",
    });
    models.Messangers.belongsTo(models.Users, {
      onDelete: "CASCADE",
      foreignKey:"To_User",
      as:"to_User"
    });

    // associations can be defined here
  };
  return Messangers;
};