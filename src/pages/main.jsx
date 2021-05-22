import React from "react";
import LandingPage from "../components/body/landing";
import NavBar from "../components/header/NavBar";
import SectionHeading from "../components/body/sectionheading";
import "./main.css"
import Team from "../components/body/team";
const MainPage = ()=>{

	return(
		<React.Fragment>
			<NavBar/>
			<LandingPage/>
			<SectionHeading title="About"/>
			<SectionHeading title="Tracks"></SectionHeading>
			<SectionHeading title="Prizes"/>
			<Team />
		</React.Fragment>
	)
}

export default MainPage