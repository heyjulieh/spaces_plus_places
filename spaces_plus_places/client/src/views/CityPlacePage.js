import React, { Component } from 'react';
import Nav from '../components/Nav'
import PlacesContainer from '../containers/PlacesContainer'
import Footer from '../components/Footer'

class CityPlacePage extends Component {
  constructor() {
    super();
    this.state = {
      userData: []
    }
  }
  getUserData(uData) {
    this.setState({userData : uData})
  }

  render() {

    return (
    <div>
      <Nav
        onGetUserData={this.getUserData.bind(this)} />
      <PlacesContainer
        routeParams={this.props.params}
        onGetUserData={this.getUserData.bind(this)}
        />
      <Footer />
    </div>
    )
  }
}

export default CityPlacePage;
