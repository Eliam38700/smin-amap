import React from 'react';

class AddVeggieForm extends React.Component {

	createVeggie(event){
		event.preventDefault();
		/*console.log(this.veggieName.value);
		console.log(this.veggiePrice.value);
		console.log(this.veggieStatus.value);
		console.log(this.veggieDesc.value);
		console.log(this.veggieImg.value);
		*/
		const veggie = {
			name: this.veggieName.value,
			price: this.veggiePrice.value,
			status: this.veggieStatus.value,
			desc : this.veggieDesc.value,
			img : this.veggieImg.value
		}
		console.log(veggie);
	}

	render(){
		return (
				<form className="veggie-edit" onSubmit={ (event) => this.createVeggie(event)} >
					<input ref={(input) => this.veggieName = input} type="text" placeholder="Veggie Name"/>
					<input ref={(input) => this.veggiePrice = input} type="text" placeholder="Veggie Price"/>
					<select ref={(select) => this.veggieStatus = select} >
						<option value="available" >Frais !</option>
						<option value="unavailable" >Y'en a plus !</option>
					</select>
					<textarea ref={(textarea) => this.veggieDesc = textarea} placeholder="Veggie Description"></textarea>
					<input ref={(input) => this.veggieImg = input} type="text" placeholder="Veggie Image"/>
					<button type="submit">+ Ajouter un article</button>
					
				</form>
			);
	}

}

export default AddVeggieForm;