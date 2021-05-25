import React from "react"
import LandingPage from "../components/body/landing"
import NavBar from "../components/header/NavBar"
import "./main.css"
import TeamCard from "../components//body/teamCard"
import JudgesCard from "../components//body/judgesCard"
import teams from "../components//body/teams"
import judges from "../components//body/judges"
import About from "../components//body/about"
import SectionHeading from "../components/body/sectionheading"
import Faqs from "../components/body/faqs"

const MainPage = () => (
	<>
		<NavBar />
		<LandingPage />
		<About />
		<div className="scontainer"> 
			<SectionHeading title= "Judges" />
			<div className="section-wrapper team-content">
				{judges.map((judge,idx)=>{
					return <JudgesCard {...judge} key={idx}/>
				})}
			</div>
		</div>
		<Faqs />
		<div className="scontainer"> 
			<SectionHeading title= "Team" />
			<div className="section-wrapper team-content">
				{teams.map((team,idx)=>{
					return <TeamCard {...team} key={idx}/>
				})}
			</div>
		</div>
	</>
)

export default MainPage
