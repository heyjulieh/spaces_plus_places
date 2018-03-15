import React, {Component} from 'react'

class CreatePlaceForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userIMG: this.props.currentUser,
      user: this.props.currentUser,
      placeName: '',
      type: '',
      neighborhood: '',
      description: '',
      priority: '',
      rating: '',
      visitDate: '',
      cityName: this.props.cityName,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleNewPlaceSubmit = this.handleNewPlaceSubmit.bind(this);
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
    if (e.target.name === 'rating') {
  		this.setState({ rating: e.target.value });
  	}
    if (e.target.name === 'priority') {
  		this.setState({ priority: e.target.value });
  	}
    if (e.target.name === 'visitDate') {
  		this.setState({ visitDate: e.target.value });
  	}
    if (e.target.name === 'neighborhood') {
  		this.setState({ neighborhood: e.target.value });
  	}
  }

  handleNewPlaceSubmit(e) {
    e.preventDefault();
    let cityName = this.props.cityName;
    let userIMG = this.props.currentUser.photoURL;
    let user = this.props.currentUser.displayName;
    let placeName = this.state.placeName.trim();
    let type = this.state.type.trim();
    let neighborhood = this.state.neighborhood.trim();
    let description = this.state.description.trim();
    let priority = this.state.priority.trim();
    let rating = this.state.rating.trim();
    let visitDate = this.state.visitDate;

    if (!placeName || !description) {
        return;
    }
    this.props.onCreatePlaceFormSubmit(
    {	cityName: cityName,
      userIMG: userIMG,
    	user: user,
    	placeName: placeName,
      type: type,
    	neighborhood: neighborhood,
      description: description,
      priority: priority,
      rating: rating,
      visitDate: visitDate
    });
    this.setState(
    {	placeName: placeName,
      type: type,
      neighborhood: neighborhood,
      description: description,
      priority: priority,
      rating: rating,
      visitDate: visitDate
    });
  }

  render() {
    return (
      <div className="container">
        <div className="form-group">
          <h3 className="formheader">Add a place</h3>
          <form onSubmit={ this.handleNewPlaceSubmit }>
            <input
              className='form-control'
              type='text'
              name='placeName'
              placeholder='Name of place'
              value={ this.state.placeName }
              onChange={ this.handleInputChange } /><br></br>
            <input
              className='form-control'
              type='text'
              name='neighborhood'
              placeholder='Neighborhood'
              value={ this.state.neighborhood }
              onChange={ this.handleInputChange } /><br></br>
            <input
              className='form-control'
              type='text'
              name='type'
              placeholder='Type of Activity'
              value={ this.state.type}
              onChange={ this.handleInputChange } /><br></br>
            <textarea
              className='form-control'
              rows='8'
              type='text'
              name='description'
              placeholder='Describe the place'
              value={ this.state.description }
              onChange={ this.handleInputChange } /><br></br>
            <input
              className='form-control'
              type='text'
              name='priority'
              placeholder='Priority of visit'
              value={ this.state.priority}
              onChange={ this.handleInputChange } /><br></br>
            <input
              className='form-control'
              type='text'
              name='rating'
              placeholder='Rating of visit'
              value={ this.state.rating}
              onChange={ this.handleInputChange } /><br></br>
            <input
              className='form-control'
              type='text'
              name='visitDate'
              placeholder='Date of visit'
              value={ this.state.visitDate}
              onChange={ this.handleInputChange } /><br></br>
            <button
              type='submit'
              className='btn btn-primary'
              value='Place'>Submit</button>
  	    </form>
       </div>
     </div>
   )
  }
}

export default CreatePlaceForm;
