/* eslint-disable no-unused-vars */
import Button from "./button"
// import CountDown from "./countdown"
import "./landing.css"
// import SectionContainer from "./sectioncontent"
// import SectionHeading from "./sectionheading"
// import mlai from "../../assets/svg/mlai.svg"
import React from "react"
import Logo from "../../assets/svg/logoPopcorn.svg"
import CountDown from "./countdown"
const LandingPage = () => {
	// const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, dicta? Culpa error, recusandae odio modi nulla possimus optio autem! Dolor magni nam eaque necessitatibus odio? Animi autem facilis enim officiis."
	return(
		<div className="body">
			<div className="content">
				<div className = "landing">
					<img src = {Logo} className="logo"/>
					<p className="landingheading">
						Developer Hackathon 2021
					</p>
					<div className = "buttonGroup">
						<Button text="Dashboard"/>
						<Button text="Social Link"/>	
					</div>
					<div>
						<CountDown tillDate = "20210625" />
					</div>
				</div>
			</div>
		</div>
	)}

export default LandingPage
 