'use strict';
module.exports = (sequelize, DataTypes) => {
    var Regions = sequelize.define('Regions', {
        name: DataTypes.STRING
    }, {});
    Regions.associate = function (models) {
        models.Regions.hasMany(models.Banks);
        models.Regions.hasMany(models.Users);
        // associations can be defined here
    };
    return Regions;
};