import React from "react";
import "../css/sleep.css";
import sleep from "../components/sleep.mp3";
import { Link } from 'react-router-dom';
import ReactPlayer from "react-player";
import '../css/Navbar.css';

function Sleep()
{
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
            <div className="sleeptop">Sleep</div> 
        <div className="musicbox">Music</div>
        <div className="music">
        <audio controls>
            <source src={sleep} type="audio/mpeg" />
        </audio>
        </div>
        <br />
        <form>
            <p className="tos">Time of going to sleep</p>
                <input type="datetime-local" name="time of sleep" id="time of sleep" className="tosbox" placeholder="IST" required autoFocus />
            <p className="tow">Time of waking up</p>
                <input type="datetime-local" name="distance run" id="distance" class="towbox" placeholder="IST" required autoFocus />
            <br />
            <p className="qos">Quality of Sleep</p>
            <select className="qosbox" name="dropdown">
            <option value="good" >Good</option>
            <option value="average">Average</option>
            <option value="bad">Bad</option>
            </select>
            <button className="sub" type ="submit">Submit</button>
        </form>
        <ReactPlayer controls url="https://www.youtube.com/watch?v=aEqlQvczMJQ" className="yt"/> 
        </>
    )
}

export default Sleep;