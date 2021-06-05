import React from "react"
import SectionHeading from "./sectionheading"
import "./sponsors.css"
import Devfolio from "../../assets/sponsors/Devfolio_02.svg"
import Polygon from "../../assets/sponsors/Polygon_.svg"
import Portis from "../../assets/sponsors/Portis_.png"
import Tezos from "../../assets/sponsors/Tezos.png"
import Celo from "../../assets/sponsors/Celo.png"

function Sponsors() {
	return (
		<div>
			<SectionHeading title= "Sponsors" /> 
			<div className="sponsro">
				<a href="https://devfolio.co" >  <img src={Devfolio} className="ima" />
				</a>
				<a href="https://polygon.technology/" ><img src={Polygon} className="ima"  />
				</a>
				<a href="https://www.portis.io" >
					<img src={Portis} className="ima" />
				</a>
				<a   href="https://tezos.com"> <img src={Tezos}className="ima"  /></a>
				<a  href="https://celo.org " > <img src={Celo} className="ima" /></a>
				
			</div>
		</div>
	)
}

export default Sponsors
