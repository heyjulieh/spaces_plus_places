import React, {Component} from 'react'


class City extends Component {

	render() {

	  let cityLink = `/cities/${this.props.city._id}`

		return(

			<div className="cityCard col-xs-6 col-sm-4">
				<a href={cityLink}>
				<img alt={this.props.city.cityName} src={this.props.city.imgURL}/>
				<h6 className="cityCardName">{this.props.city.cityName}</h6>
				</a>
			</div>

		)
	}
}

export default City;
