import React, {Component} from 'react'

class Place extends Component {

    render() {
        let formattedDate = new Date(this.props.place.visitDate).toDateString();
        let truncatedText = this.props.place.description.substring(0, 350) + '…';
        let placeLink = `/cities/${this.props.place.cityName}/places/${this.props.place._id}`

        return(
          <div className="placeCard container-fluid col-xs-12">
            <div className="row">
              <div className="placeSection col-xs-12 col-sm-5 col-md-4">
                <img className="placeImage" src={this.props.place.placeIMG} alt={this.props.place.placeName}></img>
              </div>
              <div className="placeInfo col-xs-12 col-sm-7 col-md-8">
                <h3 className="placeName">{this.props.place.placeName}</h3>
                <p className="placeUser">By {this.props.place.user}</p>
                <p className="placeText">{truncatedText}</p>
                <h6 className="placeDate">Visited on: {formattedDate}</h6>
                <h5><a href={placeLink}>Read more</a></h5>
              </div>
            </div>
          </div>
        )
    }
}

export default Place;
