//importing dependencies
var express = require('express'),
    mongoose = require('mongoose'),
    db = require('./models'),
    controllers = require('./controllers'),
    bodyParser = require('body-parser'),
    Place = require('./models/place'),
    City = require('./models/city');

var path = require('path');

var app = express(),
    router = express.Router();

// MLab : Mongoose Config
var databaseUrl = process.env.MONGODB_URI;
mongoose.createConnection(databaseUrl || 'mongodb://heroku_qv4qm2ct:orcu6p14ccpouvln85d4e8j894@ds115219.mlab.com:15219/heroku_qv4qm2ct')
mongoose.Promise = global.Promise;

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//to config API to use body body-parser and look for JSON in req.body
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


//Prevent CORS errors
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  //Remove caching
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

app.get('/api', controllers.api.index); //done
app.get('/api/cities', controllers.city.index);
app.get('/api/cities/:cityId', controllers.city.show); //done
app.get('/api/places', controllers.place.index); //done
app.get('/api/cities/:cityId/places', controllers.place.show); //done
app.post('/api/places', controllers.place.create); //done
app.get('/api/cities/:cityId/places/:placeId', controllers.place.showOne); //done
app.delete('/api/cities/:cityId/places/:placeId', controllers.place.destroy);
app.put('/api/cities/:cityId/places/:placeId', controllers.place.update);


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/client/build/index.html'));
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
