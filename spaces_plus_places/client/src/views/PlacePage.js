import React, { Component } from 'react';
import Nav from '../components/Nav'
import PlaceDetailContainer from '../containers/PlaceDetailContainer'
import Footer from '../components/Footer'

class PlacePage extends Component {
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
    <div id="placePage">
      <Nav
        onGetUserData={this.getUserData.bind(this)}/>
      <PlaceDetailContainer
        routeParams={this.props.params}
        onGetUserData={this.getUserData.bind(this)}/>
      <Footer />
    </div>
    )
  }
}

export default PlacePage;
