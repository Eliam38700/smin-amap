import React from 'react';
class StorePicker extends React.Component{

	render(){
		return (
					<form className="store-selector">
						{/* Comment */}
						<h2>Entrez un nom de magasin</h2>
						<input type="text" required placeholder="Nom du magasin"/>
						<button type="submit">Visiter le magasin</button>
							
					</form>			 
				)
	}
}

//fichier peut etre importer ailleurs avec le nom StorePicker
export default StorePicker;