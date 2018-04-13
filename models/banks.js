'use strict';
module.exports = (sequelize, DataTypes) => {
    var Banks = sequelize.define('Banks', {
        name: DataTypes.STRING,
        code: DataTypes.STRING,
        region: DataTypes.INTEGER
    }, {});
    Banks.associate = function (models) {
        models.Banks.belongsTo(models.Regions, {
            onDelete: "CASCADE",
            foreignKey: {
                allowNull: false
            }
        });
        models.Banks.hasMany(models.Users)
        // associations can be defined here
    };
    return Banks;
};