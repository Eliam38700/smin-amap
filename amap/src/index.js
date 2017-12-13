// c'est parti !
import React from 'react';
import './css/style.css';
import { render } from 'react-dom';
import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';

//import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const Root = () => {

	return (
		<Router>

			<Switch>
					<Route exact path="/" component={StorePicker}/>
					<Route path="/store/:storeId" component={App}/>
					<Route component={NotFound}/>
			</Switch>

		</Router>
	);

}


render( <Root/> , document.querySelector("#main") );