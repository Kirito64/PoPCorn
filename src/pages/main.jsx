import React from "react"
import LandingPage from "../components/body/landing"
import NavBar from "../components/header/NavBar"
import "./main.css"
import TeamCard from "../components//body/teamCard"
// import JudgesCard from "../components//body/judgesCard"
import teams from "../components//body/teams"
// import judges from "../components//body/judges"
import About from "../components//body/about"
import SectionHeading from "../components/body/sectionheading"
import Faq from "../components/body/faq"
import Schedule from "../components/body/schedule"
import mlai from "../assets/svg/mlai.svg"
import webdev from "../assets/svg/webdev.svg"
import appdev from "../assets/svg/appdev.svg"
import arvr from "../assets/svg/arvr.svg"
import openinovation from "../assets/svg/open-inovation.svg"
import SectionContainer from "../components/body/sectioncontent"

const MainPage = () => {
	
	const heading = "ML/AI"
	const content =" Taking the giant leap of turning things smart enough to mimic the naturality of humans into bit driven machines, this track paves the way for smart techies to bring up solutions that seamlessly solve complex and bulky real-world problems!"
	const svg = mlai
	const heading1 = "WEB Dev"
	const content1 =" With trendy intuitive designs to easy navigation and authoritative content, create a website from scratch to win the challenge."
	const svg1 = webdev
	const heading2 = "APP Dev"
	const content2 =" From simplicity and speed to flexibility and security, create the most amazing mobile applications for this challenge."
	const svg2 = appdev
	const heading3 = "AR/VR"
	const content3 =" Designing turned out a lot easier with Virtual reality technology. This track impels more privilege to the users as it connects the real and digital world."
	const svg3 = arvr
	const heading4 = "Open Innovation"
	const content4 =" A track on the special demands of the participants, covering all the out of the box ideas that do not fit in any of the above mentioned tracks, for the wild ideas brewing in the sculpted minds. Get rabid with all the Technology ideas in the tertiary sectors!"
	const svg4 = openinovation

	const question = "Who can participate? Is any experience required for it?"
	const answer = "Whether you are a novice, an intense coder, or any tech enthusiast, Popcorn is for you! You just need curiosity and a problem solver’s thinking. The rest elements you will get to know from the mentors."
	const question1= "I want to participate solo, what should I do?"
	const answer1 = "Judging team vs solo participant would be injustice, so we are not allowing solo participation"
	const question2= "When and Where is the hackathon being conducted?"
	const answer2="The Popcorn will be completely virtual and it will be conducted from 25th June 2020, 4 pm to 27th June 2020, 10 pm IST."
	const question3= "Can I bring my previously built project to Hackathon?"
	const answer3="No. You can bring your ideas that are previously formulated but your projects must be new i.e, built and executed in 5 days because challenges will be given to you at the time of hackathon itself."
	const question4="Is there any official communication channel with the organizing team?"
	const answer4="Yes, We got you covered! We have an active Discord channel for communication, along with some cool mentors to whom you can ask for help."
	const question5="Where can I find the full schedule?"
	const answer5="To be Declared soon, Nevertheless, the full always updated schedule will be available on the website itself."
	const question6=" Is there any Code of Conduct?"
	const answer6="Yes, we will be following Devfolio's Code Of Conduct!"
	const question7="Didn’t find the question I have, What can I do?"
	const answer7="Simply write to us on any of our social media platforms and we will get back to you at earliest."
	
	return(
		<div className="superWrapper">
			<NavBar  />
			<LandingPage />
			<Schedule  />
			<About  />
			<SectionContainer heading = {heading} content={content} svg= {svg}/>
			<SectionContainer heading = {heading1} content={content1} svg= {svg1}/>
			<SectionContainer heading = {heading2} content={content2} svg= {svg2}/>
			<SectionContainer heading = {heading3} content={content3} svg= {svg3}/>
			<SectionContainer heading = {heading4} content={content4} svg= {svg4}/>
			{/* <div className="content"> 
				<SectionHeading title= "Judges" />
				<div className="section-wrapper team-content">
					{judges.map((judge,idx)=>{
						return <JudgesCard {...judge} key={idx}/>
					})}
				</div>
			</div> */}
			<SectionHeading title= "FAQs" />
			<Faq question = {question} answer = {answer}/>
			<Faq question = {question1} answer = {answer1}/>
			<Faq question = {question2} answer = {answer2}/>
			<Faq question = {question3} answer = {answer3}/>
			<Faq question = {question4} answer = {answer4}/>
			<Faq question = {question5} answer = {answer5}/>
			<Faq question = {question6} answer = {answer6}/>
			<Faq question = {question7} answer = {answer7}/>
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