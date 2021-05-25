import React from "react"
import "./about.css"
import SectionHeading from "./sectionheading"
import Logo from "../../assets/svg/logoPopcorn.svg"

function About() {
	return (
		<div className="scontainer">
			<SectionHeading title= "About" />
			<div className="about-content">
				<div className="sidebar">
					<p style={{color:"white"}}>PopCorn, the Developer Hackathon, a platform to unleash innovative developers worldwide and come together virtually to ideate, innovate and inspire one another and the community and provide a friendly yet competitive environment where teams can bring out the best in themselves. Let your imagination take wings and fly by turning them into reality. </p>
					<p style={{color:"white"}}>Popcorn is the very first initiative by the IIIT Nagpur with Women In Technology Community , bringing together 20+ other communities to host this hackathon, for Innovators to brainstorm and create a virtual but real prototype from June 18, 2021 - June 20, 2021. Let the Heat Pop the Code.</p>
				</div>
				<div className="imagee">
					<img src ={Logo} className="abouty" />
				</div>
			</div>
		</div>
	)
}

export default About
