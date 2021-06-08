import React from "react"
import "./NavBar.css"
import Nav from "./nav"
import items from "./navitems"
import {FaBars} from "react-icons/fa"


const NavBar  = () =>{
	const navItems = items.map((data, i)=>{
		return <Nav text = {data.text} url = {data.url} key ={i}></Nav>
	})

	const toggleNav = ()=>{

	}
	return(
		<div className="main">
			{navItems}

			<div className="mobile-only nav" onClick = {toggleNav}>
				<FaBars className="icon"/>
			</div>
		</div>	
	)
}
export default NavBar