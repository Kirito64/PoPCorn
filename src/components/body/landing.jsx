import Button from "./button"
import CountDown from "./countdown"
import "./landing.css"
import moment from "moment";
const LandingPage = ()=>{
	return(
		<div className = "body">
			<div className = "content">
				<Button></Button>
				<CountDown tillDate = "20210530"/>
			</div>
		</div>
	)
}


export default LandingPage;