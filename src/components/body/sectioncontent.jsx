import "./sectioncontent.css"
import PropTypes from "prop-types"
import React from "react"

const SectionContainer = (props)=>{

	return(
		<div className="scontainer">
			<div className="sectionheader">
				{props.heading}
			</div>

			<div className="sectioncontent">
				<div className="scon">
					{props.content}
				</div>
				<div className="sectionimage">
					<img src = {props.svg}></img>
				</div>
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