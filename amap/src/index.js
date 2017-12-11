// c'est parti !
import React from 'react';
import { render } from 'react-dom';
class StorePicker extends React.Component{

	render(){
		return (<div className = "content">
					<p>Hello !</p>
				</div>)
			
	}
}

render(<StorePicker/>,document.querySelector("#main") );