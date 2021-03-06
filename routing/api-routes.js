
module.exports = function(app) {
    app.get("/api/burgers", function(req, res) {
      // Here we add an "include" property to our options in our findAll query
      // We set the value to an array of the models we want to include in a left outer join
      // In this case, just db.Post
      db.Burger.findAll({
        include: [db.Post]
      }).then(function(burgers_db) {
        res.json(burgers_db);
      });
    });
}
