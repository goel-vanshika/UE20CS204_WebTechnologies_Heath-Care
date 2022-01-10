import {React,useState} from 'react';
import "../css/signup.css"
import image from "../components/image.jpeg"
import { Link } from 'react-router-dom';
import axios from "axios";

function Signup()
{
	const[input, setInput] = useState({
		first_name:'',
		last_name:'',
		mail_id:'',
		user_name:'',
		pass_word:''
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
		const newUser2={
			first_name:input.first_name,
			last_name:input.last_name,
			mail_id:input.mail_id,
			user_name:input.user_name,
			pass_word:input.pass_word
		}
		console.log(newUser2)
		axios.post('http://localhost:3001/Register',newUser2)
	}
	return(
		<div id="body">
        			<img src={image} alt="fitness" className="img" />
					<div className="upper-pane">
					<Link to="/Signin"><p className="signin">Sign In</p></Link>
					<Link to="/Signup"><p className="register">Sign Up</p></Link>
					</div>				
					   <form >
					<p className="fname">First Name</p>	
					<input type="text" name="first_name" className="fname-input" value={input.first_name} onChange={handleChange} required autoFocus /><br />
                    <p className="lname">Last Name</p>	
					<input type="text" name="last_name" className="lname-input" value={input.last_name} onChange={handleChange} required autoFocus /><br />
                    <p className="mail">Email</p>	
					<input type="text" name="mail_id" className="mail-input" value={input.mail_id} onChange={handleChange} required autoFocus /><br />
                    <p className="uname">User Name</p>	
					<input type="text" name="user_name" className="uname-input" value={input.user_name} onChange={handleChange} required autoFocus /><br />
                    <p className="pswrd">Password</p>	
					<input type="password" name="pass_word" className="pswrd-input" value={input.pass_word} onChange={handleChange} required autoFocus /><br />
         			<button type="button" name="button" className="sign-up-button" onClick={handleClick}>SIGN UP</button><br />
                     <Link to="/Welcomepage"><p className="gotoe">Go to Home Page</p></Link>
        			</form>
      			</div>
	)
}

export default Signup;