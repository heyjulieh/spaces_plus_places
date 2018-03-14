import React from 'react'
import {Route} from 'react-router'
import Home from '../views/Home'
import CityPlacePage from '../views/CityPlacePage'
import PlacePage from '../views/PlacePage'
import ProfilePage from '../views/ProfilePage'


module.exports = (
	<div>
  		<Route path='/' component={Home} />
  		<Route path='/user' component={ProfilePage} />
  		<Route path='/cities/:cityId' component={CityPlacePage}/>
  		<Route path='/cities/:cityName/places/:placeId' component={PlacePage}/>
	</div>
)
