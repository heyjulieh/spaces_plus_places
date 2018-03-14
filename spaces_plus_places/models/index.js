  var mongoose = require("mongoose");
  mongoose.connect( process.env.MONGODB_URI || "mongodb://localhost/spacesplusplaces");

  module.exports.City = require('./city');
  module.exports.Place = require('./place');
