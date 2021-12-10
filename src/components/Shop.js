import React from 'react'
import "../css/shop.css"
import "../css/welcomepage.css"
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Shop(){
    return(
        <>
        <ul className="ul">
                <li><Link to="/Welcomepage">Home</Link></li>
                <li><Link to="/Signin">Signin</Link></li>
                <li><Link to="/Signup">Signup</Link></li>
                <li><Link to="/Body">Body</Link></li>
                <li><Link to="/Activity">Activity</Link></li>
                <li><Link to="/Sleep">Sleep</Link></li>
                <li><Link to="/Food">Food</Link></li>
                <li><Link to="/Shop">Shop</Link></li>
            </ul>
            <div class="shoptop">Shop</div>
<div className="total">
<div className="row">
  <div className="column1">
    <h2>Adidas</h2>
    <a href="https://www.adidas.co.in"><p>Go to website</p></a>
  </div>
  <div className="column2">
    <h2>Reebok</h2>
    <a href="https://www.reebok.com/us"><p>Go to website</p></a>
  </div>
</div>
<div className="row">
<div className="column3">
    <h2>Nike</h2>
    <a href="https://www.nike.com/in/"><p>Go to website</p></a>
  </div>
  <div className="column4">
    <h2>Decathlon</h2>
    <a href="https://www.decathlon.in"><p>Go to website</p></a>
  </div>
</div>
<div className="row">
<div className="column5">
    <h2>Fitbit</h2>
    <a href="https://www.fitbit.com/global/in/home"><p>Go to website</p></a>
  </div>
  <div className="column6">
    <h2>Cure.fit</h2>
    <a href="https://www.cult.fit"><p>Go to website</p></a>
  </div>
</div>
</div>
        </>
    )
}    

export default Shop;