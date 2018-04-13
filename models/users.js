'use strict';
module.exports = (sequelize, DataTypes) => {
  var Users = sequelize.define('Users', {
    login: DataTypes.STRING,
    last_name: DataTypes.STRING,
    first_name: DataTypes.STRING,
    middle_name: DataTypes.STRING,
    mobile: DataTypes.STRING,
    tin: DataTypes.INTEGER,
    nps: DataTypes.INTEGER,
    selection: DataTypes.STRING,
    position: DataTypes.STRING,
    last_time: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    socket_id:DataTypes.STRING
  }, {

  });
  Users.associate = function(models) {
    models.Users.hasMany(models.Messangers,{
      foreignKey:"From_User",
    });
    models.Users.hasMany(models.ConnectedUsers);
    models.Users.hasMany(models.Messangers,{
      foreignKey:{
        trimRight:true,
        name:"To_User"
      },
      as:"To"

    });
    models.Users.belongsTo(models.Banks, {
      onDelete: "CASCADE",
      foreignKey:"BankId"
    });
    models.Users.belongsTo(models.Groups, {
      onDelete: "CASCADE",
    });
    models.Users.belongsTo(models.Regions, {
      onDelete: "CASCADE",
      foreignKey:"RegionId"
    });

    // associations can be defined here
  };
  return Users;
};