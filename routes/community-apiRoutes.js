var db = require("../models");

module.exports = function(app) {
    app.get("/api/chart", function(req, res) {
      db.chart.findAll({}).then(function(dbchart) {
        res.json(dbchart);
      });
    });
  
    app.get("/api/chart/:id", function(req, res) {
      db.chart.findOne({
        where: {
          id: req.params.id
        }
      }).then(function(dbchart) {
        res.json(dbchart);
      });
    });
  
    app.post("/api/chart", function(req, res) {
      db.chart.create(req.body).then(function(dbchart) {
        res.json(dbchart);
      });
    });
  
    app.delete("/api/chart/:id", function(req, res) {
      db.chart.destroy({
        where: {
          id: req.params.id
        }
      }).then(function(dbchart) {
        res.json(dbchart);
      });
    });
  
  };
  