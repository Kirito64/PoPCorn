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
import Faq from "../components/body/faq"

const MainPage = () => {
	
	const question = "Test? hello"
	const answer = "lorem ipsum dolor sit amet consectetur adipisicing 	 elit non proident d"
	return(
		<div className="superWrapper">
			<NavBar />
			<LandingPage />
			<About />
			<div className="content"> 
				<SectionHeading title= "Judges" />
				<div className="section-wrapper team-content">
					{judges.map((judge,idx)=>{
						return <JudgesCard {...judge} key={idx}/>
					})}
				</div>
			</div>
			<Faq question = {question} answer = {answer}/>
			<Faq question = {question} answer = {answer}/>
			<div className="content"> 
				<SectionHeading title= "Team" />
				<div className="section-wrapper team-content">
					{teams.map((team,idx)=>{
						return <TeamCard {...team} key={idx}/>
					})}
				</div>
			</div>
		</div>
	)
}

export default MainPage
