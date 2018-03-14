var db = require('./models');

var cities_list = [
	{
		cityName: 'Ho Chi Minh City',
		country: 'Vietnam',
		imgURL: '/images/cities/hochiminh.jpg'
	},
	{
		cityName: 'Bangkok',
		country: 'Thailand',
		imgURL: '/images/cities/bangkok.jpg'
	},
	{
		cityName: 'Big Island, Hawaii',
		country: 'United States',
		imgURL: '/images/cities/bigisland.jpg'
	},
	{
		cityName: 'Tokyo',
		country: 'Japan',
		imgURL: '/images/cities/tokyo.jpg'
	},
	{
		cityName: 'Paris',
		country: 'France',
		imgURL: '/images/cities/paris.jpg'
	},
	{
		cityName: 'Siem Reap',
		country: 'Cambodia',
		imgURL: '/images/cities/angkor.jpg'
	}
];

var places_list = [
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Big Island, Hawaii',
		placeName: 'Rainbow Falls',
		type: 'Hiking',
		neighborhood: 'Volcanoes National Park',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		priority: 1,
		rating: 4,
		placeIMG: '/images/places/rainbowfalls.jpg',
		visitDate: '11/6/2016'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Big Island, Hawaii',
		placeName: 'Hilo Farmer\'s Market',
		type: 'Eating',
		neighborhood: 'Hilo',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		priority: 1,
		rating: 4,
		placeIMG: '/images/places/hilofarmers.jpg',
		visitDate: '11/7/2016'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Hawaii, Big Island',
		placeName: 'Akaka Falls',
		type: 'Hiking',
		neighborhood: 'Waikiki',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		priority: 1,
		rating: 5,
		placeIMG: '/images/places/akakafalls.jpg',
		visitDate: '11/7/2016'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Ho Chi Minh City',
		placeName: 'Suoi Tien Amusement Park',
		type: 'Weird',
		neighborhood: 'Tan Phu',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		priority: 1,
		rating: 4,
		placeIMG: '/images/places/suoitien.jpg',
		visitDate: '12/5/2017'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Ho Chi Minh City',
		placeName: 'Ben Thanh Market',
		type: 'Shopping',
		neighborhood: 'Ben Thanh',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		priority: 1,
		rating: 4,
		placeIMG: '/images/places/benthanh.jpg',
		visitDate: '12/3/2017'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Tokyo',
		placeName: 'Supreme',
		type: 'Shopping',
		neighborhood: 'Harajuku',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		priority: 3,
		rating: 3,
		placeIMG: '/images/places/supreme.jpg',
		visitDate: '3/16/2016'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Tokyo',
		placeName: 'Ghibili Museum',
		type: 'Art & Culture',
		neighborhood: 'Mitaka',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		priority: 1,
		rating: 5,
		placeIMG: '/images/places/ghiblimuseum.jpg',

		visitDate: '8/11/2014'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Bangkok',
		placeName: 'Terminal 21 Mall',
		type: 'Shopping',
		neighborhood: 'Sukhumvit',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		priority: 2,
		rating: 5,
		placeIMG: '/images/places/terminal21.jpg',
		visitDate: '12/07/2017'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Bangkok',
		placeName: 'Telad Neon Night Market',
		type: 'Shopping',
		neighborhood: 'Khet Ratchatkewi',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		priority: 3,
		rating: 5,
		placeIMG: '/images/places/neonnightmarket.jpg',
		visitDate: '12/08/2017'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Paris',
		placeName: 'Eiffel Tower',
		type: 'Monument',
		neighborhood: 'Champ de Mars',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		priority: 1,
		rating: 4,
		placeIMG: '/images/places/eiffeltower.jpg',
		visitDate: '10/16/2015'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Paris',
		placeName: 'Laduree',
		type: 'Eating',
		neighborhood: 'Champs-Elysees',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		priority: 3,
		rating: 4,
		placeIMG: '/images/places/laduree.jpg',
		visitDate: '10/15/2015'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Siem Reap',
		placeName: 'Angkor Wat',
		type: 'Monument',
		neighborhood: 'Angkor Wat',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		priority: 1,
		rating: 5,
		placeIMG: '/images/places/angkorwat.jpg',
		visitDate: '12/10/2017'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Siem Reap',
		placeName: 'Angkor Night Market',
		type: 'Shopping',
		neighborhood: 'Siem Reap',
		description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo.',
		priority: 1,
		rating: 3,
		placeIMG: '/images/places/angkornightmarket.jpg',
		visitDate: '12/11/2017'
	}
];

db.City.remove({}, function(err, cities) {
	db.City.create(cities_list, function(err, cities) {
		if (err) {
			console.log(err);
		}
		db.Place.remove({}, function(err, places) {
			console.log('removed all places')

			places_list.forEach(function(placeInfo) {
				var place = new db.Place({
					userIMG: placeInfo.userIMG,
					user: placeInfo.user,
					cityName: placeInfo.cityName,
					placeName: placeInfo.placeName,
					type: placeInfo.type,
					neighborhood: placeInfo.neighborhood,
					description: placeInfo.description,
					priority: placeInfo.priority,
					rating: placeInfo.rating,
					placeIMG: placeInfo.placeIMG,
					visitDate: placeInfo.visitDate
				});
				db.City.findOne({cityName: placeInfo.cityName}, function(err, foundCity) {
					if(err) {
						console.log(err);
						return;
					}
					place.cityName = foundCity;
					place.save(function(err, savedPlace) {
						if(err) {
							return console.log(err);
						}
						console.log('saved ', savedPlace);
					})
				})
			})
		})
	})
})
