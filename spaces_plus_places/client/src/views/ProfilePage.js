import React, { Component } from 'react';
import Nav from '../components/Nav'
import PlacesContainer from '../containers/PlacesContainer'
import Footer from '../components/Footer'
import ProfileHeader from '../components/ProfileHeader'

class ProfilePage extends Component {
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
      <ProfileHeader />
      <PlacesContainer
        routeParams={this.props.params}
        onGetUserData={this.getUserData.bind(this)} />
      <Footer />
    </div>
    )
  }
}

export default ProfilePage;
