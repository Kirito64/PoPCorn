import React from "react"
import schedules from "../../assets/svg/scheudle01.png"
import SectionHeading from "./sectionheading"
import "./schedule.css"

function Schedule() {
	return (
		<div className="contentt">
			<SectionHeading title="Schedule" />
			<div className="about-contentt">
				<div className="imagee">
					<img src={schedules} className="maggi" />
				</div>
			</div>
		
		</div>
	)
}

export default Schedule
