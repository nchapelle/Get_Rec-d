var Sequelize = require("sequelize");
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.js")[env];

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
  } else {
    var sequelize = new Sequelize(
      config.database,
      config.username,
      config.password,
      config
    );
  }

module.exports = function (sequelize, DataTypes) {
    var User_team_xfer = sequelize.define("User_team_xfer", {
        user_id: {
            type: DataTypes.STRING,
        },
        team_id: {
            type: DataTypes.STRING,
        }
    });

    return User_team_xfer;
};
