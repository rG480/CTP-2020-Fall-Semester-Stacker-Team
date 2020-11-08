'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Users extends Model {}

    Users.init({
        userName: {
            type: DataTypes.STRING,
            validate: {
              len: [3, 100],
              notEmpty: true,
            }
          },
        userEmail: {
            type: DataTypes.STRING,
            validate: {
              len: [3, 100],
              notEmpty: true,
            }
          },
        userPassword: {
            type: DataTypes.STRING,
            validate: {
              len: [3, 100],
              notEmpty: true,
            }
          },
    }, {
        sequelize,
        modelName: 'Users'
      });

      Users.associate = (models) => {
        // associations can be defined here
      };

      return Users;
    };