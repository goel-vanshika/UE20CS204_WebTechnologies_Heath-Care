import React from "react";
import "../css/activity.css"
import { Link } from 'react-router-dom';
import '../css/Navbar.css';

function Activityform(){
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
            <div class="activitytop">Activity</div>        
		<table>
        <tr> 
        <th>       
        <p className="run">Running</p>
        </th>
        <td>
        <form>
            <p className="trun">Time Spent</p>            
                    <input type="number" name="time spent" id="time" className="trunbox" placeholder="in mins" required autoFocus />
            <p className="drun">Distance Run</p>
                <input type="number" name="distance run" id="time" className="drunbox" placeholder="in kms" required autoFocus />
            <p className="crun">Calories Burnt</p>
                <input type="number" name="calories burnt" id="calories" className="crunbox"required autoFocus />
            <button className="runsubmit" >Submit</button></form>
        </td>
        <td>

        <p className="walk">Walking</p>
        <form>
            <p className="twalk">Time Spent</p>            
                    <input type="number" name="time spent" id="time" className="twalkbox" placeholder="in mins" required autoFocus/>
            <p className="dwalk">Distance Walked</p>
                <input type="number" name="distance walked" id="time" className="dwalkbox" placeholder="in kms" required autoFocus/>
            <p className="cwalk">Calories Burnt</p>
                <input type="number" name="calories burnt" id="calories" className="cwalkbox"required autoFocus />
            <button className="walksubmit">Submit</button><br /><br />
        </form>
        </td>
        </tr>
        <tr>
        <th>    
        <p className="cycle">Cycling</p>
        </th>
        <td>
        <form>
             <p className="tcycle">Time Spent</p>            
                     <input type="number" name="time spent" id="time" className="tcyclebox" placeholder="in mins" required autoFocus />
             <p className="dcycle">Distance Cycled</p>
                 <input type="number" name="distance cycled" id="time" className="dcyclebox" placeholder="in kms" required autoFocus />
             <p className="ccycle">Calories Burnt</p>
                 <input type="number" name="calories burnt" id="calories" className="ccyclebox"required autoFocus />
             <button className="cyclesubmit">Submit</button>
         </form>
         </td>
         <th>
         <p className="swim">Swimming</p>
         </th>
         <td>
         <form>
             <p className="tswim">Time Spent</p>            
                     <input type="number" name="time spent" id="time" className="tswimbox" placeholder="in mins" required autoFocus />
             <p className="dswim">Distance Swam</p>
                 <input type="number" name="distance swam" id="time" className="dswimbox" placeholder="in kms" required autoFocus />
             <p className="cswim">Calories Burnt</p>
                 <input type="number" name="calories burnt" id="calories" className="cswimbox"required autoFocus />
             <button className="swimsubmit">Submit</button>
         </form>
        </td>
        </tr>
        </table>
        </>
    )
}
export default Activityform;
