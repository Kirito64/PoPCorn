import React from "react"
import schedules from "../../assets/svg/schedule.png"
import SectionHeading from "./sectionheading"
import "./schedule.css"

function Schedule() {
	return (
		<div className="content">
			<SectionHeading title="Schedule" />
			<div className="about-content">
				<div className="imagee">
					<img src={schedules} className="maggi" />
				</div>
			</div>
		
		</div>
	)
}

export default Schedule
