import React, {Component} from 'react'
class PlaceDetail extends Component {
  constructor(props) {
    super(props)
    this.state={
        cityName: this.props.place.cityName,
        user: this.props.place.user,
        userIMG: this.props.place.userIMG,
        visitDate: this.props.place.visitDate,
        placeName: this.props.place.placeName,
        description: this.props.place.description,
        type: this.props.place.type,
        neighborhood: this.props.place.neighborhood,
        priority: this.props.place.priority,
        rating: this.props.place.rating,
        placeIMG: this.props.place.placeIMG,
        editMode: false
    }
    this.deletePlace = this.deletePlace.bind(this)
    this.updatePlace = this.updatePlace.bind(this);
    this.handleUpdatePlace = this.handleUpdatePlace.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(e) {
    if (e.target.name === 'placeName') {
        this.setState({ placeName: e.target.value });
    }
    if (e.target.name === 'description') {
        this.setState({ description: e.target.value });
    }
    if (e.target.name === 'type') {
        this.setState({ type: e.target.value });
    }
    if (e.target.name === 'neighborhood') {
        this.setState({ neighborhood: e.target.value });
    }
    if (e.target.name === 'priority') {
        this.setState({ priority: e.target.value });
    }
    if (e.target.name === 'rating') {
        this.setState({ rating: e.target.value });
    }
    if (e.target.name === 'placeIMG') {
        this.setState({ placeIMG: e.target.value });
    }
    if (e.target.name === 'visitDate') {
        this.setState({ visitDate: e.target.value });
    }
  }

  deletePlace(e) {
    let targetPlace = this.state;
    e.preventDefault();
    var result = confirm("Are you sure you want to delete this place?");
    if (result) {
      this.props.onPlaceDelete(targetPlace);
    }
  }

  updatePlace(e) {
    e.preventDefault();
    this.setState({editMode: !this.state.editMode});
  }

  handleUpdatePlace(e) {
    e.preventDefault();
    let placeName = this.state.placeName
    let description = this.state.description
    let neighborhood = this.state.neighborhood
    let type = this.state.type
    let priority = this.state.priority
    let rating = this.state.rating
    let visitDate = this.state.visitDate
    let placeIMG = this.state.placeIMG
    let targetPlace = this.state;

    if (!placeName || !description) {
      return;
    }
    this.props.onPlaceUpdate(targetPlace);
    this.setState({
        editMode: !this.state.editMode,
        placeName: '',
        description: '',
        neighborhood: '',
        type: '',
        priority: '',
        rating: '',
        placeIMG: '',
        user: this.state.user,
        userIMG: this.state.userIMG,
        visitDate: ''
    })
  }

  render() {
    let currentUser = this.props.currentUser && this.props.currentUser.displayName;
    let placeUser = this.props.place.user;
    console.log('currentUser is: ', currentUser);
    console.log('placeUser is: ', placeUser);
    if(currentUser === placeUser){
      return(
        <div className="showPlace container-fluid wrapper">
          <div className="placeCard container-fluid col-xs-12">
            <div className="row">
              <div className="placeSection col-xs-12 col-sm-5 col-md-4">
                  <img className="placeImage" src={this.props.place.placeIMG} alt={this.props.place.placeName}></img>
              </div>
              <div className="placeInfo col-xs-12 col-sm-7 col-md-8">
                  <h3 className="placeName">{this.props.place.placeName}</h3>
                  <h5 className="placeCity">{this.props.city}</h5>
                  <p className="placeUser">by {this.props.place.user}</p>
                  <p className="placeDescription">{this.props.place.description}</p>
                  <h6 className="placeDate">Visited on: {new Date(this.props.place.visitDate).toDateString()}</h6>
                  <button className='btn btn-default' onClick={this.updatePlace}><span className="glyphicon glyphicon-pencil" aria-hidden="true"></span>EDIT</button>
                  <button className='btn btn-warning' onClick={this.deletePlace}><span className="glyphicon glyphicon-trash" aria-hidden="true"></span>DELETE</button>
              </div>
            </div>
          </div>
           { (this.state.editMode)
               ? (<div className="container">
                <div className="form-group row">
                  <form className="cityList-form" onSubmit={ this.handleUpdatePlace }>
                    <input
                      className='form-control'
                      type='text'
                      name='placeName'
                      placeholder={ this.state.placeName}
                      value={ this.state.placeName }
                      onChange={ this.handleInputChange } /><br></br>
                    <input
                      className='form-control'
                      type='text'
                      name='type'
                      placeholder={ this.state.type}
                      value={ this.state.type}
                      onChange={ this.handleInputChange } /><br></br>
                    <input
                      className='form-control'
                      type='text'
                      name='neighborhood'
                      placeholder={ this.state.neighborhood}
                      value={ this.state.neighborhood }
                      onChange={ this.handleInputChange } /><br></br>
                    <textarea
                      className='form-control'
                      rows='8'
                      type='text'
                      name='description'
                      placeholder={ this.state.description }
                      value={ this.state.description }
                      onChange={ this.handleInputChange } /><br></br>
                    <input
                      className='form-control'
                      type='text'
                      name='priority'
                      placeholder={ this.state.priority}
                      value={ this.state.priority}
                      onChange={ this.handleInputChange } /><br></br>
                    <input
                      className='form-control'
                      type='text'
                      name='rating'
                      placeholder={ this.state.rating}
                      value={ this.state.rating}
                      onChange={ this.handleInputChange } /><br></br>
                    <input
                      className='form-control'
                      type='text'
                      name='visitDate'
                      placeholder={ this.state.visitDate}
                      value={ this.state.visitDate}
                      onChange={ this.handleInputChange } /><br></br>
                    <input
                      className='form-control'
                      type='text'
                      name='placeIMG'
                      placeholder={ this.state.placeIMG}
                      value={ this.state.placeIMG}
                      onChange={ this.handleInputChange } /><br></br>
                    <input
                      type='submit'
                      className='btn btn-primary'
                      value='Save' />
                  </form>
                </div>
              </div>)
          : null}
        </div>
      )
    }
    return(
      <div className="showPlace container-fluid wrapper">
        <div className="placeCard container-fluid col-xs-12">
          <div className="row">
            <div className="placeSection col-xs-12 col-sm-5 col-md-4">
              <img className="placeImage" src={this.props.place.placeIMG} alt={this.props.place.placeName}></img>
            </div>
            <div className="placeInfo col-xs-12 col-sm-7 col-md-8">
              <h3 className="placeName">{this.props.place.placeName}</h3>
              <h5 className="placeCity">{this.props.city}</h5>
              <p className="placeUser">by {this.props.place.user}</p>
              <p className="placeDescription">{this.props.place.description}</p>
              <h6 className="placeDate">Visited on: {new Date(this.props.place.visitDate).toDateString()}</h6>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default PlaceDetail;
