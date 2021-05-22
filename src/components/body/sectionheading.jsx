
import "./sectionheading.css"

const SectionHeading = (props)=>{
	

	return(
		<div className="sheading-main">
			{props.title}
			<div className="sheading-line"></div>
		</div>
	)
}

export default SectionHeading