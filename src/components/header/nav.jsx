import React from "react"
import PropTypes from "prop-types"
const Nav = (props)=>{
	return(
		<div className = "nav">
			<a herf = {props.url}>
				{props.text}
			</a>
		</div>
	)
}

Nav.propTypes = {
	url: PropTypes.string,
	text: PropTypes.string,
}


export default Nav