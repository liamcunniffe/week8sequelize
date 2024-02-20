const { DataTypes } = require("sequelize");
const sequelize = require("../db/connection");

const Author = sequelize.define(
  "Genre",
  {
    authorname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = Author;
