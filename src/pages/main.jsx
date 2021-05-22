import React from "react";
import LandingPage from "../components/body/landing";
import NavBar from "../components/header/NavBar";
import SectionHeading from "../components/body/sectionheading";
import "./main.css"
import SectionContainer from "../components/body/sectioncontent";
const MainPage = ()=>{

	return(
		<React.Fragment>
			<NavBar/>
			<LandingPage/>
		</React.Fragment>
	)
}

export default MainPage