import React, { useState } from "react";
import "../css/body.css";
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Body() {
  const [height, setHeight] = useState(0);
  const [weight, setMass] = useState(0);
  const [bmi, setBmi] = useState(0);

  const calculate = (e) => {
    e.preventDefault();
    const formValid = +height > 0 && +weight > 0;
    if (!formValid) {
      return;
    }
    const bmi = +weight / (+height) ** 2;
    setBmi(bmi);
  };

  return (
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
<div class="bodytop">Body</div>    
    <div className="container">
      <form onSubmit={calculate}>
        <div>
          <label className="ht">Height (in meters)</label>
          <input value={height} onChange={(e) => setHeight(e.target.value)} className="ht-input"/>
        </div>

        <div>
          <label className="wt">Weight (in kg)</label>
          <input value={weight} onChange={(e) => setMass(e.target.value)} className="wt-input" />
        </div>

        <button type="submit" className="bmi-btn">Calculate BMI</button>
      </form>
      <p className="result">BMI: {bmi}</p>
    </div>
    </>
  );
}

export default Body;