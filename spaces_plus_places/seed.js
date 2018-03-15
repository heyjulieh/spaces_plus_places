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
		neighborhood: 'Wailuku Rivers State Park',
		description: "Rainbow falls might be the biggest waterfall I've ever seen in my life. (I haven't seen Niagara Falls or been to South America-- so this is the biggest waterfall I've seen so far.) And there are other waterfalls nearby (that you'll either see on the way to this main attraction, or on the way back to the start of the entry point-- because the trail is a loop) if you don't get enough waterfalls in your day. What's beautiful about this waterfall is seeing rainbows as the light hits all the mist that comes off of the falling water. The closest point you can get to the falls still seems far away.. and you'll need a zoom lens if you want to take a good photo of the falls. The trek to Rainbow falls was pretty easy and consisted mostly of stairs. Still, be prepared to get a little tired. I would recommend laying on the sunscreen if you're going to visit-- because this is a really lush and humid area, there are crazy amounts of mosquitos. Nearby, there are people selling coconuts off the streets-- I would highly recommend stopping by after your visit to Rainbow falls, just because you'll probably be a bit tired and thirsty, and a juicy coconut will probably go a long way in re-energizing you.",
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
		description: "If you're into fresh fruit, especially tropical fruits (like mango, pineapple, dragon fruit, coconut, and guava), this is the place for you. They've also got vendors selling art, clothing (i.e. Hawaiian shirts, cover-ups, bathing suits, t-shirts..), drinks, jellies/marmalades, vintage memorabilia, candles, etc. Close to the beach, and blocks away from buildings constructed in the early 1900s (definitely reminds me of Pearl Harbor, the movie-- but Pearl Harbor is in Honolulu/Oahu, not the Big Island), the Hilo Farmer's Market is a great place to visit if you're looking to get in a bit of walking while seeing what a day in the life of a Hawaiian could be like. The market is not huge, and doesn't use up a huge chunk of your time, so I would say it's not a must-go place-- but if you're on your way to the beach and are looking for some fresh fruits to take with you, you might want to check the Hilo Farmer's Market out.",
		priority: 1,
		rating: 4,
		placeIMG: '/images/places/hilofarmers.jpg',
		visitDate: '11/7/2016'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Ho Chi Minh City',
		placeName: 'Suoi Tien Amusement Park',
		type: 'Weird',
		neighborhood: 'Tan Phu',
		description: "Suoi Tien was a shocking experience. Now, this is a Buddhist amusement park-- and off the bat, you may guess there would be a dinky (and not scary) dragon rollercoaster, or a peaceful boat ride where you might learn about meditation-- nope. This amusement park is seriously weird. There's a non-legitimate, really scary, Harry Potter maze, the biggest religious statues ever, a water pool area with a giant mountain carved with an idol's face, an area where you can have your dead feet skin gently eaten by fish, and other rides that literally take you on a journey through Hell. I would say the Harry Potter maze was the scariest maze I'd ever been in.. yes, even scarier than the Halloween ones at Knott's, Six Flags, or Universal. It's really dark in there (to a point where you can't see 5 feet in front of you), things are constantly whizzing by, and objects actually touch you! All in all, the experience was a real culture shock, and a place I really could never have imagined. I kept saying to myself, 'is this all real?'. Was it fun? Yes. Only because I like being scared and weirded out. Also, they sell Vietnamese food-- which is way better than the hot dogs and soggy hamburgers that Disneyland offers. I'll take meat sticks, pho, and a side of coconut water-- all for less than 10 bucks-- any day.",
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
		description: "This market is huge and has your usual offerings of counterfeit luxury goods, tourist memorabilia, and food. Things you might want to buy here are coffee, Vietnamese coffee strainers, and wooden utensils (such as serving spoons, chopsticks, and bowls). I wouldn't recommend getting the counterfeit luxury goods or tourist memorabilia-- not that I am against it-- but there are other places nearby that sell these items at cheaper prices. Be aware that Ben Thanh Market is heavily visited by tourists, and all the shop owners know this, so prices offered will always be much higher than the 'real prices', so don't be afraid to haggle a bit. (I, myself, would not buy counterfeit things.. but I'm not going to judge anyone for wanting to do that.) However, the prices are already low-- there's no way you would get a wooden serving spoon for less than 5 dollars in the US at a normal shop (i.e. Container Store or Crate & Barrel). The food here is good-- but I wouldn't say it's better than the food from the stalls outside, or the restaurants nearby. The food here is definitely a bit pricier as well-- again, simply because there are so many tourists.",
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
		description: "If you're into urban streetwear, you know Supreme is the king of it all. If you manage to get something from the store or online, the price can be fair. If you're looking for a resell (an item that is being resold by someone else), you know you're going to need to shell out at least a hundred or more on a t-shirt (whether the quality is there or not). While Supreme started in the good ol' US, there are only two stores in the US-- in New York and Los Angeles. In Japan, there are about five, three of which are in Tokyo. The main Supreme store is in Harajuku. Be aware, if you're going to visit, do not take pictures (otherwise you will get kicked out, no questions asked). Be aware that what is on display is what is available-- so don't bother asking if they've got another item you saw online. They do only put one size out, so you can ask them if they have an item in S, M, L.. etc. English and customer service is very limited at this store, and all stores (probably), so if you want a specific size, use the letters-- it makes it easy for them and you. Lastly, the prices here are higher than in the US. Of course, it's still cheaper than purchasing a resell. There's nothing extremely special about this particular Supreme, but it's a good store to check out if you're already in the Harajuku area.",
		priority: 3,
		rating: 3,
		placeIMG: '/images/places/supreme.jpg',
		visitDate: '3/16/2016'
	},
	{
		userIMG: '/images/profiles/face1.jpg',
		user: 'Julie Huang',
		cityName: 'Tokyo',
		placeName: 'Ghibli Museum',
		type: 'Art & Culture',
		neighborhood: 'Mitaka',
		description: "Before you go to the Ghibli Museum, make sure you've got tickets! (You cannot buy tickets from the museum and will be turned away if you don't have tickets!) You can get these online or from convenience stores (like Lawsons and FamilyMart). I would recommend getting your tickets well in advance of the time you visit Tokyo, because they do sell out. The Ghibli Museum is a huge attraction for tourists and can only hold so many people in the space per day, without disrupting the serenity of the area. The museum is in a residential area (and does take a while to get to from the urban core of Tokyo, requiring multiple transit transfers). When I got to the Ghibli Museum, I felt like I was instantly transported into one of Miyazaki's films. Everything is very green, and the building has that vintage but strange vibe to it. I'm not sure how often they change the exclusive short film at the museum-- but they do!-- And there's exclusive merchandise for it. My favorite part of the experience is getting to see the robot (statue) from Castle in the sky, and sitting in the cafe that overlooks the grassy roof and the catbus room. If you're a fan of Ghibli movies, this is a must, as there's no other experience in the world like it at the moment.",
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
		description: "As an American, I thought the US had it all in terms of malls and shopping. Boy was I wrong. Bangkok is really the land of malls. Within a one block radius, I found 3 malls, all with more than 3 floors, and most include luxury retail. Terminal 21 has 5 floors. I almost did not get through all of them. Each floor is based on a country, and stepping on an elevator is supposed to be like taking a plan and getting to that country. On the first and fifth floor, there's food (and a lot of it is good food-- not your typical Panda Express or Auntie Anne's), and the floors in between have stores, ranging from the usual mall suspects like H&M and Gap, to Thai style boutiques. There really is a full range of prices and styles at this mall, and other malls nearby. (Really, most of the malls are the same, and my big question is.. how can people shop at all the different malls, knowing most of the product offerings are the same?) Of all the floors at Terminal 21, my favorite would be the "Japan" floor which had a lot of Thai style boutiques. The Thai people really know how to dress, and make great business casual and unique clothes. At the food court, I tried Thai green curry and fried chicken-- and it was bomb! I think the curry was better than any curry I've ever had in the US-- and it was much cheaper. If you're looking for salvation from the hot humid weather of Bangkok and food that is probably safer than the street food carts, I'd definitely visit Terminal 21, or any mall in Bangkok.",
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
		description: "Besides being the land of malls, Bangkok is also known for it's lively night markets. This night market happened to be close to a mall we had just finished walking through. (Platinum Mall to be exact. If you're looking for bootleg items, it's the place to be-- but if you're not, I'd stay away. We walked away empty handed and completely exhausted, because it's 5+ floors, two buildings, and the floors are jam packed with vendors, creating a maze effect. I'll provide a post about this soon.) We were tempted to go home after walking through the mall because we were simply tired-- but we decided we would be troopers, and see what the night market was all about. Initially, this particular night market was not on our radar because we hadn't seen any blogs or travel sites talk about it. However, we saw a sign for it on the way to the mall. Getting to the night market was relatively easy, as it is off of a main road, and it was not hard to miss-- due to the heavy smells of Thai bbq, and the lights. The night market did not disappoint! I had tasty chicken skewers, the meatiest fried fish I'd ever seen, bugs, papaya salad with raw crab (which got me really sick.. so my one recommendation for weak stomachs is: don't eat raw seafood at a night market), and got a piercing! Yes, I got a piercing-- and it did not get infected. You can also get really good haircuts, beautiful art, and of course, elephant pants. I would highly recommend putting this on your list if you're going to visit a night market in Bangkok.",
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
		description: "The Eiffel Tower is a must for any tourist visiting Paris. It's iconic and known by everyone around the world. However, like all famous landmarks, it is the biggest tourist trap. There will be many people who approach you, trying to sell you flowers, keychains, and other touristy items before you even reach the ticket booth. There are various tickets, one for going to the top tier of the tower, and one for the lower tier of the tower. Keep in mind that the top tier of the tower is still only barely above the middle of the tower-- you cannot go to the very tip top of the tower. When I went to the tower, it was at night and the light shows were going off, so that was fun. However, if you go at night, you don't get to see much of the landscape around the tower. It can be romantic to go up the tower with a significant other as the view of the Parisian government buildings, museums, and houses nearby is quite nice-- but again, this is a huge tourist trap, so if you want to get romantic, you might want to visit during off-season or at the beginning of the week. Nights are probably less busy than days as well. If I were to go to the Eiffel tower again, I would go during the day time, and have a picnic on the lawn area after. If you want to do the same, be prepared with baguettes, cheese, and croissants before you go!",
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
		description: "Before Laduree expanded to various countries, it was a must to go to Laduree in Paris, and try their famous macaroons. Even if you've tried macaroons at a Laduree outside of Paris, you should still make it a point to stop by Laduree in Paris, simply because the interior design is beautiful, there's a restaurant, and the busy atmosphere just feels right. The macaroons are not expensive, and there are so many flavors to choose from. They provide nice boxes for the macaroons to go into-- which makes it feel like you're getting a luxurious gift-- and you feel guilty eating them. However, because there are Ladurees in the US and Asia now, I wouldn't make it a priority to visit Laduree in Paris, again-- but if you've never tried Laduree in Paris, I would recommend that you go and try the macaroons specific this location.",
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
		description: "Angkor Wat is probably the most well known temple in Cambodia. It is the largest and most in-tact temple of all the temples nearby. Various kings of various religions resided in it-- along with many religious authorities, wives, courtesans, and staff. Their stories are shown through the many intricate Buddhist and Hindu engravings on the wall. The stones that make up this temple/palace were dragged from long distances. It's truly an architectural marvel and was one of the things I wanted to see before I died. I'm happy that I was able to see this place, but it saddens me that I, and any person who visits it now, do not get to see it in its original glory, just because of the destruction that occurred during the various wars. I and tons of people went to this temple at 5 in the morning to see the sun rise, and see Angkor Wat reflected with the sunrise in the mote's water. It's a beautiful sight, and gone all too quickly. I would highly recommend seeing Angkor Wat during the sunrise. It's definitely a rare opportunity-- and a memory that will likely last a lifetime.",
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
		description: "Having been to Hong Kong, Vietnam, and Thailand, Siem Reap's night markets probably live in the shadows of any list I have regarding night markets. This night market and various night markets nearby (which all seem to melt into one) seem to only serve tourists. All the items being sold seem to be the same across the hundreds of vendors-- silk scarves, tie pants, jewelry, spices, etc. I think the lack of culture and identity, as well as the heavy direction toward tourism, is due especially to the recent civil war that occurred. It really took away a lot of things, including lives, resources, clean water, and historically significant buildings. The majority of Siem Ream and Cambodia is poor. So the experience of going into Angkor Night Market and any night market in Siem Reap will reflect this poverty-- and it will be eye opening, and there will be constant attempts to try to get your business. If I have any advice for people visiting, I would say: smile and do not be offended that so many people are aggressively trying to get your business. The night market is a great way to get tourist money flowing into the pockets of the people, but the competition is really high, and a bit of money (even $1) goes a long way towards providing for these peoples' families. It is unfortunate that the Angkor Night Market and other night markets in Siem Reap are not original or culturally unique-- but buying a few things here or there, whether it is tourist junk or not, will likely help a family.",
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
