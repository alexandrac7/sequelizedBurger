var path = require("path");

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
 app.get("/", function(req, res) {


    res.render("index");
  });

  app.get("/burgers", function(req, res) {
    console.log("HEY YA");
    db.Burger.findAll()

    .then(function(dbBurger) {
      console.log(dbBurger)
    }

  )

    // res.render("index");
  });


};
