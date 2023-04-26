const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;
const bcrypt = require("bcrypt");



exports.create = (req, res) => {
    //Fehler, wenn Passwörter nicht übereinstimmen
    if (!(req.body.password === req.body.password2)) {
        res.status(400).send({
            message: "Passwörter stimmen nicht überein!"
          });
          console.log("Passwörter stimmen nicht überein!");
          return;
    }
    //Fehler wenn die jeweiligen Felder leer sind
    if (!req.body.vorname) {
        res.status(400).send({
          message: "Vorname can not be empty!"
        });
        console.log("Vorname cannot be empty");
        return;
    }
    if (!req.body.nachname) {
        res.status(400).send({
          message: "Nachname can not be empty!"
        });
        console.log("Nachname cannot be empty");
        return;
    }
    if (!req.body.email) {
        res.status(400).send({
          message: "Email can not be empty!"
        });
        console.log("Email cannot be empty");
        return;
    }
    
    if (!req.body.gebdatum) {
        res.status(400).send({
          message: "Gebdat can not be empty!"
        });
        return;
    }
    if (!req.body.country) {
        res.status(400).send({
          message: "Country can not be empty!"
        });
        console.log("Country cannot be empty");
        return;
    }
    if (!req.body.username) {
        res.status(400).send({
          message: "Username can not be empty!"
        });
        console.log("Username cannot be empty");
        return;
    }
    if (!req.body.password) {
        res.status(400).send({
          message: "Password can not be empty!"
        });
        console.log("Password cannot be empty");
        return;
    }
    if (!req.body.password2) {
        res.status(400).send({
          message: "Password2 can not be empty!"
        });
        console.log("Password2 cannot be empty");
        return;
    }
    const hashedPassword = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync());
    //User createn
    const benutzer = {
        vorname: req.body.vorname,
        nachname: req.body.nachname,
        email: req.body.email,
        gebDatum: req.body.vorname,
        country: req.body.country,
        username: req.body.username,
        password: hashedPassword
    }

    Users.create(benutzer)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the User."
            });
            console.log("Some error occurred while creating the User.");
          });
};


exports.findOne = (req, res) => {
    if (!req.params.username) {
        res.status(400).send({
          message: "Username can not be empty!"
        });
        console.log("Username cannot be empty");
        return;
    }
    if (!req.body.password) {
        res.status(400).send({
          message: "Password can not be empty!"
        });
        console.log("Password cannot be empty");
        return;
    }

    const benutzername = req.params.username;

    Users.findByPk(benutzername)
    .then(data => {
      if (data) {
        if(bcrypt.compareSync(req.body.password, data.password)) {
          res.send(data);
        }else {
          res.status(404).send({
            message: `Passwort stimmt nicht überein`
          });
          console.log("Passwort stimmt nicht überein");
        }
        
      } else {
        res.status(404).send({
          message: `Cannot find User with username=${benutzername}.`
        });
        console.log("Cannot find User with username");
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving User with id=" + benutzername
      });
      console.log("Error retrieving User with Id");
    });
};