'use strict';
module.exports = (sequelize, DataTypes) => {
  var ConnectedUsers = sequelize.define('ConnectedUsers', {
    sockedid: DataTypes.STRING
  }, {});
  ConnectedUsers.associate = function(models) {
    models.ConnectedUsers.belongsTo(models.Users, {
      onDelete: "CASCADE",
    });
    // associations can be defined here
  };
  return ConnectedUsers;
};