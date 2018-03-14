'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var City = require('./city');

var PlaceSchema = new Schema({
	userIMG: String,
	user: String,
	cityName: {
		type: Schema.Types.ObjectId,
		ref: 'City'
	},
	placeName: String,
	type: String,
	neighborhood: String,
	description: String,
	priority: Number,
	rating: Number,
	placeIMG: String,
	visitDate: Date
});

module.exports = mongoose.model('Place', PlaceSchema);
