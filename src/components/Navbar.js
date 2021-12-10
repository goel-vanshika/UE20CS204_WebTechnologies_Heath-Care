import React from "react";
import { Link } from "react-router-dom";
import '../css/Navbar.css';


function Navbar(){
    return(
        <>
        <div className="body">
            <div class="hc">
 		<h1>Health and Care</h1>
         </div>
         <nav className="shop">
            <ul className="ul">
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
        </>
    );
}

export default Navbar;
