module.exports = app => {
    const users = require("../controllers/controller.js");
    var router = require("express").Router();

    //Registrieren - Create User
    router.post("/api/registrieren", users.create)
    router.get("/api/login/:username", users.findOne)
    app.use('/', router);
}