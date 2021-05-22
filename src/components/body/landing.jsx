import Button from "./button"
import CountDown from "./countdown"
import "./landing.css"
import SectionContainer from "./sectioncontent"
import SectionHeading from "./sectionheading"
import React from "react"
const LandingPage = () => (
	<div className="body">
		<div className="content">
			<Button />
			<CountDown tillDate="20210530" />
			<SectionHeading title="About" />
			<SectionHeading title="Tracks" />
			<SectionHeading title="Prizes" />
			<SectionContainer />
		</div>
	</div>
)

export default LandingPage
