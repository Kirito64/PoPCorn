import React from "react"
import PropTypes from "prop-types"
import "./team.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"


const TeamCard = (props)=>{
	return (
		<div className="team-member-card">
			<div className="team-member-picture-wrapper">
				<img src={props.src} width="150" height="150"></img>
			</div>
			<p className="team-member-name green">{props.name}</p>
			<p className="team-member-designation">{props.designation}</p>
			<div className="team-member-social links">
				<a href={props.linkedin} target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faLinkedin} className="follow"/>
				</a>
				<a href={props.github} target="_blank" rel="noreferrer">
					<FontAwesomeIcon icon={faGithub} className="follow"/>
				</a>
			</div>
		</div>
	)
}

TeamCard.propTypes = {
	src : PropTypes.string,
	linkedin: PropTypes.string,
	github: PropTypes.string,
	name: PropTypes.string,
	designation: PropTypes.string,
}

export default TeamCard
