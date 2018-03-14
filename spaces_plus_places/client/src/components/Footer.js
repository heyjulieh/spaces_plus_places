import React, {Component} from 'react'

class Footer extends Component {

	render() {

		return(

			<footer>
				<div className="container">
					<div className="col-lg-4 col-md-4 col-sm-4 pull-right">
					<h5>Connect with us</h5>
						<ul className="linkfooter">
							<li><a href="https://facebook.com">Facebook</a></li><br></br>
							<li><a href="https://instagram.com">Instagram</a></li><br></br>
						</ul>
					</div>
					<div className="col-lg-7 col-md-7 col-sm-7 pull-left">
						<p>Spaces + Places is a personal travel planning application made for us. It keeps track of the places we have traveled to and makes it easy to share with friends. More cities and places will be added so keep checking back.</p>
						<br/>
						<p id="footer-copyright">Powered by When & How © 2018</p>
					</div>
				</div>
			</footer>

		)
	}
}

export default Footer;
