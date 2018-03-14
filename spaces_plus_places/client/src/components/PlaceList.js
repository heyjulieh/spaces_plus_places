import React, {Component} from 'react'
import Place from './Place'

class PlaceList extends Component {
	render() {
		let placesArray = this.props.places.map( (place) => {
			return (
				<Place
					key={place._id}
					uniqueId={place._id}
					place={place}
					className="placeCard" />
			)
		});

		return(
			<div className="placesList container-fluid">
				<h1 className="cityTitle">{this.props.city}</h1>
					{placesArray}
			</div>
		)
	}
}

export default PlaceList;
