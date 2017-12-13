import React from 'react';
import PropTypes from 'prop-types'
import  { getFunName } from '../helpers';
class StorePicker extends React.Component{

	constructor(){
		super();
		/*this.goToStore = */this.goToStore.bind(this);
	}

	goToStore(event,){
		event.preventDefault();
		//history.push('');
		const storeId = this.storeInput.value;
		console.log(`On va vers ${storeId}`);
		// On récupère le texte entré dans le formulaire
		// Ensuite on va se déplacer de / vers /store/:storeId
		this.props.history.push(`store/${storeId}`);
	}

	render() {
		return (
			<form className="store-selector" onSubmit = {(event) => this.goToStore(event)}>
				{/* Comment */}
				<h2>Entrez un nom de magasin</h2>
				<input type="text" ref={ (toto)=>{ this.storeInput = toto } } required placeholder="Nom du magasin" defaultValue={getFunName()}/>
				<button type="submit">Visiter le magasin</button>
			</form>			 
		)	
	}

}

StorePicker.contextTypes = {
	router: PropTypes.object
}
//fichier peut etre importer ailleurs avec le nom StorePicker
export default StorePicker;