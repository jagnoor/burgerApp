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



// ******************

var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");

router.get("/burger", function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  })
});

router.post("/", function(req, res) {
  console.log(req.body);


  burger.create([
    "burger_name", "devoured"
  ], [
    req.body.name, false
  ], function() {
    res.redirect("/");
  });

});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burger.update({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  });
});

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  burger.delete(condition, function() {
    res.redirect("/");
  });
});

module.exports = router;



