import "./sectioncontent.css"
import PropTypes from "prop-types"
import React from "react"
const SectionContainer = (props)=>{

	return(
		<div className="scontainer">
			<div className="sectioncontent">
				<div className="sectionheader">
					{props.heading}
				</div>
				{props.content}
			</div>
			<div className="sectionimage">
				<img src = {props.svg}></img>
			</div>
		</div>
	)

}

SectionContainer.propTypes = {
	content: PropTypes.String,
	heading: PropTypes.String,
	svg: PropTypes.String,
	
}


export default SectionContainer