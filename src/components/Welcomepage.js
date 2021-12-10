import React from 'react'
import "../css/welcomepage.css"
import { Link } from 'react-router-dom';

function Home()
{
	return(
			<div id="body">
					<div className="upper-pane">
					<nav className="shop">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Signin">Signin</Link></li>
                <li><Link to="/Signup">Signup</Link></li>
                <li><Link to="/Body">Body</Link></li>
                <li><Link to="/Activity">Activity</Link></li>
                <li><Link to="/Sleep">Sleep</Link></li>
                <li><Link to="/Food">Food</Link></li>
                <li><Link to="/Shop">Shop</Link></li>
            </ul>
        </nav>
					</div>				
					{/* <img src={run} alt="run"/> */}
    			<h3 className="welcometo">Welcome to</h3>
   				<h2 className="handc">Health&Care</h2>

                   
  	 		</div>
			   
		)
}

export default Home;