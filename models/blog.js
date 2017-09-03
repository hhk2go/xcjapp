module.exports = (sequelize, DataTypes) => {
  return sequelize.define("Blog", {
    no: DataTypes.INTEGER,
    title: DataTypes.STRING,
    image: DataTypes.STRING,
    description: DataTypes.TEXT,
    by: DataTypes.STRING,
    url: DataTypes.STRING,
    tags: DataTypes.STRING,
    likes: DataTypes.INTEGER
  });
};
