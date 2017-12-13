import React from 'react';
import Inventory from './Inventory';
import Order from './Order';
import Header from './Header';
class App extends React.Component{
	render() {
		return (
				<div className ="amap">
					<div className= "menu">
						<Header tagline="Des bons légumes"/>
					</div>
						
					<Order/>
					<Inventory/> 
				</div>
		)
			
	}
}

export default App;
