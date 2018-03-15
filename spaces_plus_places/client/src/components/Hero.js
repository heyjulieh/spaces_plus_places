import React, {Component} from 'react'

class Hero extends Component {
	constructor() {
		super();
		this.state = {
			scrollURL: ''
		}
	}

	render() {

		return(

			<div className="hero container">
				<video poster="./images/Shibuya.jpg" id="bgvid" playsinline autoPlay muted loop>
					<source src="./images/Shibuya.webm" type="video/webm"/>
					<source src="./images/Shibuya.mp4" type="video/mp4"/>
				</video>
				<div id="welcometext">
					<h1>Spaces + Places</h1>
					<p>Sharing my travel plans and experiences<br/>for all the great spaces and places<br/>around the world, one city at a time.</p>
				</div>
			</div>
		)
	}
}

export default Hero;
