

// require the orm file
var orm = require("../config/orm.js");


// create a variable to export

var burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },

  insertOne: function(name, cb) {
    orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
  },

  updateOne: function(id, cb) {
    var change = "id=" + id;
    orm.updateOne("burgers", {
      devoured: true
    }, change, cb);
  }
};

module.exports = burger;