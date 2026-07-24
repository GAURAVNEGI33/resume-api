'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Resume extends Model {
    static associate(models) {
      Resume.belongsTo(models.User, {
        foreignKey: "userId",
      });
    }
  }
  Resume.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: DataTypes.TEXT,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Resume',
  });
  return Resume;
};