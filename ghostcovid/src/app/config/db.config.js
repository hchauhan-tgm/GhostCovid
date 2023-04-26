module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "Pass2020!",
    DB: "ghostcovid",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };

  /*
  $host = "localhost";
  $port = "5432"; 
  $dbname = "ghostcovid";
  $user = "postgres";
  $password = "Pass2020!"; */