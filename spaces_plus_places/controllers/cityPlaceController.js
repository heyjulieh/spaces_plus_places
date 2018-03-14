var db = require('../models');

// Shows all places in /api/places
function index(req, res) {
	db.Place.find({})
    .exec(function(error, places) {
      if (error) { res.send(error) };
      res.json(places);
    });
};

// Shows all places in /api/cities/:cityId/places route
function show(req, res) {
	var cityName = req.params.cityId;
  db.Place.find({cityName: cityName})
	.exec(function(error, places) {
		if (error) { res.send(error) };
		res.json(places);
  });
}

// Shows a specific place in /api/cities/:cityName/places/:placeId
function showOne(req, res) {
	var placeId = req.params.placeId;
	 db.Place.findById(placeId, function(err, foundPlace) {
			 res.json(foundPlace);
	 });
}

// Create a new place at /api/places
function create(req, res) {
	var newPlace = new db.Place({
		userIMG: req.body.userIMG,
		user: req.body.user,
		placeName: req.body.placeName,
		type: req.body.type,
		neighborhood: req.body.neighborhood,
		description: req.body.description,
		priority: req.body.priority,
		rating: req.body.rating,
		visitDate: req.body.date,
		placeIMG: req.body.placeIMG,
		cityName: req.body.cityName
	});

  db.City.findOne({cityName: req.body.cityName}, function(err, cityName){
  if (err) {
    return console.log(err);
  }
     newPlace.save(function(err, place){
       if (err) {
         return console.log("save error: " + err);
       }
       console.log("saved ", place.placeName);
       res.json(place);
     });
   });
 };

 function destroy(req, res) {
   db.Place.remove({_id: req.params.placeId}, function(error, place) {
     if (error) { res.send(error) };
     res.json({ message: 'place has been deleted' })
   });
 }


// Updates a specific place in a specific cityName
function update(req, res) {
	db.Place.findById(req.params.placeId, function (err, updatePlace) {
 		if (err) {
			res.send(err)
		};
		updatePlace.placeName = req.body.placeName;
		updatePlace.description = req.body.description;
		updatePlace.rating = req.body.rating;
		updatePlace.priority = req.body.priority;
		updatePlace.placeIMG = req.body.placeIMG;
		updatePlace.visitDate = req.body.visitDate;
		updatePlace.save(function(err, updatedPlace) {
			if (err) {
				console.log('place save error: ', err);
			} else {
				console.log('saved place: ', updatedPlace);
				res.json(updatedPlace);
			}
		});
	});
};

module.exports = {
	index: index,
	show: show,
	showOne: showOne,
	create: create,
	destroy: destroy,
	update: update
}
