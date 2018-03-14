import React, {Component} from 'react'
import $ from 'jquery-ajax'
import PlaceDetail from '../components/PlaceDetail'
import { auth } from '../utils/firebase'

class PlaceDetailContainer extends Component {
	constructor() {
		super();
		this.state = {
			currentUser: null,
			loggedIn: false,
			place: [],
			city: []
		}

		this.loadPlaceFromServer = this.loadPlaceFromServer.bind(this);
		this.handlePlaceUpdate = this.handlePlaceUpdate.bind(this);
		this.handlePlaceDelete = this.handlePlaceDelete.bind(this);
		this.handleGetUserData = this.handleGetUserData.bind(this);
		this.loadCityFromServer = this.loadCityFromServer.bind(this);
	}

	componentWillMount() {
		auth.onAuthStateChanged(currentUser => {
			if (currentUser) {
				// set currentUser in App component state
				this.setState({ currentUser });
				this.setState({ loggedIn: true });
			} else {
				this.setState({ currentUser: null });
				this.setState({ loggedIn: false });
			}
		})
	}


	loadCityFromServer() {
		$.ajax({
			method: 'GET',
			url: `/api/cities/${this.props.routeParams.cityName}`
		})
		.then( res => this.setState({city: res}))
	}

	loadPlaceFromServer() {
		$.ajax({
			method: 'GET',
			url: `/api/cities/${this.props.routeParams.cityName}/places/${this.props.routeParams.placeId}`
		})
		.then((res) => {
			this.setState({place: res})
		})
	}

	handlePlaceDelete(targetPlace) {
		$.ajax({
			method: 'DELETE',
			url: `/api/cities/${this.props.routeParams.cityName}/places/${this.props.routeParams.placeId}`,
			data: targetPlace
		})
		.then((res) => {
			console.log(res)
		})
		window.location.href=`/cities/${this.props.routeParams.cityName}`
	}

	handlePlaceUpdate(targetPlace) {
		$.ajax({
			method: 'PUT',
			url: `/api/cities/${this.props.routeParams.cityName}/places/${this.props.routeParams.placeId}`,
			data: targetPlace
		})
		.then((res) => {
			this.setState({place: targetPlace})
		})
	}

	componentDidMount() {
		this.loadPlaceFromServer();
		this.loadCityFromServer();
		setInterval(this.loadPlacesFromServer, this.loadCityFromServer, this.handleGetUserData, this.props.pollInterval)
	}

	handleGetUserData() {
		var uData = this.state.currentUser;
		() => {
			this.props.onGetUserData(uData)
		}
	}

	render() {
		console.log('this.state.currentUser is: ', this.state.currentUser)

		return(
			<div className="placePage">
				<PlaceDetail
					place={ this.state.place }
					placeName={this.state.place.placeName}
					description={this.state.place.description}
					type={this.state.place.type}
					neighborhood={this.state.place.neighborhood}
					priority={this.state.place.priority}
					rating={this.state.place.rating}
					placeIMG={this.state.place.placeIMG}
					visitDate={this.state.place.visitDate}
					uniqueId={this.state.place._id}
					key={this.state.place._id}
					onPlaceUpdate={this.handlePlaceUpdate}
					onPlaceDelete={this.handlePlaceDelete}
					city={this.state.city.cityName}
					currentUser={this.state.currentUser}
					loggedIn={this.state.loggedIn}
				/>
			</div>
		)
	}
}

export default PlaceDetailContainer;
