import React, {Component} from 'react'
import { firebase, auth } from '../utils/firebase'
import $ from 'jquery-ajax'
import NavCity from './NavCity'

class Nav extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pageName: '',
			currentUser: null,
      loggedIn: false,
			cities: []
		}
		this.loadCitiesFromServer = this.loadCitiesFromServer.bind(this);
    this.handleGetUserData = this.handleGetUserData.bind(this)
    this.loginButtonClicked = this.loginButtonClicked.bind(this)
    this.logoutButtonClicked = this.logoutButtonClicked.bind(this)
	}

	componentWillMount() {
    auth.onAuthStateChanged(currentUser => {
      if (currentUser) {
        // set currentUser in App component state
        this.setState({ currentUser });
				this.setState({ loggedIn: true });
      } else {
        this.setState({ currentUser: null });
				this.setState({ loggedIn: false});
      }
    })
  }

	loginButtonClicked(e) {
    e.preventDefault();
    // set up provider
    const provider = new firebase.auth.GoogleAuthProvider();
    // tell Firebase auth to log in with a popup and that provider
    auth.signInWithPopup(provider);
	}

	loadCitiesFromServer() {
		$.ajax({
			method: 'GET',
			url: '/api/cities'
		})
		.then( res => this.setState({cities: res}))
	}

  componentDidMount() {
		this.loadCitiesFromServer();
    setInterval(this.handleGetUserData, 3000);
  }

  handleGetUserData() {
    var uData = this.state.currentUser;
    () => {
      this.props.onGetUserData(uData)
    }
  }

	logoutButtonClicked(e) {
    // tell Firebase auth to log out
    auth.signOut();
		location.reload();
	}

	render() {
		let loggedIn = this.state.loggedIn;
		let citiesArray = this.state.cities.map( (city) => {
			return (
					<NavCity
						key={city._id}
						city={city} />
			)
		});

		if(loggedIn){
			return(
				<nav className="navbar">
          <div className="container-fluid">
            <div className="navbar-header">
							<a href="/" className="navbar-brand" >Spaces + Places</a>
              	<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
              	</button>
        		</div>
            <div className="collapse navbar-collapse" id="myNavbar">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a className="dropdown-toggle" data-toggle="dropdown" href="/">Cities <span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    {citiesArray}
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-right">
                <li id="userName">Welcome, {this.state.currentUser && this.state.currentUser.displayName}</li>
                <li><a className="log" onClick={this.logoutButtonClicked}>Log Out</a></li>
              </ul>
            </div>
          </div>
        </nav>
			)
		}
		return(
			<nav className="navbar">
        <div className="container-fluid">
          <div className="navbar-header">
						<a href="/" className="navbar-brand" >Spaces + Places</a>
            	<button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
            	</button>
      		</div>
          <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav">
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" href="#">Cities <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  {citiesArray}
                </ul>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li id="userName">{this.state.currentUser && this.state.currentUser.displayName}</li>
              <li><a className="log" onClick={this.loginButtonClicked}>Login</a></li>	
            </ul>
          </div>
        </div>
      </nav>
		)
	}
}

export default Nav;
