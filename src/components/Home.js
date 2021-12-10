import React from 'react'
import image from "../components/image.jpeg"
import "../css/home.css"
import { Link } from 'react-router-dom';

function Home()
{
	return(
			<div id="body">
        			<img src={image} alt="fitness" className="img" />
					<div class="upper-pane">
					<Link to="/Signin"><p class="signin">Sign In</p></Link>
					<Link to="/Signup"><p class="register">Sign Up</p></Link>
					</div>				
    			<h3 className="welcome">Welcome to</h3>
   				<h2 className="hc">Health&Care</h2>
  	 		</div>
			   
		)
}

export default Home;