const { DataTypes } = require("sequelize");
const sequelize = require("../configurations/database");
const bcrypt = require("bcrypt");

const User = sequelize.define(
  "User",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        min: 8,
      },
    },
  },
  {
    timestamps: true,
  },
);

module.exports = User;

User.beforeCreate(async (user) => {
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
});

User.prototype.checkPassword = function (plainText) {
  return bcrypt.compare(plainText, this.password);
};

User.associate = (models) => {
  User.hasMany(models.Resume, {
    foreignKey: "userId",
    onDelete: "CASCADE",
  });
};
