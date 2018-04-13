'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      BankId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Banks",
          key:"id"
        }
      },
      RegionId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Regions",
          key:"id"
        }
      },
      GroupId:{
        type:Sequelize.INTEGER,
        allowNull:false,
        references:{
          model:"Group",
          key:"id"
        }
      },
      login: {
        type: Sequelize.STRING,
        unique:{
          args: true,
          msg: 'Bunday login mavjud!'
        }
      },
      last_name: {
        type: Sequelize.STRING
      },
      first_name: {
        type: Sequelize.STRING
      },
      middle_name: {
        type: Sequelize.STRING
      },
      mobile: {
        type: Sequelize.STRING
      },
      tin: {
        type: Sequelize.INTEGER
      },
      nps: {
        type: Sequelize.INTEGER
      },
      selection: {
        type: Sequelize.STRING
      },
      position: {
        type: Sequelize.STRING
      },
      last_time: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.BOOLEAN
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
    return queryInterface.dropTable('Users');
  }
};