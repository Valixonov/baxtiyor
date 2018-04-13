'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Messangers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
        RetryId:{
          type:Sequelize.INTEGER,
          allowNull:true,
          references:{
            model:"Messangers",
            key:"id"
          }
      },
      From_User:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:"Users",
          key:"id"
        }
      },
      To_User:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:"Messangers",
          key:"id"
        }
      },
      GroupId:{
        type:Sequelize.INTEGER,
        allowNull:true,
        references:{
          model:"Groups",
          key:"id"
        }
      },
      dataType:{
        type:DataTypes.ENUM,
        values:['text','image']
      },
      text: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Messangers');
  }
};