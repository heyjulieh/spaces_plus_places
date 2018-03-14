function index(req,res) {
    res.json({
        message: 'You have hit the Spaces + Places API.',
        documentation_url:'https://github.com/heyjulieh/spaces_plus_places.git',
        base_url: 'localhost:3000',
        endpoint: [
          {
          method: 'GET',
          path: '/api',
          description: 'shows all avaliable routes as JSON'
          },
          {
          method: 'GET',
          path: '/api/cities',
          description: 'shows all cities as JSON'
          },
          {
          method: 'GET',
          path: '/api/cities/:name',
          description: 'shows a specific city as JSON'
          },
          {
          method: 'GET',
          path: '/api/cities/:name/places',
          description: 'shows all places for a specific city in JSON'
          },

          {
          method: 'GET',
          path: '/api/cities/:name/places/',
          description: 'shows all places within a specific city as JSON'
          },
          {
          method: 'GET',
          path: '/api/cities/:name/places/:placeId',
          description: 'shows a specific place within a specific city JSON'
          }
        ]
    });
}

module.exports.index = index;
