import Button from "./button"
import CountDown from "./countdown"
import "./landing.css"
import moment from "moment";
import SectionContainer from "./sectioncontent";
import SectionHeading from "./sectionheading";
const LandingPage = ()=>{
	return(
		<div className = "body">
			<div className = "content">
				<Button></Button>
				<CountDown tillDate = "20210530"/>
				<SectionHeading title="About"/>
				<SectionHeading title="Tracks"></SectionHeading>
				<SectionHeading title="Prizes"/>
				<SectionContainer/>
			</div>
		</div>
	)
}


export default LandingPage;