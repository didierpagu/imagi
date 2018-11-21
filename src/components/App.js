import React from "react";
import {  BrowserRouter as Router,  Route, Switch } from 'react-router-dom';
import Loginform from './Loginform';
import App2 from './App2';


var prueba=false

const App = ({title}) => {
  return (

		<div> 
			<Router>
				<Switch >
					{
					prueba===true?      
					<Route path="/" component={App2} />:
					<Route path="/" component={Loginform}/>
					} 
				</Switch>
			</Router>
		</div> 
  );
};

export default App;