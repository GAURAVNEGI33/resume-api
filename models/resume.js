module.exports = (sequelize, DataTypes) => {
  const Resume = sequelize.define("Resume", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.TEXT,
    },
  });

  Resume.associate = (models) => {
    Resume.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };

  return Resume;
};
