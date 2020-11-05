'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    class Inventory extends Model {}

    Inventory.init({
      name: {
        type: DataTypes.STRING,
        validate: {
          len: [3, 100],
          notEmpty: true,
        }
      },
      quantity:{
        type: DataTypes.INTEGER,
        validate: {
           min:1, 
           notEmpty:true,
        }
      },
      /*dateAdded:{
          type: DataTypes.DATEONLY,
          validate:{
              notEmpty:true,
          }
      },*/
      purchasePrice:{
          type: DataTypes.DECIMAL(10, 2),
          validate:{
              notEmpty:true,
              min:0.00,
          }
      },
      currentPrice:{
        type: DataTypes.DECIMAL(10, 2),
        validate:{
            notEmpty:true,
            min:0.00,
        }
       },
       description:{
          type: DataTypes.TEXT('medium'),
          validate:{
              notEmpty:true,
          }  
       },
    }, {
      sequelize,
      modelName: 'Inventory'
    });
  
    Inventory.associate = (models) => {
      // set up account relation later
      //1 acc has many items, while an item has 1 acc associated with it
    };
  
    return Inventory;
};

