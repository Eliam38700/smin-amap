import React from 'react';
import Inventory from './Inventory';
import Order from './Order';
import Header from './Header';
class App extends React.Component{
	constructor(){
		super();
		this.state = {
			veggies : {}
		}
		this.addVeggie = this.addVeggie.bind(this);

	}

	addVeggie(p_veggie) {
		// mettre à jour le state
		const veggies = {...this.state.veggies};
		// ajouter nos nouveau légumes
		const timestamp = Date.now();
		veggies[`veggie-${timestamp}`] = p_veggie;
		// appliquer le state
		this.setState({veggies});
	}

	render() {
		return (
				<div className ="amap">
					<div className= "menu">
						<Header tagline="Des bons légumes"/>
					</div>
						
					<Order/>
					<Inventory addVeggie = {this.addVeggie}/> 
				</div>
		)
			
	}
}

export default App;
