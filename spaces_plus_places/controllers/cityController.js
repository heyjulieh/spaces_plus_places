var db = require('../models');

// Shows all cities in /api/cities route
function index(req, res) {
  db.City.find({})
    .exec(function(error, cities) {
      if (error) { res.send(error) };
      res.json(cities);
    });
}

function show(req, res) {
  db.City.findById(req.params.cityId, function(error, city) {
    if (error) { res.send(error) };
    res.json(city);
  });
}


module.exports = {
	index: index,
	show: show
};
