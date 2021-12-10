import React from 'react';
import image from "../components/image.jpeg"
import "../css/signup.css"
import axios from 'axios'
import { Link } from 'react-router-dom';

class Signup extends React.Component {
	constructor(props){
		super(props)
		this.state={
			name:'',
			mail_id:'',
			password:'',
		}
	}
	changeHandler= e =>{
		this.setState({[e.target.name]:e.target.value})
	}
	submitHandler = e => {
		e.preverntDefault()
		console.log(this.state);
		axios.post('http://localhost:3000/Signup',this.state)
			.then(response =>{
				console.log(response);
			})
			.catch(error => {
				console.log(error);
			})
	}
    render() {
		const{name ,mail_id ,password}=this.state;
        return (
				<div id="body">
        			<img src={image} alt="fitness" className="img" />
					<div class="upper-pane">
					<Link to="/Signin"><p class="signin">Sign In</p></Link>
					<Link to="/Signup"><p class="register">Sign Up</p></Link>
				</div>				
				<form onSubmit={this.submitHandler} method="POST" action="http://localhost:3000/Signup">
         					 <p class="email">Email</p>	
         					 <input type="text" name="mail_id" class="enter-register-email" value={mail_id} onChange={this.changeHandler} required autofocus /><br />
          						<p class="uname">Username</p>	
         					<input type="text" name="name" class="enter-register-uname" value={name} onChange={this.changeHandler} required autofocus /><br />
          						<p class="password">Password</p>	
          					<input type="password" name="password" class="enter-register-pswrd" value={password} onChange={this.changeHandler} required autofocus /><br />
							  <Link to="/Signin"><input class="register-button" type="submit"  /></Link><br />
							  <Link to="/Welcomepage"><p className="gotoe">Go to Home Page</p></Link>
       				 </form>
      			</div>
        )
    }
}

export default Signup;