import React, {Component} from 'react'

class Footer extends Component {

	render() {

		return(

			<footer>
				<div className="container">
					<div className="col-lg-4 col-md-4 col-sm-4 pull-right">
					<h5>Stay Connected</h5>
						<ul className="linkfooter">
							<li><a href="https://facebook.com/jliehng">Facebook</a></li><br></br>
							<li><a href="https://instagram.com/jliehng_">Instagram</a></li><br></br>
						</ul>
					</div>
					<div className="col-lg-7 col-md-7 col-sm-7 pull-left">
						<p>Spaces + Places is a personal travel planning application made with the intention of sharing my experiences and insight on places and spaces I have traveled or will travel to. I will share more soon so keep checking back! Feel free to connect with me if you have any questions about any of the spaces + places you see on this page.</p>
						<br/>
						<p id="footer-copyright">Powered by When & How © 2018</p>
					</div>
				</div>
			</footer>

		)
	}
}

export default Footer;
