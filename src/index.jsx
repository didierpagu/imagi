import React from "react";
import ReactDOM from "react-dom";
import './index.css';
// Components
import SelectInicio from './components/SelectInicio';
import store from './store';
import { Provider } from 'react-redux';
import {  BrowserRouter as Router,  Route} from 'react-router-dom'

// Render App
ReactDOM.render(
  	<Provider store={store}>
		<Router>  
			<div>
				<Route path="/" component={SelectInicio} />
			</div>
		</Router>  
	</Provider>,
  document.getElementById("root")
);