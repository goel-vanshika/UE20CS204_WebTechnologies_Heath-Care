import React from 'react';
import ReactDOM from 'react-dom';
import Signup from "./components/Signup"
import Signin from "./components/Signin"
import Home from "./components/Home"
import Welcomepage from "./components/Welcomepage"
import Shop from "./components/Shop"
import ActivityForm from "./components/ActivityForm"
import Sleep from "./components/Sleep"
import Body from "./components/Body"
import Food from "./components/Food"
import { BrowserRouter, Route } from "react-router-dom";

ReactDOM.render(
<React.StrictMode>
			<BrowserRouter>
					<Route path="/" exact component={Home} />
					<Route path="/Signup" component={Signup} />
					<Route path="/Signin" component={Signin} />
					<Route path="/Welcomepage" component={Welcomepage} />
					<Route path="/Shop" component={Shop} />
					<Route path="/Activity" component={ActivityForm} />
					<Route path="/Sleep" component={Sleep} />
					<Route path="/Body" component={Body} />
					<Route path="/Food" component={Food} />
			</BrowserRouter>  
</React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

