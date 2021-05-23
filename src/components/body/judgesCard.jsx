import React from "react"
import PropTypes from "prop-types"
import "./team.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"


const JudgesCard = ({src,name,designation,linkedin,github})=>{
	return (
		<div className="team-member-card">
			<div className="team-member-picture-wrapper">
				<img src={src} width="150" height="150"></img>
			</div>
			<p className="team-member-name green">{name}</p>
			<p className="team-member-designation">{designation}</p>
			<div className="team-member-social links">
				<a href={linkedin} target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faLinkedin} className="follow"/>
				</a>
				<a href={github} target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faGithub} className="follow"/>
				</a>
			</div>
		</div>
	)
}

JudgesCard.propTypes = {
	src : PropTypes.string,
	linkedin: PropTypes.string,
	github: PropTypes.string,
	name: PropTypes.string,
	designation: PropTypes.string,
}


export default JudgesCard
