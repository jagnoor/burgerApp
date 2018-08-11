var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.

router.get("/", function(req, res) {
  res.redirect("/burger");
  });

// get all the burgers, then redirec to /
router.get("/burger", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render("index", hbsObject);
  });
});

// make a new burger
router.post("/burger/make", function(req, res) {
  burger.insertOne(req.body.burger_name, function(result) {
    res.redirect("/");
  });
});

// change the burger to eaten
router.put("/burger/eat/:id", function(req, res) {

  burger.updateOne(req.params.id, function(result){
    res.json("/");
  });
});

// Export routes for server.js to use.
module.exports = router;

