module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      vorname: {
        type: Sequelize.STRING
      },
      nachname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      gebdatum: {
        type: Sequelize.DATEONLY
      },
      country: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      password: {
        type: Sequelize.STRING
      },
      password2: {
        type: Sequelize.STRING
      }
    });
  
    return Users;
  };