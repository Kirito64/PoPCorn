import "./button.css"
import React from "react"
import PropTypes from "prop-types"

const Button = (props)=>{

	return(
		<div className = "button-main">
			{props.text}
		</div>
	)
}

Button.propTypes = {
	text: PropTypes.string,
}

export default Button