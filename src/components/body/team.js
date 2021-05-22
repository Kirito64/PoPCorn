import React from 'react';
import "./team.css";
import {teams} from "./teams";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";


function Team() {
    return (
        <div id="team" className="section">
            <h2 className="section-heading"> Team</h2>
            <div className="section-wrapper team-content">
                {teams.map((a,i)=>(
                <div className="team-member-card">
                    <div className="team-member-picture-wrapper">
                        <img src={a.src} width="150" height="150"></img>
                    </div>
                    <p className="team-member-name green">{a.name}</p>
                    <p className="team-member-designation">{a.designation}</p>
                    <div className="team-member-social links">
                        <a href={a.linkedin} target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="follow"/>
                        </a>
                        <a href={a.github} target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="follow"/>
                        </a>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Team;
