import PropTypes from "prop-types"

import "./sectionheading.css"
import React from "react"

const SectionHeading = (props)=>{
	

	return(
		<div className="sheading-main">
			{props.title}
			<div className="sheading-line"></div>
		</div>
	)
}

SectionHeading.propTypes = {
	title: PropTypes.string
}

export default SectionHeading