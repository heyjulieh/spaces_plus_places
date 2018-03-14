import React, {Component} from 'react'
import $ from 'jquery-ajax';
import PlaceList from '../components/PlaceList'
import CreatePlaceForm from '../components/CreatePlaceForm'
import { auth } from '../utils/firebase'

class PlacesContainer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentUser: null,
			loggedIn: false,
			places: [],
			city: []
		};

		this.loadPlacesFromServer = this.loadPlacesFromServer.bind(this);
		this.handleNewPlaceSubmit = this.handleNewPlaceSubmit.bind(this);
		this.handleGetUserData = this.handleGetUserData.bind(this);
		this.loadCityFromServer = this.loadCityFromServer.bind(this);

	}

	loadCityFromServer() {
		$.ajax({
			method: 'GET',
			url: `/api/cities/${this.props.routeParams.cityId}`
		})
		.then( res => this.setState({city: res}))
	}

	loadPlacesFromServer(){
    $.ajax({
      method: 'GET',
      url: `/api/cities/${this.props.routeParams.cityId}/places`
    })
    .then( (res) => {this.setState({places: res})
		})
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
	componentDidMount() {
		this.loadPlacesFromServer();
		this.loadCityFromServer();
		// setInterval(this.loadPlacesFromServer, this.props.pollInterval);
		setInterval(this.handleGetUserData, 3000);
	}

  handleGetUserData() {
    var uData = this.state.currentUser;
    () => {
      this.props.onGetUserData(uData)
    }
  }

	handleNewPlaceSubmit(place){
		let places=this.state.places;
		let newPlace=places.concat([place]);
		this.setState({places: newPlace});
		let currentUser=this.state.currentUser;

		$.ajax({
			method: 'POST',
			url: `/api/places/`,
			data: place
		})
		.then(res => {
			console.log('res is: ', res)
		}, err => {
			console.error(err);
		});
		location.reload();
	}

handlePlaceDelete(id){
    $.ajax({
      method: 'DELETE',
      url: `/api/cities/${this.props.routeParams.cityId}/places/${this.props.routeParams.placeId}`

	    })
	    .then((res) => {
	      console.log('Place deleted');
	    }, (err) => {
	      console.error(err);
	    });
	}
    handlePlaceUpdate(id, place) {
    //sends the places id and new text to our api
    $.ajax({
      method: 'PUT',
			url: `/api/cities/${this.props.routeParams.cityId}/places/${this.props.routeParams.placeId}`,
      data: place
    })
    .then(res => {
      console.log(res);
    }, err => {
      console.log(err);
    })
  }

	render() {
		let loggedIn = this.state.loggedIn;
		let currentUser=this.state.currentUser && this.state.currentUser.email;
		console.log('current user is: ', currentUser)
		if(loggedIn && currentUser != 'heyjulieh@gmail.com'){
			return(
				<div className='wrapper placesContainer'>
					<PlaceList
						city={this.state.city.cityName}
						places={this.state.places}
						onPlaceDelete={this.handlePlaceDelete}
						onPlaceUpdate={this.handlePlaceUpdate} />
				</div>
			)
		}
		if(loggedIn && currentUser === 'heyjulieh@gmail.com'){
		return (
			<div className='placesContainer'>
				<PlaceList
					city={this.state.city.cityName}
					places={this.state.places}
					onPlaceDelete={this.handlePlaceDelete}
					onPlaceUpdate={this.handlePlaceUpdate} />
				<CreatePlaceForm
					currentUser={this.state.currentUser}
					loggedIn={this.state.loggedIn}
					onCreatePlaceFormSubmit={this.handleNewPlaceSubmit}
					cityName={this.props.routeParams.cityId} />
			</div>
			)
		}
		else {
			return(
				<div className='placesContainer'>
				<PlaceList
					city={this.state.city.cityName}
					places={this.state.places}/>
	      </div>
			)
		}
	}
}

export default PlacesContainer;
