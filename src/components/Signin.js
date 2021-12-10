import {React,useState} from 'react';
import "../css/signin.css"
import image from "../components/image.jpeg"
import { Link } from 'react-router-dom';
import axios from "axios";

function Signin()
{
    const [input, setInput] = useState({
        mail_id:'',
        password:''
    })

    function handleChange(event){   
        const{name,value} = event.target;
        setInput(prevInput=>{
            return{
                ...prevInput,
                [name]:value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
		const newUser={
			mail_id:input.mail_id,
			password:input.password
		}
        console.log(newUser)
		axios.post('http://localhost:3001/create',newUser)
    }
    return(
        <div id="body">
        			<img src={image} alt="fitness" className="img" />
					<div className="upper-pane">
					<Link to="/Signin"><p className="signin">Sign In</p></Link>
					<Link to="/Signup"><p className="register">Sign Up</p></Link>
					</div>				
					   <form >
					<p className="usnm">Email</p>	
					<input type="text" name="mail_id" className="enter-signin-mail" value={input.mail_id} onChange={handleChange} required autoFocus /><br />
         				 <p className="pwrd">Password</p>
         				 <input type="password" name="password" className="enter-signin-pass" value={input.password} onChange={handleChange} required autoFocus /><br />
         			<button type="button" name="button" className="sign-in-button" onClick={handleClick}>SIGN IN</button><br />
                     <Link to="/Welcomepage"><p className="goto">Go to Home Page</p></Link>
        			</form>
      			</div>

    )
}

export default Signin;