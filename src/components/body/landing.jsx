import Button from "./button"
import CountDown from "./countdown"
import "./landing.css"
import SectionContainer from "./sectioncontent"
import SectionHeading from "./sectionheading"
import mlai from "../../assets/svg/mlai.svg"
import React from "react"
const LandingPage = () => {
	const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dicta? Culpa error, recusandae odio modi nulla possimus optio autem! Dolor magni nam eaque necessitatibus odio? Animi autem facilis enim officiis."
	return(
		<div className="body">
			<div className="content">
				<Button text = "Hello" />
				<CountDown tillDate="20210530" />
				<SectionHeading title="About" />
				<SectionHeading title="Tracks" />
				<SectionHeading title="Prizes" />
				<SectionContainer heading="Test" content={content} svg = {mlai}/>
			</div>
		</div>
	)}

export default LandingPage
 