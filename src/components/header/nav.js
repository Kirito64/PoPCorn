import react from 'react';

const Nav = (props)=>{


	
	return(
		<div className = "nav">
			<a herf = {props.url}>
				{props.text}
			</a>
		</div>
	)

}


export default Nav