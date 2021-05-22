import "./sectioncontent.css"
import PropTypes from "prop-types"
import React from "react"
const SectionContainer = (props)=>{

	return(
		<div className="scontainer">
			<div className="sectioncontent">
				<div className="sectionheader">
					Test
				</div>
				{props.content}
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, deserunt dicta assumenda incidunt corrupti, ea officiis minima natus aperiam eaque repudiandae. Placeat atque deserunt, cupiditate libero fugiat adipisci soluta obcaecati!
			</div>
			<div className="sectionimage">

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