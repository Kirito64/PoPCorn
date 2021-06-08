import React, { useState } from "react"
import PropTypes from "prop-types"
import "./faq.css"
const Faq = (props)=>{
	const [hidden, setHidden] = useState(true)


	const toggleHidden = ()=>{
		setHidden(!hidden)
	}
	if(hidden){
		return(
			
			<div className="faq-wrapper" onClick={toggleHidden}>
				<div className="faq">
					{props.question}
				</div>
				<div className="faq-answer hidden">
					{props.answer}
				</div>
			</div>
		)
	}
	else{
		return(
			<div className="faq-wrapper" onClick={toggleHidden}>
				<div className="faq">
					{props.question}
				</div>
				<div className="faq-answer" >
					{props.answer}
				</div>
			</div>
		)
	}
	
}

Faq.propTypes = {
	question: PropTypes.string,
	answer: PropTypes.string,
}


export default Faq